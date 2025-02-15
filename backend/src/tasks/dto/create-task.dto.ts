import { IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import mongoose from "mongoose";

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  assignedTo: mongoose.Schema.Types.ObjectId;

  @Type(() => Date)
  @IsDate()
  dueDate: Date;

  @IsString()
  status: string;
}
