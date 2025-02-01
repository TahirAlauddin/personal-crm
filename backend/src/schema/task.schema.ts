import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./user.schema";

// Task Schema
@Schema()
export class Task {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
  assignedTo: User;
  @Prop()
  dueDate: Date;
  @Prop()
  status: string;
  @Prop()
  createdAt: Date;
  @Prop()
  updatedAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
