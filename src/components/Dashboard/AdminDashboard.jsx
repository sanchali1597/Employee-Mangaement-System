import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen p-10 w-full'>
      <h1 className='text-4xl font-semibold text-amber-900 underline'>Admin </h1>
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
