import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/localstorage'

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [userData, setuserData] = useState({
      employees:[],
      admin:null
    });

    useEffect(() => {
      setLocalStorage()
      const {employees}=getLocalStorage();
      setuserData({employees});
    }, []);
    
    
  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
