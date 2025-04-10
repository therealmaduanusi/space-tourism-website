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
            <h3 className='uppercase text-[5rem]'>{name}</h3>
            <p>{description}</p>
            <div className='bg-[#fff] w-[100%] h-[2px] mt-[3rem] mb-[1.5rem]'></div>
            <div className="meterTimeContainer uppercase flex justify-between">
                <div className="averageMeter">
                    <p>Avg. distance</p>
                    <p>{distance}</p>
                </div>
                <div className="averageTime">
                    <p>Est. travel time</p>
                    <p>{travel}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Europa