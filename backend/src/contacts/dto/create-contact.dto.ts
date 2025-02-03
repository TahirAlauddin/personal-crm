import { IsString } from "class-validator";
import mongoose from "mongoose";

export class CreateContactDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  company: mongoose.Schema.Types.ObjectId;

  @IsString()
  type: string;

  @IsString()
  status: string;
}
