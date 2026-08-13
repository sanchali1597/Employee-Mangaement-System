import React from 'react'

const Header = (props) => {

  const LogOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
  
  return (
    <div className='absolute top-10 right-10'>
      <button onClick={LogOutUser} className='bg-red-800  text-white px-3 py-1 rounded-sm text-lg'>Log Out</button>
    </div>
  )
}

export default Header
