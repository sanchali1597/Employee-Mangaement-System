import React from 'react'

const TaskNumbers = ({tasks=[]}) => {
  const newTaskCount = tasks.filter(
        task => task.newTask
    ).length

    const acceptedTaskCount = tasks.filter(
        task => task.active && !task.newTask
    ).length

    const completedTaskCount = tasks.filter(
        task => task.completed
    ).length

    const failedTaskCount = tasks.filter(
        task => task.failed
    ).length
  return (
    <div className='flex mt-10 justify-between screen gap-5'>
      <div className='h-41 w-[30%] py-5 px-9 rounded-xl bg-linear-to-r from-amber-500/50 via-amber-500/25 to-amber-500/50'>
        <h2 className='text-2xl font-semibold'>{newTaskCount}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='h-41 w-[30%] py-5 px-9 rounded-xl bg-linear-to-r from-green-900/50 via-green-900/25 to-green-900/50'>
        <h2 className='text-2xl font-semibold'>{completedTaskCount}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='h-41 w-[30%] py-5 px-9 rounded-xl bg-linear-to-r from-indigo-900/45 via-indigo-900/25 to-indigo-900/45'>
        <h2 className='text-2xl font-semibold'>{acceptedTaskCount}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='h-41 w-[30%] py-5 px-9 rounded-xl bg-linear-to-r from-red-700/45 via-red-700/25 to-red-700/45'>
        <h2 className='text-2xl font-semibold'>{failedTaskCount}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskNumbers
