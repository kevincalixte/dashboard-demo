import React from 'react'

export const Dashboard = () => {
  return (
    <div className='bg-white rounded-lg shadow h-screen'>

      <div className='grid grid-cols-1 p-5 mt-5 mx-5 bg-stone-100 rounded-sm'></div>
      <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-5 p-5 [&_div]:rounded-sm [&_div]:bg-stone-100 [&_div]:h-32'>

        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </div>

      <div className='grid grid-cols-[30%_1fr] gap-5 px-5 [&_div]:bg-stone-100 [&_div]:h-72 '>
        <div></div>
        <div></div>
      </div>

      <div className='grid grid-cols-1 p-20 mt-5 mx-5 bg-stone-100 rounded-sm'></div>

    </div>
  )
}

