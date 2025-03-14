import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faF } from "@fortawesome/free-solid-svg-icons";
import { Search, CommandIcon } from "lucide-react";
import React from "react";

const SearchBox = () => {
  return (
    <div className="relative max-w-md mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-16 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-400">
        <span className="border rounded px-1 mr-1">⌘</span>
        <span className="border rounded px-1">F</span>
      </div>
    </div>
  );
};

export default SearchBox;
