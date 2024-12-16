import Image from "next/image";
import React from "react";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";
import { MailIcon, MapPinIcon, PhoneIcon, SortAscIcon } from "lucide-react";
import { peopleData as data } from "@/lib/data";
import { TagLabel } from "./TagLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faF,
  faGenderless,
  faMars,
  faVenus,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import ButtonWithIcon from "./ButtonWithIcon";

type Person = {
  photo: string;
  id: number;
  teacherId: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  gender: string;
  category: string;
  subjects?: string[];
  classes?: string[];
};

// const data = [
//   {
//     photo: "",
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "123-456-7890",
//     location: "New York, NY",
//     gender: "Male",
//     company: "Acme Inc.",
//     category: "Software Engineer"
//   },

//   {
//     photo: "",
//     id: 2,
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//     phone: "098-765-4321",
//     company: "Acme Inc.",
//     category: "Product Manager",
//     gender: "Female",
//     location: "Sharakpur"
//   },
//   {
//     photo: "",
//     id: 3,
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     phone: "555-123-4567",
//     company: "Bob's Consulting",
//     category: "Owner",
//     gender: "Male",
//     location: "India"
//   },
//   {
//     photo: "",
//     id: 4,
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     phone: "555-555-5555",
//     company: "Acme Inc.",
//     category: "Sales Representative",
//     gender: "Female",
//     location: "Pakistan"
//   },
//   {
//     photo: "",
//     id: 5,
//     name: "David Williams",
//     email: "david.williams@example.com",
//     phone: "555-555-5556",
//     company: "Acme Inc.",
//     category: "Accountant",
//     gender: "Male",
//     location: "Dubai"
//   }
// ];

const PeopleList = () => {
  const renderRow = (item: Person) => {
    return (
      <tr
        className="mb-2 gap-16 p-2 flex items-center text-left justify-left border-2 rounded-md text-sm text-gray-600"
        key={item.id}
      >
        <td className="w-32 flex gap-2 items-center text-black ">
          <Image
            src={item.photo}
            alt=""
            width={20}
            height={20}
            className="md:hidden xl:block w-8 h-8 rounded-full object-cover "
          ></Image>
          <div>{item.name}</div>
        </td>
        <td className="w-40 flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-300 p-1">
            <MailIcon className="h-4 w-4 text-gray-600" />
          </div>
          <u className="underline-offset-4 decoration-1 text-black font-medium">
            {item.email}
          </u>
        </td>
        <td className="w-28 flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-300 p-1">
            <PhoneIcon className="h-4 w-4 text-gray-600" />
          </div>
          {item.phone}
        </td>
        <td className="w-32">
          <TagLabel
            text={item.category}
            className="text-blue-600 bg-[#EDF2FE]"
          />
        </td>
        <td className="w-48 flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-300 p-1">
            <MapPinIcon className="h-4 w-4 text-gray-600" />
          </div>
          {item.location}
        </td>
        <td className="w-20 flex items-center">
          {item.gender === "Male" ? (
            <FontAwesomeIcon icon={faMars} className="h-4 w-4 text-blue-600" />
          ) : (
            <FontAwesomeIcon icon={faVenus} className="h-4 w-4 text-pink-600" />
          )}
          {item.gender}
        </td>
        <td className="flex gap-2 text-black">
          <ButtonWithIcon buttonText="Call" />
          <ButtonWithIcon buttonText="Mail" />
        </td>
      </tr>
    );
  };

  return (
    <div className="w-full overflow-auto flex flex-col border-[1px] rounded-md m-2 p-4 ">
      <div className="m-2 items-center flex justify-between">
        <h3 className="text-xl font-semibold">People</h3>
        <div className="flex justify-end gap-2">
          <SearchBox />
          <Dropdown buttonText="Sort By"></Dropdown>
          <Dropdown buttonText="Filter"></Dropdown>
        </div>
      </div>
      <table className="">
        <thead>
          <tr className="flex gap-16 p-2 justify-left border-2 rounded-sm mb-2 text-sm text-gray-600">
            <th className="flex text-small font-semibold gap-2 items-center w-32">
              <span>Name</span>
              <FontAwesomeIcon icon={faSort} width={15} height={15} />
            </th>
            <th className="flex text-small font-semibold gap-2 items-center w-40">
              <span>Email</span>
              <FontAwesomeIcon icon={faSort} width={15} height={15} />
            </th>
            <th className="flex text-small font-semibold gap-2 items-center w-28">
              <span>Phone</span>
              <FontAwesomeIcon icon={faSort} width={15} height={15} />
            </th>
            <th className="flex text-small font-semibold gap-2 items-center w-32">
              <span>Category</span>
              <FontAwesomeIcon icon={faSort} width={15} height={15} />
            </th>
            <th className="flex text-small font-semibold gap-2 items-center w-48">
              <span>Location</span>
              <FontAwesomeIcon icon={faSort} width={15} height={15} />
            </th>
            <th className="flex text-small font-semibold gap-2 items-center w-20">
              <span>Gender</span>
              <FontAwesomeIcon icon={faSort} width={15} height={15} />
            </th>
            <th className="flex text-small font-semibold gap-2 items-center">
              <span>Action</span>
              <FontAwesomeIcon icon={faSort} width={15} height={15} />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.splice(0, 4).map((item: Person) => renderRow(item))}
        </tbody>
      </table>
    </div>
  );
};

export default PeopleList;
