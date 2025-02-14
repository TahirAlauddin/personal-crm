import { Module } from "@nestjs/common";
import { LocationController } from "./location.controller";
import { LocationService } from "./location.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Location, LocationSchema } from "src/schema/location.schema";

@Module({
  controllers: [LocationController],
  providers: [LocationService],
  imports: [
    MongooseModule.forFeature([
      { name: Location.name, schema: LocationSchema },
    ]),
  ],
})
export class LocationModule {}
