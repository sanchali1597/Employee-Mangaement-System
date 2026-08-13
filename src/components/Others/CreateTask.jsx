import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const[userData,setuserData]=useContext(AuthContext)

    const [TaskTitle, setTaskTitle] = useState('')
    const [TaskDes, setTaskDes] = useState('')
    const [TaskDate, setTaskDate] = useState('')
    const [Assignto, setAssignto] = useState('')
    const [category, setCategory] = useState('')

    
    const submitHandler=(e)=>{
        e.preventDefault()
         const newTask = {
        taskTitle: TaskTitle,
        taskDescription: TaskDes,
        taskDate: TaskDate,
        category: category,
        active: false,
        newTask: true,
        failed: false,
        completed: false
    }
     
        const data=userData.employees
        

        data.forEach(function(elem){
            if(Assignto==elem.name){
                elem.tasks.push(newTask)
                elem.taskCounts.newTask=elem.taskCounts.newTask+1
            }
        })
        console.log(data)
        setTaskTitle('')
        setCategory('')
        setAssignto('')
        setTaskDate('')
        setTaskDes('')
    }

  return (
    <div className='p-5  bg-linear-to-r from-indigo-950/30 via-indigo-950/5 to-indigo-950/30 mt-5 rounded'>
        <form
        onSubmit={(e)=>{
            submitHandler(e)
        }}
         className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <h3 className='text-lg font-medium text-zinc-900 mb-1'> Task Title</h3>
                <input 
                value={TaskTitle}
                onChange={(e)=>{
                    setTaskTitle(e.target.value)
                }}
                className='text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 mb-4' type="text" placeholder='Title'/>
                <h3 className='text-lg font-medium text-zinc-900 mb-1'>Date</h3>
                <input 
                value={TaskDate}
                onChange={(e)=>{
                    setTaskDate(e.target.value)
                }}
                className='text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 mb-4' type='date'/>
                <h3 className='text-lg font-medium text-zinc-900 mb-1'>Assign to</h3>
                <input 
                value={Assignto}
                onChange={(e)=>{
                    setAssignto(e.target.value)
                }}
                className='text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 mb-4' type="text" placeholder='Employee name'/>
                <h3 className='text-lg font-medium text-zinc-900 mb-1'>Category</h3>
                <input 
                value={category}
                onChange={(e)=>{
                    setCategory(e.target.value)
                }}
                className='text-lg py-1 px-2 w-4/5 rounded outline-none bg-transparent border-2 mb-4' type="text" placeholder='Design,dev,etc'/>
            </div>
            <div className='w-1/2 flex flex-col items-start'>
                <h3 className='text-lg font-medium text-zinc-900 mb-2'>Description</h3>
                <textarea
                value={TaskDes}
                onChange={(e)=>{
                    setTaskDes(e.target.value)
                }}
                className='w-full h-45 text-lg py-2 px-4 rounded outline-none bg-transparent border-2' placeholder='Add details'></textarea>
                <button className='bg-sky-950/75 text-amber-50 py-2 hover:bg-sky-950/60 px-3 rounded text-lg mt-4 w-full active:scale-98 active:bg-sky-950/90'>Create Task</button>
            </div>
            
        </form>
      </div>
  )
}

export default CreateTask
