import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='header'>
        <NavLink to="/" className='w-20 h-10 rounded-lg bg-blue-200 items-center justify-center flex font-bold shadow-md'>
            <p>Sai Nyi</p>
        </NavLink>

        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/about' className={({isActive }) => isActive? 'text-blue-500':'text-gray-300'}>
            About</NavLink>
            <NavLink to='/project' className={({isActive }) => isActive? 'text-blue-500':'text-gray-300'}>
            Projects</NavLink>
        </nav>
    </header>
  )
}

export default Navbar