import { useState } from "react"
import React from 'react'

const NewTask = ({data,acceptTask}) => {
   const [accepted, setaccepted] = useState(false)

   const acceptedTasks=()=>{
    setaccepted(true)
   }
  return (
    <div className='shrink-0 h-full w-75 p-5 bg-linear-to-r from-amber-500/50 via-amber-500/25 to-amber-500/50 rounded-xl'>
        <div className='flex justify-between'>
            <h3 className='bg-red-700/50 rounded-lg px-3 py-1'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm font-medium mt-2'>{data.taskDescription}!</p>
      
      <div className='mt-4'>
        <button
         onClick={() => acceptTask(data.id)}
         className='bg-green-900/70 hover:bg-green-900/50 active:scale-95 text-zinc-100 py-1 px-2 rounded-lg'>Accept Task</button>
      </div>
  
 {accepted && (<div className="" >
                  <span className='text-emerald-950 text-lg font-medium'>
                    Task Accepted ✅
                  </span>
                </div>
            )}
</div>
  )}
export default NewTask
