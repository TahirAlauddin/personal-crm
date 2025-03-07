import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";
import { CompanyModule } from "./company/company.module";
import { TasksModule } from "./tasks/tasks.module";
import { ContactsModule } from "./contacts/contacts.module";
import { LocationModule } from "./location/location.module";
import { MailModule } from "./mail/mail.module";
import { MeetingsModule } from "./meetings/meetings.module";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || ""),
    AuthModule,
    UsersModule,
    CompanyModule,
    TasksModule,
    ContactsModule,
    LocationModule,
    MailModule,
    MeetingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
