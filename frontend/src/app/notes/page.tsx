"use client";
import { NoteCard } from "@/components/ui/notecard";
import * as React from "react";
import {
  Filter,
  Plus,
  Search,
  MoreVertical,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TagBadge } from "@/components/Tagbadge";
import { notes_list, Note } from "./data";
import { cn } from "@/lib/utils";

export default function NotesPage() {
  const [selectedNote, setSelectedNote] = React.useState<number | null>(null);

  return (
    <div className="flex h-full w-full">
      {/* Main Content Area */}
      <div className="flex flex-col">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold pl-4">Notes</h1>

            <div className="flex items-center gap-2">
              <Button variant="outline" className="h-9">
                <Search className="h-4 w-4 mr-2" />
                Sort By
              </Button>

              <Button variant="outline" className="h-9">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>

              <Button className="h-9 bg-black text-white hover:bg-gray-800">
                <Plus className="h-4 w-4 mr-2" />
                Add Notes
              </Button>
            </div>
          </div>
        <div className="flex container p-6">
          {/* Notes List */}
          <div
            className={cn(
              "grid gap-4",
              "flex-1 transition-all duration-200",
              selectedNote ? "" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            //   selectedNote ? "mr-[60%]" : ""
            )}
          >
            {selectedNote ? (
              // Compact List View
              <div className="flex-1">
                <div className="flex gap-2 mb-2">
                  <TagBadge label="Weekly" color="yellow" />
                  <TagBadge label="Product" color="blue" />
                </div>
                <h3 className="font-medium">Product Team Meeting</h3>
                <p className="text-sm text-gray-500 line-clamp-1">
                  This monthly progress agenda is following this items...
                </p>
              </div>
            ) : (
              // Grid View
              <>
                {notes_list.map((note: Note, index: number) => (
                  <NoteCard
                    key={index}
                    {...note}
                    className={`cursor-pointer transition-all ${
                      selectedNote
                        ? "flex items-center p-4 hover:bg-gray-50"
                        : "overflow-hidden relative flex flex-col h-[350px]"
                    }`}
                    onClick={() => setSelectedNote(index)}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Note Preview/Editor Panel */}
      {selectedNote !== null && (
        <div className="static top-20 right-0 w-[60%] h-screen bg-white border-l overflow-y-auto">
          <div className="sticky top-0 bg-white border-b z-10">
            <div className="flex items-center justify-between p-6">
              <div>
                <div className="flex gap-2 mb-2">
                  <TagBadge label="Weekly" color="yellow" />
                  <TagBadge label="Product" color="blue" />
                </div>
                <h2 className="text-2xl font-bold">Product Team Meeting</h2>
                <p className="text-sm text-gray-500">Dec 4, 2019 21:42</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedNote(null)}
              >
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            {/* Editor Toolbar */}
            <div className="px-6 pb-4 flex items-center gap-4">
              <Select defaultValue="inter">
                <SelectTrigger className="w-[120px] h-9">
                  <SelectValue placeholder="Font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inter">Inter</SelectItem>
                  <SelectItem value="arial">Arial</SelectItem>
                  <SelectItem value="helvetica">Helvetica</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="24">
                <SelectTrigger className="w-[80px] h-9">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="14">14</SelectItem>
                  <SelectItem value="24">24</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-1 border-l border-r px-4">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Bold className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Italic className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Underline className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <AlignLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <AlignCenter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <AlignRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Note Content */}
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Checkbox id="introduction" />
                <label htmlFor="introduction" className="text-lg">
                  Introduction
                </label>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="weekly-updates" />
                <label htmlFor="weekly-updates" className="text-lg">
                  Weekly Updates
                </label>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="discussion" />
                <label htmlFor="discussion" className="text-lg">
                  Discussion
                </label>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="summary" />
                <label htmlFor="summary" className="text-lg">
                  Summary and Weekly Goals
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
