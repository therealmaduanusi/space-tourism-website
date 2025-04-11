import React from "react"
import { NavLink } from "react-router-dom"
import './Navigation.css'
function DistanceNavigation() {
    return (
        <div className="destinationOutlet max-sm:mb-[1rem]">
            <ul>
                <li className='inline-block text-white'>
                    <NavLink to='moon'>MOON</NavLink>
                </li>
                <li className='inline-block text-white px-[1rem]'>
                    <NavLink to='mars'>MARS</NavLink>
                </li>
                <li className='inline-block text-white pr-[1rem]'>
                    <NavLink to='europa'>EUROPA</NavLink>
                </li>
                <li className='inline-block text-white'>
                    <NavLink to='titan'>TITAN</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default DistanceNavigation