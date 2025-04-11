import React, { useState } from "react";
import "../styles/Technology.css";
import Navigation from "../components/Navigation";

function Technology({ technology }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(technology);
  let currentSpace = technology[currentIndex];

  function handleIndex(index) {
    setCurrentIndex(index)
  }

  return (
    <div className="technologyBgImg text-white pb-[3rem]">
      <Navigation />
      <p className="font-bold text-[2.5rem] max-sm:text-[2rem] md:pt-[10rem] max-md:pt-[5rem] mb-[3rem] md:ml-[10rem]">
        <span className="text-[#fff5]">03</span> Space launch 101
      </p>
      <SpaceLauch
        currentIndex={currentIndex}
        technology={technology}
        handleIndex={handleIndex}
        spaceName={currentSpace.name}
        spaceImagePortrait={currentSpace.images.portrait}
        spaceImageLandScape={currentSpace.images.landscape}
        spaceDescription={currentSpace.description}
       />
    </div>
  );
}

function SpaceLauch({technology, handleIndex, currentIndex, spaceName, spaceImagePortrait, spaceImageLandScape, spaceDescription}) {
  return (
    <div className="spaceLauchConatiner flex max-md:flex-col md:max-w-[1000px] md:mx-auto gap-[2rem]">
      <div className="spaceContents flex max-md:flex-col gap-[2rem]">
        <div className="spaceToggle flex md:flex-col gap-[1rem] max-md:justify-center">
          {technology.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndex(index)}
              className={`spaceBtn ${index === currentIndex ? 'bg-[#fff] text-[#000]' : ''}`}
            >{index + 1}</button>
          ))}
        </div>
        <div className="spaceContent">
          {/* <p></p> */}
          <p className="text-[2rem] xl:text-[3rem] ">{spaceName}</p>
          <p>{spaceDescription}</p>
        </div>
      </div>
      <img className="spaceImg max-md:hidden w-[50%]" src={spaceImagePortrait} alt={`space image ${spaceName}`} />
      <img className="spaceImg md:hidden order-first" src={spaceImageLandScape} alt={`space image ${spaceName}`} />
    </div>
  );
}

export default Technology;
