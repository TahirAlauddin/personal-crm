import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../schema/user.schema";

/**
 * Service handling user-related business logic
 * Provides methods for user data manipulation and retrieval
 */
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  /**
   * Retrieves all users from the database
   * @returns Promise containing array of all users
   */
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  /**
   * Finds a user by their ID
   * @param id - The unique identifier of the user to find
   * @returns Promise containing the user data
   * @throws NotFoundException if the user doesn't exist
   */
  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException("User not found");
    }
    return user;
  }
}
