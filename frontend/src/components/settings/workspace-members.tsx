"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  MoreVertical,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SettingsSection } from "../ui/settings/section";

type Member = {
  id: string;
  email: string;
  avatar: string;
  date: string;
  accessLevel: "Admin" | "Guest";
  status: "Success" | "Invite Pending";
};

export default function MembersSettings() {
  const [members, setMembers] = useState<Member[]>([
    {
      id: "1",
      email: "nevaeh.simmons@example.com",
      avatar: "/placeholder.png?height=32&width=32",
      date: "28 May, 2020",
      accessLevel: "Admin",
      status: "Success",
    },
    {
      id: "2",
      email: "tim.jennings@example.com",
      avatar: "/placeholder.png?height=32&width=32",
      date: "24 May, 2020",
      accessLevel: "Guest",
      status: "Invite Pending",
    },
    {
      id: "3",
      email: "kenzi.lawson@example.com",
      avatar: "/placeholder.png?height=32&width=32",
      date: "24 May, 2020",
      accessLevel: "Guest",
      status: "Invite Pending",
    },
    {
      id: "4",
      email: "dolores.chambers@example.com",
      avatar: "/placeholder.png?height=32&width=32",
      date: "24 May, 2020",
      accessLevel: "Guest",
      status: "Invite Pending",
    },
  ]);

  return (
    <>
      <SettingsSection title="Manage Members">
        <div className="flex justify-between mb-4">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 pr-10 py-2 border rounded-md w-full"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-muted-foreground">F</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button
              variant="default"
              className="bg-black text-white hover:bg-black/90"
            >
              Invite Member
            </Button>
          </div>
        </div>

        <div className="border rounded-md overflow-hidden">
          <div className="grid grid-cols-12 bg-muted/50 text-sm font-medium border-b">
            <div className="col-span-4 p-3 flex items-center">
              USER <ChevronDown className="h-3 w-3 ml-1" />
            </div>
            <div className="col-span-2 p-3 flex items-center">
              DATE <ChevronDown className="h-3 w-3 ml-1" />
            </div>
            <div className="col-span-3 p-3 flex items-center">
              ACCESS LEVEL <ChevronDown className="h-3 w-3 ml-1" />
            </div>
            <div className="col-span-2 p-3 flex items-center">
              STATUS <ChevronDown className="h-3 w-3 ml-1" />
            </div>
            <div className="col-span-1 p-3"></div>
          </div>

          {members.map((member) => (
            <div
              key={member.id}
              className="grid grid-cols-12 border-b last:border-b-0 text-sm"
            >
              <div className="col-span-4 p-3 flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 mr-3">
                  <img
                    src={member.avatar || "/placeholder.png"}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>{member.email}</span>
              </div>
              <div className="col-span-2 p-3 flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {member.date}
              </div>
              <div className="col-span-3 p-3 flex items-center">
                <span
                  className={
                    member.accessLevel === "Admin" ? "text-blue-600" : ""
                  }
                >
                  {member.accessLevel}
                </span>
              </div>
              <div className="col-span-2 p-3 flex items-center">
                <div className="flex items-center">
                  <div
                    className={`w-2 h-2 rounded-full mr-2 ${
                      member.status === "Success"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      member.status === "Success"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {member.status}
                  </span>
                </div>
              </div>
              <div className="col-span-1 p-3 flex justify-end">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SettingsSection>
    </>
  );
}
