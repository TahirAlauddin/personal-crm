import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./user.schema";

// Email/Mail Schema
@Schema()
export class Mail {
  @Prop()
  subject: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  sender: User;
  @Prop()
  recipients: {
    type: mongoose.Schema.Types.ObjectId;
    ref: "User";
  }[];
  @Prop()
  content: string;
  @Prop()
  openRate: number;
  @Prop()
  sentAt: Date;
  @Prop()
  status: string;
  @Prop()
  createdAt: Date;
}

export const MailSchema = SchemaFactory.createForClass(Mail);
