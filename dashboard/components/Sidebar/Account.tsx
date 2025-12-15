import React from 'react'

export const Account = () => {
    return (
        <div className='border-b border-stone-300 mb-4 mt-2 pb-4'>
            <button className='flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center'>
                <img className='size-8 rounded shadow ' src="https://api.dicebear.com/9.x/initials/svg?seed=Kevin&scale=80" alt="" />
           
            <div className='text-start'> 
                <span className='text-sm block font-semibold'>Kevin Calixte</span>
                <span className='text-xs block'>kevin.calixte@ceppic.fr</span>
            </div>
           
            </button>

        </div>
    )
}
