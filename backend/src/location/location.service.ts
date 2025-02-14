import { Injectable } from "@nestjs/common";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Location } from "src/schema/location.schema";
import { Model, UpdateQuery } from "mongoose";

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name) private locationModel: Model<Location>,
  ) {}

  create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location = new this.locationModel(createLocationDto);
    return location.save();
  }

  findAll() {
    return this.locationModel.find();
  }

  findOne(id: string) {
    return this.locationModel.findById(id);
  }

  async update(id: string, updateLocationDto: UpdateLocationDto) {
    const location = await this.locationModel.updateOne(
      { _id: id },
      updateLocationDto as UpdateQuery<Location>,
    );
    if (location) {
      return this.locationModel.findById(id);
    }
    return null;
  }

  remove(id: string) {
    return this.locationModel.findByIdAndDelete(id);
  }
}
