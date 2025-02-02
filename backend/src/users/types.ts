import { Request } from "express";
import { User } from "../schema/user.schema";

export interface AuthenticatedRequest extends Request {
  user: User;
} 