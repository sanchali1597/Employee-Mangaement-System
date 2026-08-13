import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-linear-to-r from-green-900/50 via-green-900/25 to-green-900/50 rounded-xl'>
        <div className='flex justify-between'>
            <h3 className='bg-red-500/50 rounded-lg px-3 py-1'>{data.category}</h3>
            <h4 className='text-sm font-medium'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
      
      <div className='mt-3'>
        <button className='bg-green-600 font-semibold py-1 px-2 rounded'>Completed ✅</button>
      </div>
    </div>
  )
}

export default CompleteTask
