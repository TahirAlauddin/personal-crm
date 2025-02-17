import { IsDate, IsEmail, IsString } from "class-validator";
import mongoose from "mongoose";

export class CreateMailDto {
  @IsEmail()
  @IsString()
  email: string;
  @IsString()
  subject: string;
  @IsString()
  content: string;
  @IsDate()
  sentAt: Date;
  @IsString()
  status: string;
  @IsDate()
  createdAt: Date;
  @IsString()
  recipients: mongoose.Schema.Types.ObjectId[];
}
