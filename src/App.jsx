import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AuthProvider, { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './Utils/localstorage'


const App = () => {

  const [user, setuser] = useState(null)
  const [LogInUserData, setLogInUserData] = useState(null)
  const [userData,setuserData]=useContext(AuthContext);

  useEffect(()=>{
      const loggedInUser=localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userdata=JSON.parse(loggedInUser)
        console.log(userdata)
        setLogInUserData(userdata.data)
      }
  },[])

  const handleLogin=(Email,Password)=>{
    if(Email=='admin@me.com' && Password=="123"){
      setuser({role:'admin'})
      console.log("ADMIN LOGIN SUCCESS")
    console.log("user being set:", { role: 'admin' })
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData)
    {
      const employee=userData.employees.find((e)=>Email==e.email && e.password==Password)
      if(employee){
      setuser('employee')
      setLogInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }
  }
    else{
      alert("Invalid Credentials")
    }
  }

  return (
  <>
    {!user && <Login handleLogin={handleLogin} />}

    {user?.role === 'admin' && <AdminDashboard changeUser={setuser} />}

    {user === 'employee' && (
      <EmpDashboard changeUser={setuser} data={LogInUserData} />
    )}
  </>
)
}

export default App
