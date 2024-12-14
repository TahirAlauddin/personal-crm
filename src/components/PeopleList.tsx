import Image from "next/image";
import React from "react";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";
import { SortAscIcon } from "lucide-react";
import { peopleData as data } from "@/lib/data";
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
  subjects?: string[]
  classes?: string[]
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
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.category}</td>
        <td>{item.location}</td>
        <td>{item.gender}</td>
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
                <span>Email</span>
                <SortAscIcon color="#727272" />
              </th>
              <th className="flex text-small font-light">
                <span>Phone</span>
                <SortAscIcon color="#727272" />
              </th>
              <th className="flex text-small font-light">
                <span>Category</span>
                <SortAscIcon color="#727272" />
              </th>
              <th className="flex text-small font-light">
                <span>Location</span>
                <SortAscIcon color="#727272" />
              </th>
              <th className="flex text-small font-light">
                <span>Gender</span>
                <SortAscIcon color="#727272" />
              </th>
              <th className="flex text-small font-light">
                <span>Action</span>
                <SortAscIcon color="#727272" />
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-2">
            {data.map((item: Person) => (
              renderRow(item)
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeopleList;
