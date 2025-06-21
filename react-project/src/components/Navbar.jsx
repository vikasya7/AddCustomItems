import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className='flex w-full  items-center justify-around h-[60px]' style={{ backgroundColor: '#F7CAC9' }} >
           <Link to='/' >Home</Link>
           <Link to='items' >AddItems</Link>
       </div>
    </div>
  )
}

export default Navbar
