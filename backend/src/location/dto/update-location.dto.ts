import { IsString, IsOptional } from "class-validator";

export class UpdateLocationDto {
  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  @IsOptional()
  country: string;
}
