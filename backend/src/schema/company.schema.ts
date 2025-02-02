import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { IsString } from "class-validator";

@Schema()
export class Company {
  @Prop()
  @IsString()
  name: string;

  @Prop()
  @IsString()
  industry: string;

  @Prop()
  @IsString()
  location: string;

  @Prop()
  @IsString()
  status: string;

  // logo is supposed to be a picture
  @Prop()
  @IsString()
  logo: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
