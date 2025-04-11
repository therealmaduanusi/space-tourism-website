import React from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from '../components/Navigation'
import DistanceNavigation from '../components/DistanceNavigation'

import '../styles/Destination.css'
function Destination() {
  return (
    <div className='destinationBgImg'>
      <Navigation />
      <div className="destination mt-[10rem] max-md:mt-[5rem] md:ml-[10rem]">
        <h2 className="max-md:text-center text-white text-[2.5rem] max-sm:text-[2rem] max-sm:text-[2rem] mb-[2rem]">
          <span className='text-[#fff5]'>02</span> Pick Your Destination
        </h2>
      </div>
      <div className='max-md:text-center'>
        <DistanceNavigation />
        <Outlet />
      </div>
    </div>
  )
}

export default Destination