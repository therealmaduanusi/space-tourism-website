import React from 'react'
import '../styles/Outlet.css'

function Europa({ destinations }) {
    // console.log(destinations);
    const [, , europa] = destinations
    const {description, distance, images,  name, travel} = europa
    const {png, webp} = images
    // console.log(europa);
    
    
  return (
    <div className="outlet flex justify-between max-md:flex-col">
        <img src={png} alt="Mars Image" />
        <div className="marsContentsContainer text-white max-md:order-first">
            <h3 className='uppercase xs:text-[5rem] max-sm:text-[3rem]'>{name}</h3>
            <p className='text-[#D0D6F9]'>{description}</p>
            <div className='bg-[#fff] w-[100%] h-[2px] mt-[3rem] mb-[1.5rem]'></div>
            <div className="meterTimeContainer uppercase flex justify-between max-sm:flex-col max-sm:gap-y-[1rem]">
                <div className="averageMeter">
                    <p className='text-[#fff6]'>Avg. distance</p>
                    <p className='text-[2rem]'>{distance}</p>
                </div>
                <div className="averageTime">
                    <p className='text-[#fff6]'>Est. travel time</p>
                    <p className='text-[2rem]'>{travel}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Europa