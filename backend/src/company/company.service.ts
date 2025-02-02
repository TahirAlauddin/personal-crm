import { Injectable } from "@nestjs/common";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { Model } from "mongoose";
import { Company } from "src/schema/company.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) {}
  create(createCompanyDto: CreateCompanyDto) {
    const company = new this.companyModel(createCompanyDto);
    return company.save();
  }

  findAll() {
    // Delete id from the response, only return name, industry, location, status, logo
    return this.companyModel.find().select("-_id -__v");
  }

  findOne(id: string) {
    return this.companyModel.findById(id);
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.companyModel.updateOne(
      { _id: id },
      updateCompanyDto,
    );
    return company;
  }

  async remove(id: string) {
    const company = await this.companyModel.deleteOne({ _id: id });
    return company;
  }
}
