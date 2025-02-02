import { Inject, Injectable, NotFoundException, Scope } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../schema/user.schema";
import { REQUEST } from "@nestjs/core";

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException("User not found");
    }
    return user;
  }
}
