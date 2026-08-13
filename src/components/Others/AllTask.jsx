import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setuserData]=useContext(AuthContext)
  return (
    <div className=' p-5 mt-5 rounded'>
        <div className='bg-indigo-950/30 mb-3 py-2 px-4 gap-1.5 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5  '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Accepted Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed Task</h5>
        </div>
        <div className='overflow-auto'>
            {userData.employees.map(function(elem,idx){
            return  <div key={idx} className='border-2 border-indigo-900 mb-3 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-bold w-1/5 '>{elem.name}</h2>
            <h3 className='text-lg font-bold w-1/5  text-zinc-700'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-bold w-1/5 text-zinc-700'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-bold w-1/5 text-green-700'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-bold w-1/5 text-red-700'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
      
    </div>
  )
}

export default AllTask
