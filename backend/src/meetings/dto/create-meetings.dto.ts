// Write dto
import { IsDate, IsString } from "class-validator";
import mongoose from "mongoose";
export class CreateMeetingsDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDate()
  date: Date;

  @IsDate()
  startTime: Date;

  @IsDate()
  endTime: Date;

  @IsString()
  type: mongoose.Schema.Types.ObjectId;

  @IsString()
  status: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
