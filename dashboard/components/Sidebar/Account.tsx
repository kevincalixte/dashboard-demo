import React from 'react'

export const Account = () => {
    return (
        <div className='border-b border-stone-300 mb-4 mt-2 pb-4'>
            <AccountCard avatar='https://api.dicebear.com/9.x/initials/svg?seed=KC&scale=80' name='Kevin Calixte' email='kevin.calixte@ceppic.fr' />
        </div>
    )
}

const AccountCard = ({
    avatar,
    name,
    email
}: {
    avatar: string;
    name: string;
    email: string;
}) => {
    return (
        <button className='flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center'>
            <img className='size-8 rounded shadow ' src={avatar} alt="" />
            <div className='text-start'>
                <span className='text-sm block font-semibold'>{name}</span>
                <span className='text-xs block'>{email}</span>
            </div>
        </button>
    )

}
