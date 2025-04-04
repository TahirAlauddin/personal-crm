"use client"

import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Contact } from "@/lib/data/contacts"

interface TableViewProps {
  contacts: Contact[]
  onContactClick: (contact: Contact) => void
}

export default function TableView({ contacts, onContactClick }: TableViewProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="p-3 w-10">
              <Checkbox />
            </th>
            <th className="p-3 text-sm font-medium text-gray-500">
              Name <span className="ml-1">↓</span>
            </th>
            <th className="p-3 text-sm font-medium text-gray-500">
              Email <span className="ml-1">↓</span>
            </th>
            <th className="p-3 text-sm font-medium text-gray-500">
              Phone <span className="ml-1">↓</span>
            </th>
            <th className="p-3 text-sm font-medium text-gray-500">
              Category <span className="ml-1">↓</span>
            </th>
            <th className="p-3 text-sm font-medium text-gray-500">
              Location <span className="ml-1">↓</span>
            </th>
            <th className="p-3 text-sm font-medium text-gray-500">
              Gender <span className="ml-1">↓</span>
            </th>
            <th className="p-3 text-sm font-medium text-gray-500">
              Action <span className="ml-1">↓</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr
              key={contact.id}
              className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} cursor-pointer hover:bg-gray-100`}
              onClick={() => onContactClick(contact)}
            >
              <td className="p-3" onClick={(e) => e.stopPropagation()}>
                <Checkbox />
              </td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>{contact.name}</span>
                </div>
              </td>
              <td className="p-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {contact.email}
                </a>
              </td>
              <td className="p-3">{contact.phone}</td>
              <td className="p-3">
                <Badge
                  variant="outline"
                  className={`
                    ${contact.category === "Employee" ? "bg-purple-50 text-purple-600" : ""}
                    ${contact.category === "Customers" ? "bg-blue-50 text-blue-600" : ""}
                    ${contact.category === "Partners" ? "bg-orange-50 text-orange-600" : ""}
                  `}
                >
                  {contact.category}
                </Badge>
              </td>
              <td className="p-3">{contact.location}</td>
              <td className="p-3">{contact.gender}</td>
              <td className="p-3" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="sm" className="h-8">
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    <Mail className="h-3 w-3 mr-1" />
                    Mail
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

