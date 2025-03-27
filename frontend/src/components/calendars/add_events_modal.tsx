"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Plus, Upload, X } from "lucide-react"

interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (eventData: any) => void
  defaultDate?: Date
}

export default function EventModal({ isOpen, onClose, onSave, defaultDate = new Date() }: EventModalProps) {
  const [title, setTitle] = useState("")
  const [color, setColor] = useState("blue")
  const [description, setDescription] = useState("")
  const [isAllDay, setIsAllDay] = useState(false)
  const [notifyMe, setNotifyMe] = useState(true)
  const [notifyTime, setNotifyTime] = useState("30")
  const [notifyUnit, setNotifyUnit] = useState("Minutes")

  const handleSave = () => {
    const eventData = {
      title,
      color,
      description,
      isAllDay,
      notifyMe,
      notifyTime,
      notifyUnit,
      // Add other fields as needed
    }
    onSave(eventData)
    onClose()
  }

  const colorOptions = [
    { name: "Blue", value: "blue", class: "bg-blue-500" },
    { name: "Red", value: "red", class: "bg-red-500" },
    { name: "Green", value: "green", class: "bg-green-500" },
    { name: "Yellow", value: "yellow", class: "bg-yellow-500" },
    { name: "Purple", value: "purple", class: "bg-purple-500" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Create New Event</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Title */}
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <div className="flex gap-2">
              <Input
                id="title"
                placeholder="Enter event name here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1"
              />
              <div className="relative">
                <Select value={color} onValueChange={setColor}>
                  <SelectTrigger className="w-16">
                    <SelectValue>
                      <div
                        className={`w-5 h-5 rounded-full ${colorOptions.find((c) => c.value === color)?.class}`}
                      ></div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {colorOptions.map((color) => (
                      <SelectItem key={color.value} value={color.value}>
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full ${color.class}`}></div>
                          <span>{color.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Select Time */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Time</label>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <Select>
                  <SelectTrigger className="pl-8">
                    <Calendar className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                    <SelectValue placeholder="Select Event Day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                    <SelectItem value="custom">Custom Date</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Select>
                    <SelectTrigger className="pl-8">
                      <Clock className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                      <SelectValue placeholder="Start" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <SelectItem key={i} value={`${i}:00`}>{`${i}:00`}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <span className="text-sm text-muted-foreground">to</span>
                <div className="relative flex-1">
                  <Select>
                    <SelectTrigger className="pl-8">
                      <Clock className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                      <SelectValue placeholder="End" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <SelectItem key={i} value={`${i}:00`}>{`${i}:00`}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-1">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="all-day"
                  checked={isAllDay}
                  onCheckedChange={(checked) => setIsAllDay(checked as boolean)}
                />
                <label
                  htmlFor="all-day"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  All Day
                </label>
              </div>

              <div className="relative">
                <Select>
                  <SelectTrigger className="h-8 text-sm">
                    <SelectValue placeholder="Repeat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Guest */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Guest</label>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Notify Events */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Notify Events</label>
            <div className="flex items-center gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="notify-me"
                  checked={notifyMe}
                  onCheckedChange={(checked) => setNotifyMe(checked as boolean)}
                />
                <label
                  htmlFor="notify-me"
                  className="text-sm text-nowrap leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Notify Me
                </label>
              </div>

              <Input
                type="number"
                value={notifyTime}
                onChange={(e) => setNotifyTime(e.target.value)}
                className="w-16 h-8"
                min="1"
              />

              <Select value={notifyUnit} onValueChange={setNotifyUnit}>
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="Minutes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Minutes">Minutes</SelectItem>
                  <SelectItem value="Hours">Hours</SelectItem>
                  <SelectItem value="Days">Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Cities */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Cities</label>
            <div className="relative">
              <Select>
                <SelectTrigger className="pl-8">
                  <MapPin className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                  <SelectValue placeholder="Select Cities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="london">London</SelectItem>
                  <SelectItem value="tokyo">Tokyo</SelectItem>
                  <SelectItem value="paris">Paris</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              placeholder="Enter your description here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[80px]"
            />
            <div className="text-xs text-right text-muted-foreground">{description.length}/50</div>
          </div>

          {/* Attachment */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Attachment</label>
            <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center">
              <Upload className="h-6 w-6 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Drag files here or Browse</p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-black text-white hover:bg-black/90">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

