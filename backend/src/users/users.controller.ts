import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "src/schema/user.schema";
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get("me")
  async getUserById(@Param("id") id: string): Promise<User> {
    return await this.usersService.findById(id);
  }
}
