import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import mongoose from "mongoose";

// Agenda/Meeting Schema
@Schema()
export class Meeting {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  date: Date;
  @Prop()
  startTime: Date;
  @Prop()
  endTime: Date;
  @Prop()
  participants: {
    type: mongoose.Schema.Types.ObjectId;
    ref: "User";
  }[];
  @Prop()
  status: string;
  @Prop()
  createdAt: Date;
  @Prop()
  updatedAt: Date;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);
