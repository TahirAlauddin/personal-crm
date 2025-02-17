import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MailController } from "./mail.controller";
import { MailService } from "./mail.service";
import { Mail, MailSchema } from "../schema/mail.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mail.name, schema: MailSchema }]),
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
