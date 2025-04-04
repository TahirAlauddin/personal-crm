"use client";

import Image from "next/image";
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { TagLabel } from "./TagLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus, faSort } from "@fortawesome/free-solid-svg-icons";
import ButtonWithIcon from "./ButtonWithIcon";

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  category: string;
  location: string;
  gender: string;
  photo?: string;
};

// Sample data based on the image
const contactsData: Contact[] = [
  {
    id: 1,
    name: "Robert Fox",
    email: "robertfox@example.com",
    phone: "(671) 555-0110",
    category: "Employee",
    location: "Austin",
    gender: "Male",
    photo: "/avatars/avatar-1.jpg"
  },
  {
    id: 2,
    name: "Cody Fisher",
    email: "codyfisher@example.com",
    phone: "(505) 555-0125",
    category: "Customers",
    location: "Orange",
    gender: "Male",
    photo: "/avatars/avatar-2.jpg"
  },
  {
    id: 3,
    name: "Albert Flores",
    email: "albertflores@example.com",
    phone: "(704) 555-0127",
    category: "Customers",
    location: "Pembroke...",
    gender: "Female",
    photo: "/avatars/avatar-3.jpg"
  },
  {
    id: 4,
    name: "Floyd Miles",
    email: "floydmiles@example.com",
    phone: "(405) 555-0128",
    category: "Employee",
    location: "Fairfield",
    gender: "Male",
    photo: "/avatars/avatar-4.jpg"
  },
  {
    id: 5,
    name: "Arlene McCoy",
    email: "arlenemcoy@example.com",
    phone: "(219) 555-0114",
    category: "Partners",
    location: "Toledo",
    gender: "Female",
    photo: "/avatars/avatar-5.jpg"
  },
  {
    id: 6,
    name: "Jenny Wilson",
    email: "jennywilson@example.com",
    phone: "(201) 555-0124",
    category: "Customers",
    location: "Orange",
    gender: "Female",
    photo: "/avatars/avatar-6.jpg"
  },
  {
    id: 7,
    name: "Jacob Jones",
    email: "jacobjones@example.com",
    phone: "(684) 555-0102",
    category: "Partners",
    location: "Fairfield",
    gender: "Male",
    photo: "/avatars/avatar-7.jpg"
  },
  {
    id: 8,
    name: "Wade Warren",
    email: "wadewarren@example.com",
    phone: "(907) 555-0101",
    category: "Partners",
    location: "Pembroke...",
    gender: "Male",
    photo: "/avatars/avatar-8.jpg"
  },
  {
    id: 9,
    name: "Devon Lane",
    email: "devonlane@example.com",
    phone: "(270) 555-0117",
    category: "Customers",
    location: "Toledo",
    gender: "Female",
    photo: "/avatars/avatar-9.jpg"
  },
  {
    id: 10,
    name: "Kristin Watson",
    email: "kristinwatson@example.com",
    phone: "(302) 555-0107",
    category: "Employee",
    location: "Naperville",
    gender: "Female",
    photo: "/avatars/avatar-10.jpg"
  },
  {
    id: 11,
    name: "Kathryn Murphy",
    email: "kathrynmurphy@example.com",
    phone: "(252) 555-0126",
    category: "Customers",
    location: "Austin",
    gender: "Female",
    photo: "/avatars/avatar-11.jpg"
  }
];

