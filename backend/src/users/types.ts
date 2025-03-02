import { Request } from "express";
import { User } from "../schema/user.schema";

/**
 * Extended Request interface that includes user information
 * Used for requests that require authentication
 * Adds type safety for the user property added by authentication middleware
 */
export interface AuthenticatedRequest extends Request {
  user: User;
} 