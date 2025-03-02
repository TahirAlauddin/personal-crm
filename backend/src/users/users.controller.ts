import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "src/schema/user.schema";

/**
 * Controller handling user-related HTTP requests
 * Provides endpoints for retrieving user information
 */
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Retrieves all users from the database
   * @returns Promise containing array of all users
   */
  @Get()
  async getUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  /**
   * Retrieves a specific user by their ID
   * @param id - The unique identifier of the user
   * @returns Promise containing the user data if found
   * @throws NotFoundException if user doesn't exist
   */
  @Get("me")
  async getUserById(@Param("id") id: string): Promise<User> {
    return await this.usersService.findById(id);
  }
}
