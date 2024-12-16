"use client";
import React from "react";
import { TagLabel } from "./TagLabel";
import { TagLabelProps } from "./types";

const MeetingWithClient = ({ text, className }: TagLabelProps) => {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <TagLabel text={text} className={className}></TagLabel>

      <h3 className="text-sm font-medium">Meeting with Client</h3>
      <p className="text-xs text-secondaryGray">This monthly progress agenda</p>
    </div>
  );
};

const UpcomingAgenda = () => {
  return (
    <div className="border-[1px] rounded-sm m-3 p-2 w-1/4 max-lg:w-max gap-2 ">
      <h2 className="font-semibold mb-2">Upcoming Agenda</h2>
      <div className="flex flex-col max-lg:flex-row">
        {/* yellowish */}
        <MeetingWithClient
          text="11:00 - 12:00 Feb 2, 2024"
          className="bg-[#FBF4EC] text-[#D28E3D] w-1/4"
        />
        {/* bluish color */}
        <MeetingWithClient
          text="11:00 - 12:00 Feb 2, 2024"
          className="bg-[#EDF2FE] text-[#4976F4] w-1/4"
        />
        {/* purplish color */}
        <MeetingWithClient
          text="11:00 - 12:00 Feb 2, 2024"
          className="bg-[#F4EDF7] text-[#954BAF] w-1/4"
        />
      </div>
    </div>
  );
};

export default UpcomingAgenda;
