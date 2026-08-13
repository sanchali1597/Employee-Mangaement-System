import React from 'react'

const AcceptTask = ({data,completeTask,failTask}) => {
  
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-linear-to-r from-indigo-900/45 via-indigo-900/25 to-indigo-900/45 rounded-xl'>
        
        <div className='flex justify-between'>
          
            <h3 className='bg-red-500/50 rounded-lg  px-3 py-1'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
      
      <div className='flex justify-between mt-4'>
        <button
        onClick={() => completeTask(data.id)}
        className='bg-green-900/80 rounded py-1 px-2 text-sm text-amber-100 '>Mark as Completed</button>
        <button
         onClick={() => failTask(data.id)}
         className='bg-red-700/80 py-1 px-2 rounded text-amber-100 '>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
