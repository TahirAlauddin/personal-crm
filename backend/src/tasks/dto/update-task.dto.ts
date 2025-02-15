import { PartialType } from "@nestjs/mapped-types";
import { CreateTaskDto } from "./create-task.dto";
import { IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString()
  title?: string;

  @IsString()
  description?: string;

  @IsDate()
  @Type(() => Date)
  dueDate?: Date;

  @IsString()
  status?: string;
}
