import { Phone, Mail, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Contact } from "@/lib/data/contacts"

interface GridViewProps {
  contacts: Contact[]
}

export default function GridView({ contacts }: GridViewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {contacts.map((contact) => (
        <div key={contact.id} className="border rounded-lg p-4 bg-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={contact.avatar} alt={contact.name} />
                <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{contact.name}</h3>
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <span>📍</span> {contact.location}
                </div>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Badge
            variant="outline"
            className={`
              mb-3
              ${contact.category === "Employee" ? "bg-purple-50 text-purple-600" : ""}
              ${contact.category === "Customers" ? "bg-blue-50 text-blue-600" : ""}
              ${contact.category === "Partners" ? "bg-orange-50 text-orange-600" : ""}
            `}
          >
            {contact.category}
          </Badge>

          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-gray-500" />
              <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline truncate">
                {contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-gray-500" />
              <span>{contact.phone}</span>
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <Button variant="outline" size="sm" className="flex-1">
              <Phone className="h-3 w-3 mr-1" />
              Call
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Mail className="h-3 w-3 mr-1" />
              Mail
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

