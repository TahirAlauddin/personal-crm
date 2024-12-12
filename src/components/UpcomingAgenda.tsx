'use client'
import React from 'react'

type MeetingWithClientProps = {
    dateColor: string
    dateBgColor: string
}


const MeetingWithClient = ({dateColor, dateBgColor}: MeetingWithClientProps) => {
    return (
    <div className="flex flex-col gap-1">
        <p className={`rounded-sm text-xs px-2 w-fit font-semibold bg-[${dateBgColor}] text-[${dateColor}]`}>11:00 - 12:00 Feb 2, 2024</p>
        <h3 className='text-sm font-medium'>Meeting with Client</h3>
        <p className='text-xs text-secondaryGray'>This monthly progress agenda</p>
    </div>

    )
}


const UpcomingAgenda = () => {
  return (
    <div className='border-[1px] rounded-sm m-3 p-2 w-1/4 flex flex-col gap-2 '>
        <h2 className='font-semibold mb-2'>Upcoming Agenda</h2>
        {/* bluish color */}
        <MeetingWithClient dateBgColor="#EDF2FE" dateColor="#4976F4" /> 
        {/* purplish color */}
        <MeetingWithClient dateBgColor="#F4EDF7" dateColor="#954BAF" />
        {/* yellowish */}
        <MeetingWithClient dateBgColor="#FBF4EC" dateColor="#D28E3D" />
    </div>
  )

}

export default UpcomingAgenda
