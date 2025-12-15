import React from 'react'
import { IconType } from 'react-icons'
import { FaBus, FaCalendar, FaClipboardList, FaCog, FaEnvelope, FaHome, FaSignOutAlt, FaTasks, FaUsers, FaUserTie } from 'react-icons/fa'

export const RouteSelect = () => {
    return (

        <div className='space-y-1 '>
            <Route selected={true} Icon={FaHome} title="Home" />
            <div className='border-b border-stone-300 py-2'> </div>
            <Route selected={false} Icon={FaUserTie} title="Guides" />
            <Route selected={false} Icon={FaBus} title="Drivers" />
            <Route selected={false} Icon={FaUsers} title="Clients" />
            <div className='border-b border-stone-300 py-2'> </div>
            <Route selected={false} Icon={FaEnvelope} title="Messages" />
            <Route selected={false} Icon={FaCalendar} title="Agenda" />
            <Route selected={false} Icon={FaClipboardList} title="Reservations" />
            <Route selected={false} Icon={FaTasks} title="Tasks" />
            <div className='border-b border-stone-300 py-2'> </div>
            <Route selected={false} Icon={FaCog} title="Settings" />
            <Route selected={false} Icon={FaSignOutAlt} title="Disconnect" />
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
        <button className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-md transition-[box-shadow,background-color,color]
            ${selected
                ? 'bg-white text-stone-950 shadow'
                : 'hover:bg-stone-200 hover:text-stone-700 text-stone-500 shadow-none'}`}>
            <Icon />
            <span>{title}</span>
        </button>
    )
}



