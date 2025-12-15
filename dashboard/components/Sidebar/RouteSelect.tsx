import React from 'react'
import { IconType } from 'react-icons'
import { FaBus, FaCalendar, FaHome, FaUsers, FaUserTie } from 'react-icons/fa'

export const RouteSelect = () => {
    return (
        <div className='space-y-1 '>
            <Route selected={true} Icon={FaHome} title="Home" />
            <Route selected={false} Icon={FaUserTie} title="Guides" />
            <Route selected={false} Icon={FaBus} title="Chauffeurs" />
            <Route selected={false} Icon={FaUsers} title="Clients" />
            <Route selected={false} Icon={FaCalendar} title="Agenda" />
        </div>
    )
}

const Route = ({
    selected,
    Icon,
    title
}: {
    selected: boolean;
    Icon: IconType;
    title: string;
}) => {
    return (
        <button className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,background-color,color]
            ${selected
                ? 'bg-white text-stone-950 shadow'
                : 'hover:bg-stone-200 bg-transparent text-stone-500 shadow-none'}`}>
            <Icon />
            <span>{title}</span>
        </button>
    )
}



