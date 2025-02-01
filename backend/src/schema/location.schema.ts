import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Location {
  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  country: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
