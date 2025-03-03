"use client"
import * as React from "react"
import { ChevronDown, Filter, Plus, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { NoteCard } from "@/components/ui/notecard"

export default function NotesPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Notes</h1>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-10">
            <Search className="h-4 w-4 mr-2" />
            Sort By
          </Button>
          
          <Button variant="outline" className="h-10">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          
          <Button className="h-10 bg-black text-white hover:bg-gray-800">
            <Plus className="h-4 w-4 mr-2" />
            Add Notes
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Note Card 1 */}
        <NoteCard
          tags={[
            { label: "Weekly", color: "yellow" },
            { label: "Product", color: "blue" }
          ]}
          title="Product Team Meeting"
          content="This monthly progress agenda is following this items:"
          listItems={[
            "Introduction to Newest Product Plan",
            "Monthly Revenue updates for each"
          ]}
          author="John Doe"
          date="Mar 5 04:25"
        />
        
        {/* Note Card 2 */}
        <NoteCard
          tags={[
            { label: "Monthly", color: "green" },
            { label: "Business", color: "purple" }
          ]}
          title="Product Team Meeting"
          content="This monthly progress agenda is following this items:"
          listItems={[
            "Introduction to Newest Product Plan",
            "Monthly Revenue updates for each"
          ]}
          author="John Doe"
          date="Apr 11 18:30"
        />
        
        {/* Note Card 3 */}
        <NoteCard
          tags={[
            { label: "Personal", color: "orange" },
            { label: "Business", color: "purple" }
          ]}
          title="HR Interview"
          content="This monthly progress agenda is following this items:"
          listItems={[
            "Introduction to Newest Product Plan",
            "Monthly Revenue updates for each"
          ]}
          author="John Doe"
          date="Jun 23 14:31"
        />
        
        {/* Note Card 4 */}
        <NoteCard
          tags={[
            { label: "Monthly", color: "green" },
            { label: "Product", color: "blue" }
          ]}
          title="Monthly Team Progress"
          content="This monthly progress agenda is following this items:"
          listItems={[
            "Introduction to Newest Product Plan",
            "Monthly Revenue updates for each"
          ]}
          author="John Doe"
          date="Jan 31 09:53"
        />
        
        {/* Note Card 5 */}
        <NoteCard
          tags={[
            { label: "Monthly", color: "green" },
            { label: "Business", color: "purple" }
          ]}
          title="Product Team Meeting"
          content="Some Summaries of this weeks meeting with some conclusion we get :"
          checklistItems={[
            "Some of our product uploaded improved"
          ]}
          author="John Doe"
          date="Aug 15 10:29"
        />
        
        {/* Note Card 6 */}
        <NoteCard
          tags={[
            { label: "Personal", color: "orange" }
          ]}
          title="Document Images"
          content="Report Document of Weekly Meetings"
          image="https://images.unsplash.com/photo-1583521214690-73421a1829a9?height=130&width=450"
          author="John Doe"
          date="Dec 30 21:28"
        />
        
        {/* Note Card 7 */}
        <NoteCard
          tags={[
            { label: "Badge", color: "yellow" },
            { label: "Product", color: "blue" }
          ]}
          title="Weekly Team Progress"
          content="This weekly progress agenda is following this items:"
          listItems={[
            "Introduction to Newest Product Plan",
            "Monthly Revenue updates for each"
          ]}
          author="John Doe"
          date="Feb 4 19:08"
        />
        
        {/* Note Card 8 */}
        <NoteCard
          tags={[
            { label: "Business", color: "purple" }
          ]}
          title="Revenue Progress"
          image="https://images.unsplash.com/photo-1583521214690-73421a1829a9?height=130&width=450"
          author="John Doe"
          date="May 22 04:43"
        />
        
        {/* Note Card 9 */}
        <NoteCard
          tags={[
            { label: "Product", color: "blue" }
          ]}
          title="Monthly Products"
          content="Report Document of Weekly Meetings"
          image="https://images.unsplash.com/photo-1583521214690-73421a1829a9?height=130&width=450"
          author="John Doe"
          date="Oct 4 15:49"
        />
      </div>
    </div>
  )
}
