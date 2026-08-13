import React from 'react'

const FailedTask = ({data}) => {
  return (
      <div className='shrink-0 h-full w-75 p-5 bg-linear-to-r from-red-700/45 via-red-700/25 to-red-700/45 rounded-xl'>
        <div className='flex justify-between'>
            <h3 className='bg-red-600/50 rounded-lg px-3 py-1'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
      
      <div className='mt-5'>
        <button className='bg-red-700 rounded-lg font-medium py-1 px-2 '>Failed ❌</button>
      </div>
    </div>

  )
}

export default FailedTask
