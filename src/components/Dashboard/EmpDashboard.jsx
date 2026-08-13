import React,{useState} from 'react'
import Header from '../Others/Header'
import TaskNumbers from '../Others/TaskNumbers'
import Task from '../TaskList/Task'

const EmpDashboard = (props) => {
  const [tasks, setTasks] = useState(props.data.tasks||[])
  return (
    <div className='p-15 h-screen'>
      <div className='flex justify-between items-end'>
      <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>{props.data.name}👋 </span></h1>
        <Header changeUser={props.changeUser} data={props.data}/> 
        </div>
        <TaskNumbers tasks={tasks}/>
        <Task tasks={tasks}
              setTasks={setTasks}/>
    </div>
  )
}

export default EmpDashboard
