import React from 'react'
import { FiActivity, FiAlertCircle, FiCalendar, FiCheckCircle } from 'react-icons/fi'
import { IconType } from 'react-icons'

export const Tasks = () => {
    return (
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-5 p-5 '>
            <TaskCard Icon={FiAlertCircle} number={2} text='urgent tasks' color={['red-500', 'red-400']} />
            <TaskCard Icon={FiActivity} number={4} text='ongoing tasks' color={['orange-500', 'orange-400']} />
            <TaskCard Icon={FiCalendar} number={11} text='scheduled tasks' color={['blue-500', 'blue-400']} />
            <TaskCard Icon={FiCheckCircle} number={5} text='completed tasks' color={['green-500', 'green-400']} />
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

        <div className={`bg-linear-to-r from-${color[0]} to-${color[1]} shadow-lg cursor-pointer text-white rounded-sm h-10 flex items-center justify-center gap-2 hover:scale-102 transition ease-in-out `}>
            <Icon />
            <span className='font-bold text-lg'>{number}</span>
            <span>{text}</span>
        </div>
    )
}

