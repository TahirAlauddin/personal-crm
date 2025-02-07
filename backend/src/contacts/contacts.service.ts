import { Injectable } from "@nestjs/common";
import { CreateContactDto } from "./dto/create-contact.dto";
import { UpdateContactDto } from "./dto/update-contact.dto";
import { Contact } from "src/schema/contact.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
  ) {}

  create(createContactDto: CreateContactDto) {
    return this.contactModel.create(createContactDto);
  }

  findAll() {
    return this.contactModel.find();
  }

  findOne(id: string) {
    return this.contactModel.findById(id);
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.contactModel.findByIdAndUpdate(
      { _id: id },
      updateContactDto,
    );
    if (contact) {
      contact.updatedAt = new Date();
      await contact.save();
      return await this.contactModel.findById(id);
    }
    return null;
  }

  remove(id: string) {
    return this.contactModel.deleteOne({ _id: id });
  }
}