const ContactsList = () => {
  const [activeTab, setActiveTab] = useState<string>("All Contacts");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  // Filter contacts based on active tab
  const getFilteredContacts = () => {
    if (activeTab === "All Contacts") return contactsData;
    return contactsData.filter(contact => contact.category === activeTab);
  };

  const renderContact = (contact: Contact) => {
    return (
      <tr key={contact.id} className="hover:bg-gray-50">
        <td className="py-2 px-3">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
        </td>
        <td className="py-2 px-3 flex items-center gap-2">
          <Image
            src={contact.photo || "/avatar-placeholder.png"}
            alt={contact.name}
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="font-medium">{contact.name}</span>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center gap-2">
            <MailIcon className="h-4 w-4 text-gray-500" />
            <span className="text-blue-700 underline">{contact.email}</span>
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-4 w-4 text-gray-500" />
            <span>{contact.phone}</span>
          </div>
        </td>
        <td className="py-2 px-3">
          <CategoryBadge category={contact.category} />
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4 text-gray-500" />
            <span>{contact.location}</span>
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex items-center gap-1">
            {contact.gender === "Male" ? (
              <FontAwesomeIcon icon={faMars} className="h-4 w-4 text-blue-600" />
            ) : (
              <FontAwesomeIcon icon={faVenus} className="h-4 w-4 text-pink-600" />
            )}
            <span>{contact.gender}</span>
          </div>
        </td>
        <td className="py-2 px-3">
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
              Call
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
              Mail
            </button>
          </div>
        </td>
      </tr>
    );
  };

  // Component for category badges
  const CategoryBadge = ({ category }: { category: string }) => {
    const getColorClass = () => {
      switch (category) {
        case "Employee":
          return "bg-purple-100 text-purple-800";
        case "Partners":
          return "bg-orange-100 text-orange-800";
        case "Customers":
          return "bg-blue-100 text-blue-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };

    return (
      <span className={`px-2 py-1 rounded-md text-xs font-medium ${getColorClass()}`}>
        {category}
      </span>
    );
  };

  const tabs = ["All Contacts", "Employee", "Partners", "Customers"];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Contacts</h1>
        <div className="flex space-x-2">
          <div className="flex border rounded-md overflow-hidden">
            <button className="px-3 py-1 bg-gray-100 text-gray-700 border-r">List</button>
            <button className="px-3 py-1 bg-white text-gray-700 border-r">Kanban</button>
            <button className="px-3 py-1 bg-white text-gray-700 border-r">Table</button>
            <button className="px-3 py-1 bg-white text-gray-700">Grid</button>
          </div>
          
          <Dropdown buttonText="Sort By" />
          <Dropdown buttonText="Filter" />
          
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md flex items-center gap-1">
            <span>+</span>
            <span>Add Contact</span>
          </button>
        </div>
      </div>

      <div className="flex border-b mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 ${activeTab === tab ? 'border-b-2 border-blue-600 font-medium' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <button className="ml-auto px-4 py-2 text-blue-600">
          + Add Categories
        </button>
      </div>

      <div className="overflow-x-auto border rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-3 text-left">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
              </th>
              <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1">
                <span>Name</span>
                <FontAwesomeIcon icon={faSort} className="h-3 w-3" />
              </th>
              <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1">
                <span>Email</span>
                <FontAwesomeIcon icon={faSort} className="h-3 w-3" />
              </th>
              <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1">
                <span>Phone</span>
                <FontAwesomeIcon icon={faSort} className="h-3 w-3" />
              </th>
              <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1">
                <span>Category</span>
                <FontAwesomeIcon icon={faSort} className="h-3 w-3" />
              </th>
              <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1">
                <span>Location</span>
                <FontAwesomeIcon icon={faSort} className="h-3 w-3" />
              </th>
              <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1">
                <span>Gender</span>
                <FontAwesomeIcon icon={faSort} className="h-3 w-3" />
              </th>
              <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {getFilteredContacts().map(contact => renderContact(contact))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Show</span>
          <select 
            className="border rounded px-2 py-1 text-sm" 
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span className="text-sm text-gray-700">Row</span>
        </div>

        <div className="flex">
          <button className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-800 text-white">1</button>
          <button className="px-3 py-1 border-t border-b border-r border-gray-300">2</button>
          <button className="px-3 py-1 border-t border-b border-r border-gray-300">3</button>
          <button className="px-3 py-1 border-t border-b border-r border-gray-300">4</button>
          <button className="px-3 py-1 border-t border-b border-r border-gray-300">5</button>
          <button className="px-3 py-1 border-t border-b border-r border-gray-300">...</button>
          <button className="px-3 py-1 border-t border-b border-r border-gray-300">10</button>
          <button className="px-3 py-1 border-t border-b border-r border-gray-300 rounded-r-md">→</button>
        </div>
      </div>
    </div>
  );
};

export default ContactsList; 