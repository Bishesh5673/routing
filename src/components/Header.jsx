import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='navbar'>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/contact' >Contact</NavLink>
      <NavLink to='/about' >About</NavLink>
      <NavLink to='/login' >Login</NavLink>
      <NavLink to='/product' >Product</NavLink>
      <NavLink to='/profile' >Profile</NavLink>
      <NavLink to='/admin' >Admin</NavLink>
    </div>
  )
}

export default Header
