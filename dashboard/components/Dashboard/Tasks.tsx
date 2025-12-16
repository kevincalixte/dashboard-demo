import React from 'react'
import { FiActivity, FiAlertCircle, FiCalendar, FiCheckCircle } from 'react-icons/fi'
import { IconType } from 'react-icons'

export const Tasks = () => {
    return (
        <>
            <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-5 p-5 '>
                <TaskCard Icon={FiAlertCircle} number={2} text='urgent tasks' color={['from-red-500', 'to-red-400']} />
                <TaskCard Icon={FiActivity} number={4} text='ongoing tasks' color={['from-orange-500', 'to-orange-400']} />
                <TaskCard Icon={FiCalendar} number={11} text='scheduled tasks' color={['from-blue-500', 'to-blue-400']} />
                <TaskCard Icon={FiCheckCircle} number={5} text='completed tasks' color={['from-green-500', 'to-green-400']} />
            </div>

            {/* Urgent tasks */}
            <TaskCardInfos id={1} text={['Confirm airport transfer', 'Due: 2024-06-16', 'Call driver Mr. Harari', 'Tourism - Airport']} color="bg-red-500" action="Treat" />
            <TaskCardInfos id={2} text={['Client missed payment', 'Due: 2024-06-16', 'Call client Mr. Smith', 'Client - Payment']} color="bg-red-500" action="Treat" />
            {/* Ongoing tasks */}
            <TaskCardInfos id={3} text={['Guide assignment', 'Due: 2024-06-18', 'Assign guide to Paris tour', 'Tourism - Guide']} color="bg-orange-500" action="Follow" />
            <TaskCardInfos id={4} text={['Reservation update', 'Due: 2024-06-21', 'Update booking for Mr. Brown', 'Reservation - Update']} color="bg-orange-500" action="Follow" />
            {/* Scheduled tasks */}
            <TaskCardInfos id={5} text={['Tour booking', 'Due: 2024-06-22', 'Confirm reservation for Ms. Lopez', 'Tourism - Booking']} color="bg-blue-500" action="View" />
            <TaskCardInfos id={6} text={['Driver schedule', 'Due: 2024-06-23', 'Send schedule to all drivers', 'Chauffeur - Planning']} color="bg-blue-500" action="View" />
            {/* Completed tasks */}
            <TaskCardInfos id={7} text={['Driver assigned', 'Done: 2024-06-11', 'Ms. Garcia - Airport pickup', 'Chauffeur - Assignment']} color="bg-green-500" action="Finish" />
            <TaskCardInfos id={8} text={['Client reminder sent', 'Done: 2024-06-12', 'SMS to Mr. Lee', 'Client - Reminder']} color="bg-green-500" action="Finish" />
            <TaskCardInfos id={9} text={['Bus cleaned', 'Done: 2024-06-13', 'Bus #7 ready', 'Chauffeur - Bus']} color="bg-green-500" action="Finish" />
        </>
    )
}

const TaskCardInfos = ({
    id,
    text,
    color,
    action
}: {
    id: number;
    text: [string, string, string, string];
    color: string;
    action: string;
}) => {
    return (
        <div className='items-center grid border grid-cols-[10px_1fr_1fr_1fr_1fr_0.5fr] p-3 border-stone-300 m-5 rounded gap-5 hover:bg-stone-100 transition-colors cursor-pointer'>
            <span className={`size-4 rounded-full ${color} border-0 `}></span>
            <span className='font-bold text-sm'>{text[0]}</span>
            <span className='text-xs'>{text[1]}</span>
            <span className='text-xs'>{text[2]}</span>
            <span className='text-xs'>{text[3]}</span>
            <button className={`${color} hover:scale-105 text-white text-sm  py-2 rounded-xs`}>{action}</button>
        </div>
    )
}

const TaskCard = ({
    Icon,
    number,
    text,
    color
}: {
    Icon: IconType;
    text: string;
    number: number;
    color: [string, string];
}) => {
    return (

        <button className={`bg-linear-to-r ${color[0]} ${color[1]} shadow-lg text-white rounded-sm h-10 flex items-center justify-center gap-2 hover:scale-102 transition ease-in-out `}>
            <Icon />
            <span className='font-bold text-lg'>{number}</span>
            <span>{text}</span>
        </button>
    )
}

