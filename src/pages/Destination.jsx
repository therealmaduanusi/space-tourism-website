import React from 'react'
import Navigation from '../components/Navigation'
import '../styles/Destination.css'

function Destination() {
  return (
    <div className='destinationBgImg'>
      <Navigation />
      <p className="underline text-white">
        Destination!
      </p>
    </div>
  )
}

export default Destination