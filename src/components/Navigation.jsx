import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import iconHamburger from '../assets/shared/icon-hamburger.svg'
import iconClose from '../assets/shared/icon-close.svg'
import './Navigation.css'
// import 

function Navigation() {
  const [hamburger, setHamburger] = useState(true)

  function handleBurger() {
    setHamburger(prevValue => !prevValue)
  }
  return (
    <header className='flex justify-between md:pt-[2rem]'>
        <div className="logo md:pl-[5rem] xs:self-center ">
            <Link to='/'><img src={logo} alt="Space Tourism Logo" /></Link>
        </div>
        <div className="line self-center relative left-[10px]"></div>
        <nav className='flex navigation xs:bg-[#ffffff6e]'>
            <ul className={`nav-ul-lists ${hamburger && 'displayMenu'}`}>
                <li className='xs:inline-block max-sm:pb-[1rem] lists-link'>
                    <NavLink className='no-underline text-[#ffffff78]' to='/'><span className='text-[#fff]'>00</span> HOME</NavLink>
                </li>
                <li className='xs:inline-block lists-link'>
                    <NavLink className='no-underline text-[#ffffff78]' to='/destination'><span className='text-[#fff]'>01</span> DESTINATION</NavLink>
                </li>
                <li className='xs:inline-block max-sm:py-[1rem] lists-link'>
                    <NavLink className='no-underline text-[#ffffff78]' to='/crew'><span className='text-[#fff]'>02</span> CREW</NavLink>
                </li>
                <li className='xs:inline-block lists-link'>
                    <NavLink className='no-underline text-[#ffffff78]' to='/technology'><span className='text-[#fff]'>03</span> TECHNOLOGY</NavLink>
                </li>
            </ul>
            <div onClick={handleBurger} className="hamburger-menu xs:hidden">
                {hamburger ? <img src={iconHamburger} alt="menu open" /> : <img src={iconClose} alt="menu close" />} 
            </div>
        </nav>
    </header>
  )
}

export default Navigation