"use client";

import Image from "next/image"
import {
  Inbox,
  Star,
  Send,
  Archive,
  AlertCircle,
  Trash2,
  Plus,
  ChevronDown,
  Filter,
  MoreHorizontal,
  RefreshCw,
  ThumbsUp,
  MessageSquare,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { emailData, favoritesEmailData } from "./data";

export default function EmailPage() {
  const [activeTab, setActiveTab] = useState("all");

  const [emailDataToShow, setEmailDataToShow] = useState(emailData);
  if (activeTab === "favourites") {
    setEmailDataToShow(favoritesEmailData);
  }

  function setActiveTabCustom(tab: string) {
    console.log(tab);
    setActiveTab(tab);
    if (tab === "favourites") {
      setEmailDataToShow(favoritesEmailData);
    } else {
      setEmailDataToShow(emailData);
    }
  }
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r flex flex-col">
        <div className="p-4 text-xl font-bold">Emails</div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1 p-2">
              {/* all mails tab button */}
              
            <li className="flex items-center justify-between px-3 py-2 rounded-md bg-gray-100">
              <div onClick={() => setActiveTabCustom("all")} className="flex items-center">
                <Inbox className="h-5 w-5 mr-3 text-gray-600" />
                <span>All Mails</span>
              </div>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">12</span>
            </li>
            {/* favourites tab button */}
            <li className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100">
              <div onClick={() => setActiveTabCustom("favourites")} className="flex items-center">
                <Star className="h-5 w-5 mr-3 text-gray-600" />
                <span>Favourites</span>
              </div>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">2</span>
            </li>
            {/* sent tab button */}
            <li className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100">
              <div onClick={() => setActiveTabCustom("sent")} className="flex items-center">
                <Send className="h-5 w-5 mr-3 text-gray-600" />
                <span>Sent</span>
              </div>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">8</span>
            </li>
            <li className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100">
              <div onClick={() => setActiveTabCustom("archived")} className="flex items-center">
                <Archive className="h-5 w-5 mr-3 text-gray-600" />
                <span>Archived</span>
              </div>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">24</span>
            </li>
            {/* spam tab button */}
            <li className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100">
              <div onClick={() => setActiveTabCustom("spam")} className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-3 text-gray-600" />
                <span>Spam</span>
              </div>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">15</span>
            </li>
            {/* trash tab button */}
            <li className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100">
              <div onClick={() => setActiveTabCustom("trash")} className="flex items-center">
                <Trash2 className="h-5 w-5 mr-3 text-gray-600" />
                <span>Trash</span>
              </div>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">28</span>
            </li>
          </ul>

          <div className="px-4 py-2 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Label</span>
            <Button variant="ghost" size="icon" className="h-5 w-5">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <ul className="space-y-1 p-2">
            <li className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
              <span>Projects</span>
            </li>
            <li className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
              <span>Customers</span>
            </li>
            <li className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100">
              <div className="w-3 h-3 rounded-full bg-amber-500 mr-3"></div>
              <span>Companies</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex space-x-2">
            <Button variant="outline" className="flex items-center">
              <span>Sort By</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800">
            <Plus className="mr-2 h-4 w-4" />
            Add Mail
          </Button>
        </div>

        {/* Email List Header */}
        <div className="flex items-center px-4 py-2 border-b">
          <input type="checkbox" className="mr-2" />
          <RefreshCw className="h-4 w-4 mx-2 text-gray-500" />
          <MoreHorizontal className="h-4 w-4 mx-2 text-gray-500" />
          <div className="ml-4 font-medium">Inbox Messages</div>
          <div className="ml-2 text-sm text-gray-500">12 messages</div>
        </div>

        {/* Email List */}
        <div className="flex-1 overflow-y-auto">
          {emailData.map((email, index) => (
            <EmailItem
              key={index}
              avatar={email.avatar}
              name={email.name}
              subject={email.subject}
              preview={email.preview}   
              date={email.date}
              likes={email.likes}
              comments={email.comments}
              hasLabel={email.hasLabel}
              labelColor={email.labelColor}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="border-t p-4 flex justify-center">
          <div className="flex items-center space-x-1">
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-md">
              <ChevronRight className="h-4 w-4 rotate-180" />
            </Button>
            <Button variant="default" size="icon" className="w-8 h-8 rounded-md bg-black text-white">
              1
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-md">
              2
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-md">
              3
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-md">
              4
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-md">
              5
            </Button>
            <span className="mx-1">...</span>
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-md">
              10
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-md">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface EmailItemProps {
  avatar: string;
  name: string;
  subject: string;
  preview: string;
  date: string;
  likes: number;
  comments: number;
  hasLabel?: boolean;
  labelColor?: string;
}

function EmailItem({ avatar, name, subject, preview, date, likes, comments, hasLabel = false, labelColor = "" }: EmailItemProps) {
  return (
    <div className="border-b hover:bg-gray-50">
      <div className="flex items-start p-4">
        <input type="checkbox" className="mt-1 mr-3" />

        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4">
          <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center">
                <span className="font-medium">{name}</span>
                {hasLabel && (
                  <div className={`ml-2 w-2 h-2 rounded-full ${labelColor === "blue" ? "bg-blue-500" : ""}`}></div>
                )}
              </div>
              <div className="font-medium">{subject}</div>
              <div className="text-gray-600 text-sm truncate">{preview}</div>
            </div>
            <div className="text-sm text-gray-500 whitespace-nowrap ml-4">{date}</div>
          </div>

          <div className="flex items-center mt-2">
            <Button variant="ghost" size="sm" className="h-6 px-2 text-gray-500">
              <ThumbsUp className="h-3 w-3 mr-1" />
              <span className="text-xs">+{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-6 px-2 text-gray-500">
              <MessageSquare className="h-3 w-3 mr-1" />
              <span className="text-xs">{comments}</span>
            </Button>
            <div className="ml-auto flex items-center space-x-1">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Star className="h-4 w-4 text-gray-400" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreHorizontal className="h-4 w-4 text-gray-400" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

