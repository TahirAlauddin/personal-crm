import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faF } from "@fortawesome/free-solid-svg-icons";
import { Search, CommandIcon } from "lucide-react";
import React from "react";

const SearchBox = () => {
  return (
    <div className="relative border-[#AFAFAF] border-2 rounded-md pl-12 px-2 py-1 w-1/3 ">
      <Search color="#AFAFAF" className="absolute w-[20px] h-[20px]  top-[6px] left-0 z-10 ml-4" />
      <input
        className="focus:outline-none w-full pr-[80px] text-black "
        placeholder="Search"
      />
      <CommandIcon
        color="#727272"
        className="absolute top-1 right-8 mr-1 p-1 z-10 bg-[#F2F2F2]"
      />
      <FontAwesomeIcon
        color="#727272"
        icon={faF}
        className="absolute top-1 right-1 z-10 p-1 w-[24px] h-[24px] bg-[#F2F2F2]"
      />
    </div>
  );
};

export default SearchBox;
