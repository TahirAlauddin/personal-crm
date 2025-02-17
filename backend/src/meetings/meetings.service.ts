import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Meeting } from "../schema/meeting.schema";
import { CreateMeetingsDto } from "./dto/create-meetings.dto";
import { UpdateMeetingsDto } from "./dto/update-meetings.dto";

@Injectable()
export class MeetingsService {
  constructor(
    @InjectModel(Meeting.name) private meetingModel: Model<Meeting>,
  ) {}

  async create(createMeetingDto: CreateMeetingsDto): Promise<Meeting> {
    const createdMeeting = new this.meetingModel(createMeetingDto);
    return createdMeeting.save();
  }

  async findAll(): Promise<Meeting[]> {
    return this.meetingModel.find().exec();
  }

  async findOne(id: string): Promise<Meeting> {
    const meeting = await this.meetingModel.findById(id).exec();
    if (!meeting) {
      throw new NotFoundException(`Meeting with ID ${id} not found`);
    }
    return meeting;
  }

  async update(
    id: string,
    updateMeetingDto: UpdateMeetingsDto,
  ): Promise<Meeting> {
    const updatedMeeting = await this.meetingModel
      .findByIdAndUpdate(id, updateMeetingDto, { new: true })
      .exec();
    if (!updatedMeeting) {
      throw new NotFoundException(`Meeting with ID ${id} not found`);
    }
    return updatedMeeting;
  }

  async remove(id: string): Promise<Meeting> {
    const deletedMeeting = await this.meetingModel.findByIdAndDelete(id).exec();
    if (!deletedMeeting) {
      throw new NotFoundException(`Meeting with ID ${id} not found`);
    }
    return deletedMeeting;
  }
}
