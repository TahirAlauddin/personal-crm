import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Mail } from "../schema/mail.schema";
import { CreateMailDto } from "./dto/create-mail.dto";
import { UpdateMailDto } from "./dto/update-mail.dto";

@Injectable()
export class MailService {
  constructor(@InjectModel(Mail.name) private mailModel: Model<Mail>) {}

  async create(createMailDto: CreateMailDto): Promise<Mail> {
    const createdMail = new this.mailModel(createMailDto);
    return createdMail.save();
  }

  async findAll(): Promise<Mail[]> {
    return this.mailModel.find().exec();
  }

  async findOne(id: string): Promise<Mail> {
    const mail = await this.mailModel.findById(id).exec();
    if (!mail) {
      throw new NotFoundException(`Mail with ID ${id} not found`);
    }
    return mail;
  }

  async update(id: string, updateMailDto: UpdateMailDto): Promise<Mail> {
    const updatedMail = await this.mailModel
      .findByIdAndUpdate(id, updateMailDto, { new: true })
      .exec();
    if (!updatedMail) {
      throw new NotFoundException(`Mail with ID ${id} not found`);
    }
    return updatedMail;
  }

  async remove(id: string): Promise<Mail> {
    const deletedMail = await this.mailModel.findByIdAndDelete(id).exec();
    if (!deletedMail) {
      throw new NotFoundException(`Mail with ID ${id} not found`);
    }
    return deletedMail;
  }
}
