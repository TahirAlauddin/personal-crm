import Image from "next/image";
import React from "react";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";
import { SortAscIcon } from "lucide-react";
import { companiesData as data } from "@/lib/data";

type Company = {
  id: number
  name: string
  photo : string
  location: string
  industry: string
  status: string
};


const CompanyList = () => {
  const renderRow = (item: Company) => {
    return (
      <tr className="flex items-center gap-4 p-2 justify-evenly border-2 rounded-md" key={item.id}>
        <td className="flex gap-2">
          <Image
            src={item.photo}
            alt=""
            width={40}
            height={40}
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          ></Image>
          <div>{item.name}</div>
        </td>
        <td>{item.industry}</td>
        <td>{item.location}</td>
        <td>{item.status}</td>
        <td>Button</td>
      </tr>
    );
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h3>People</h3>
        <div className="flex justify-end">
          <SearchBox />
          <Dropdown></Dropdown>
          <Dropdown></Dropdown>
        </div>
      </div>
      <div>
        <table className="w-full rounded-md">
          <thead>
            <tr className="flex gap-4 p-2 justify-evenly border-2 rounded-sm mb-2 text-secondaryGray">
              <th className="flex text-small font-light">
                <span>Name</span>
                <SortAscIcon color="#727272" />
              </th>
              <th className="flex text-small font-light">
                <span>Industry</span>
                <SortAscIcon color="#727272" />
              </th>
              <th className="flex text-small font-light">
                <span>Location</span>
                <SortAscIcon color="#727272" />
              </th>
              <th className="flex text-small font-light">
                <span>Status</span>
                <SortAscIcon color="#727272" />
              </th>
              <th className="flex text-small font-light">
                <span>Action</span>
                <SortAscIcon color="#727272" />
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-2">
            {data.map((item: Company) => (
              renderRow(item)
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyList;
