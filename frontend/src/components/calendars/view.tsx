"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Plus,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import dynamic from "next/dynamic";
import { DateSelectArg } from "@fullcalendar/core/index.js";
import FullCalendar from "@fullcalendar/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import CRMCalendar from "@/components/calendars/wrapper";
import { INITIAL_EVENTS, EVENT_TYPES } from "./dummy_events";
import EventModal from "./add_events_modal";

interface Event {
  id: string;
  title: string;
  start: string;
  backgroundColor: string;
  borderColor: string;
}

export default function CalendarView() {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("monthly");
  const calendarRef = useRef<FullCalendar | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    setCurrentDateUI(currentDate);
  }, [currentDate]);

  const viewMap = {
    monthly: "dayGridMonth",
    weekly: "timeGridWeek",
    daily: "timeGridDay",
  } as const;

  const setCustomViewChange = (view: string) => {
    setView(view);
    if (calendarRef.current) {
      calendarRef.current
        .getApi()
        .changeView(viewMap[view as keyof typeof viewMap]);
    }
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    // const title = prompt("Please enter a new event title");
    // if (title) {
    //   const eventType =
    //     Object.keys(EVENT_TYPES)[
    //       Math.floor(Math.random() * Object.keys(EVENT_TYPES).length)
    //     ];
    //   const newEvent = {
    //     id: String(events.length + 1),
    //     title,
    //     start: selectInfo.startStr,
    //     backgroundColor: EVENT_TYPES[eventType as keyof typeof EVENT_TYPES],
    //     borderColor: EVENT_TYPES[eventType as keyof typeof EVENT_TYPES],
    //   };
    //   setEvents([...events, newEvent]);
    // }
    setSelectedDate(selectInfo.start.toDateString);
    setIsModalOpen(true);
  };

  const handlePrevMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const setCurrentDateUI = (date: Date) => {
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(date);
    }
  };

  const handleToday = () => {
    setCurrentDate(new Date());
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(new Date());
    }
  };

  const handleAddEvent = () => {
    setSelectedDate(currentDate.toDateString());
    setIsModalOpen(true);
  };

  const handleSaveEvent = (eventData: Event) => {
    const eventType = eventData.title.includes("Design")
      ? "Design Review"
      : eventData.title.includes("Meeting")
      ? "Meeting"
      : eventData.title.includes("Discussion")
      ? "Discussion"
      : eventData.title.includes("Market")
      ? "Market Research"
      : "New Goals";

    const newEvent = {
      id: String(events.length + 1),
      title: eventData.title,
      start: selectedDate,
      backgroundColor: EVENT_TYPES[eventType],
      borderColor: EVENT_TYPES[eventType],
    };

    setEvents([...events, newEvent]);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-6">
          <h1 className="text-xl font-semibold">Calendar</h1>
          <Tabs
            value={view}
            onValueChange={setCustomViewChange}
            className="w-auto"
          >
            <TabsList>
              <TabsTrigger value="monthly" className="px-4">
                Monthly
              </TabsTrigger>
              <TabsTrigger value="weekly" className="px-4">
                Weekly
              </TabsTrigger>
              <TabsTrigger value="daily" className="px-4">
                Daily
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex cursor-pointer items-center gap-1"
          >
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex items-center gap-1"
            onClick={handleAddEvent}
          >
            <Plus className="h-4 w-4" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex cursor-pointer items-center gap-1"
              >
                <span>{format(currentDate, "MMMM yyyy")}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Array.from({ length: 12 }, (_, i) => {
                const date = new Date(currentDate);
                date.setMonth(i);
                return (
                  <DropdownMenuItem
                    key={i}
                    onClick={() => setCurrentDate(date)}
                  >
                    {format(date, "MMMM yyyy")}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handlePrevMonth}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8"
              onClick={handleToday}
            >
              Today
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleNextMonth}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="border rounded-md overflow-hidden bg-white">
        <CRMCalendar
          ref={calendarRef}
          events={events}
          currentDate={currentDate.toISOString()}
          view={view}
          onDateSelect={handleDateSelect}
        />
      </div>

      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveEvent}
        defaultDate={new Date(selectedDate)}
      />
    </div>
  );
}
