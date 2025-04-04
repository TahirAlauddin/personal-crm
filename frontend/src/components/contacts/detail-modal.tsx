"use client"

import { X, Phone, Mail, MessageSquare, MoreHorizontal, Calendar, User, Flag, MapPin, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Contact } from "@/lib/data/contacts"

interface ContactDetailsModalProps {
  contact: Contact | null
  isOpen: boolean
  onClose: () => void
}

export default function ContactDetailsModal({ contact, isOpen, onClose }: ContactDetailsModalProps) {
  if (!contact) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>Contact Details</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center mt-2">
          <Avatar className="h-24 w-24 mb-2">
            <AvatarImage src={contact.avatar} alt={contact.name} />
            <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-medium">{contact.name}</h2>
          <div className="flex items-center gap-1 text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full mt-1">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>Last Activity: 2 days ago</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 my-4">
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
            <Phone className="h-5 w-5" />
            <span className="sr-only">Call</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Mail</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Message</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
            <MoreHorizontal className="h-5 w-5" />
            <span className="sr-only">More</span>
          </Button>
        </div>

        <div className="text-center text-xs text-gray-500 mb-4">
          <span>Call</span>
          <span className="mx-8">Mail</span>
          <span className="mr-6">Message</span>
          <span>More</span>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Account Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-gray-500 w-5">
                  <Building className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">US219410</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-gray-500 w-5">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-blue-600">{contact.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-gray-500 w-5">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm">{contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-gray-500 w-5">
                  <Building className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm">Marketing</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Personal Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-gray-500 w-5">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm">14/07/1988</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-gray-500 w-5">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm">{contact.gender}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-gray-500 w-5">
                  <Flag className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm">United States</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-gray-500 w-5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm">{contact.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-gray-500 w-5">
                  <Building className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm">Majestic Ave, 21 Tree St.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

