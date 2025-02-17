import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateMailDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  @IsString()
  subject: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsNumber()
  openRate: number;
}
