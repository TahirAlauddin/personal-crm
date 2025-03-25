"use client"

import { AllHTMLAttributes, forwardRef, useEffect, useState } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import { DateSelectArg } from "@fullcalendar/core/index.js"

interface CRMCalendarProps {
  events: any[]
  currentDate: string
  view: string
  onDateSelect: (date: DateSelectArg) => void
  ref?: React.RefObject<FullCalendar | null>
}

const CRMCalendar = ({ events, currentDate, view, onDateSelect, ref }: CRMCalendarProps) => {
  const [mounted, setMounted] = useState(false)

  // Only render the calendar on the client side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Map view names to FullCalendar view types
  const viewMap = {
    monthly: "dayGridMonth",
    weekly: "timeGridWeek",
    daily: "timeGridDay",
  } as const

  return (
    <FullCalendar
      ref={ref}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView={viewMap[view as keyof typeof viewMap] || "dayGridMonth"}
      initialDate={currentDate}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      weekends={true}
      events={events}
      select={onDateSelect}
      headerToolbar={false}
      height="auto"
      dayHeaderFormat={{ weekday: "short" }}
      dayCellClassNames="min-h-[100px] cursor-pointer"
      eventClassNames="rounded-sm px-1 py-0.5 text-xs font-medium"
      eventDisplay="block"
      eventTimeFormat={{
        hour: "numeric",
        minute: "2-digit",
        meridiem: "short",
      }}
    />
  )
}


export default CRMCalendar