import React from 'react'
import { NavLink } from 'react-router-dom'
// import 

function Navigation() {
  return (
    <header className='header'>
        <nav className='navigation'>
            <ul className='ul-list'>
                <li className='lists-link'>
                    <NavLink to='/'>HOME</NavLink>
                </li>
                <li className='lists-link'>
                    <NavLink to='/destination'>DESTINATION</NavLink>
                </li>
                <li className='lists-link'>
                    <NavLink to='/crew'>CREW</NavLink>
                </li>
                <li className='lists-link'>
                    <NavLink to='technology'>TECHNOLOGY</NavLink>
                </li>
            </ul>
            <div className="hamburger-menu">

            </div>
        </nav>
    </header>
  )
}

export default Navigation