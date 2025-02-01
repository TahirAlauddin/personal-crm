import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";

@Schema()
export class Company {
  @Prop()
  name: string;

  @Prop()
  industry: string;

  @Prop()
  location: string;

  @Prop()
  status: string;

  @Prop()
  logo: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
