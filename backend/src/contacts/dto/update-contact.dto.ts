import { PartialType } from "@nestjs/mapped-types";
import { CreateContactDto } from "./create-contact.dto";
import { IsDate, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class UpdateContactDto extends PartialType(CreateContactDto) {
  // TODO: Donot accept from the client request
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  updatedAt: Date;
}
