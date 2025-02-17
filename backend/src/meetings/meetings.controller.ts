import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { MeetingsService } from "./meetings.service";
import { CreateMeetingsDto } from "./dto/create-meetings.dto";
import { UpdateMeetingsDto } from "./dto/update-meetings.dto";

@Controller("meetings")
export class MeetingsController {
  constructor(private readonly meetingsService: MeetingsService) {}

  @Post()
  create(@Body() createMeetingDto: CreateMeetingsDto) {
    return this.meetingsService.create(createMeetingDto);
  }

  @Get()
  findAll() {
    return this.meetingsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.meetingsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMeetingDto: UpdateMeetingsDto) {
    return this.meetingsService.update(id, updateMeetingDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.meetingsService.remove(id);
  }
}
