import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='header_outer'>
    <div className="header_right">
    <h1><NavLink to='/'>
      HOME  ||  </NavLink> 
      <NavLink to='/skills'>
        SKILLS  ||  </NavLink> 
        <NavLink to='/projects'>
           PROJECTS</NavLink></h1>
    </div>
</div>
  )
}

export default Header