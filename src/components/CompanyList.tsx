import Image from "next/image";
import React from "react";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";
import { SortAscIcon } from "lucide-react";
import { companiesData as data } from "@/lib/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { TagLabel } from "./TagLabel";

type Company = {
  id: number;
  name: string;
  photo: string;
  location: string;
  industry: string;
  status: string;
};

const CompanyList = () => {
  const renderRow = (item: Company) => {
    return (
      <tr
        className="flex items-center text-left gap-16 p-2 justify-left border-2 rounded-md text-sm text-gray-600"
        key={item.id}
      >
        <td className="flex w-32 gap-2 items-center text-black">
          <Image
            src={item.photo}
            alt=""
            width={20}
            height={20}
            className="md:hidden xl:block w-8 h-8 rounded-full object-cover"
          ></Image>
          <div>{item.name}</div>
        </td>
        <td className="w-20 flex items-center gap-2">{item.industry}</td>
        <td className="w-32 flex items-center gap-2">{item.location}</td>
        <td className="w-32 flex items-center gap-2">
          <TagLabel
            text={item.status}
            className="text-blue-600 bg-[#EDF2FE]"
          />
          </td>
      </tr>
    );
  };
  return (
    <div className="flex flex-col border-[1px] rounded-md m-2 p-4 w-max">
      <div className="m-2 items-center flex justify-between w-full my-4">
        <h3 className="text-xl font-semibold">Companies</h3>
        <div className="flex justify-end gap-2">
          <SearchBox />
          <Dropdown buttonText="Sort By"></Dropdown>
          <Dropdown buttonText="Filter"></Dropdown>
        </div>
      </div>
      <div className="w-min">
        <table className="rounded-md">
          <thead>
            <tr className="flex gap-16 p-2 justify-left border-2 rounded-sm mb-2 text-secondaryGray text-sm">
              <th className="flex text-small font-semibold gap-2 items-center w-32">
                <span>Name</span>
                <FontAwesomeIcon icon={faSort} width={15} height={15} />
              </th>
              <th className="flex text-small font-semibold gap-2 items-center w-20">
                <span>Industry</span>
                <FontAwesomeIcon icon={faSort} width={15} height={15} />
              </th>
              <th className="flex text-small font-semibold gap-2 items-center w-32">
                <span>Location</span>
                <FontAwesomeIcon icon={faSort} width={15} height={15} />
              </th>
              <th className="flex text-small font-semibold gap-2 items-center w-32">
                <span>Status</span>
                <FontAwesomeIcon icon={faSort} width={15} height={15} />
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-2">
            {data.map((item: Company) => renderRow(item))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyList;
