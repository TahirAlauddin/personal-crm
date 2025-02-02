import { Injectable, NotFoundException } from "@nestjs/common";
import { LoginDto, SignupDto } from "./auth.dto";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { User } from "src/schema/user.schema";
import { Location } from "src/schema/location.schema";
import { Connection, Model } from "mongoose";

@Injectable()
export class AuthService {
  constructor(
    @InjectConnection() private readonly connection: Connection,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Location.name) private locationModel: Model<Location>,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userModel.findOne({ email: loginDto.email });
    if (!user) {
      throw new NotFoundException("User not found");
    }
  }

  async signup(signupDto: SignupDto) {
    const user = await this.userModel.create(signupDto);
    return user;
  }
}
