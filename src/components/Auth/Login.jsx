import React, { useState,useEffect } from 'react'

const Login = ({handleLogin}) => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')


    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(Email,Password)

        setEmail('')
        setPassword('')
    }

  return (
    <div className='animate-[slideUp_0.5s_ease-out_0.35s_both] flex items-center justify-center h-screen w-screen'>
 
        <div className='border-3 border-x-indigo-950 border-y-mauve-700 rounded-xl lg:w-[30%] lg:h-[60%] p-15 lg:pt-20 lg:px-0 '>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={Email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='text-black outline-none lg:w-[85%] lg:h-[20%] bg-transparent border-2 border-emerald-950/50 rounded-xl px-4 py-2 text-xl font-semibold placeholder:text-zinc-700' type="email"  placeholder='Enter your email'/>

                <input 
                value={Password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none lg:w-[85%] lg:h-[20%] bg-transparent border-2 mt-8 border-emerald-950/50 rounded-xl px-4 py-2 text-xl font-semibold placeholder:text-zinc-700' type="password" placeholder='Enter your password'/>

                <button  className='mt-15 lg:w-[60%] lg:h-[20%] text-white outline-none bg-indigo-950 rounded-full px-5 py-3 text-lg'> Login </button>
            </form>
        </div>
    </div>
  )
}

export default Login
