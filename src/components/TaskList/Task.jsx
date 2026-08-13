import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { useState } from 'react'

const Task = ({tasks,setTasks}) => {
  const acceptTask = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id
                    ? {
                        ...task,
                        newTask: false,
                        active: true,
                        completed: false,
                        failed: false
                    }
                    : task
            )
        )
    }
  const completeTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? {
            ...task,
            newTask: false,
            active: false,
            completed: true,
            failed: false
          }
        : task
    ))}
    const failTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? {
            ...task,
            newTask: false,
            active: false,
            completed: false,
            failed: true
            }
          : task
    ))}
  return (
    <div id="Tasklist" className='h-[45%] overflow-auto flex items-center justify-start gap-5 flex-nowrap mt-10 py-5 rounded-xl w-full'>
      {tasks.map((elem,idx)=>{
        if(elem.active){
          return <AcceptTask key={idx} data={elem} completeTask={completeTask} failTask={failTask} />
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem} acceptTask={acceptTask}/>
        } 
        if(elem.completed){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
        }
      })}
    </div>
  )
}

export default Task
