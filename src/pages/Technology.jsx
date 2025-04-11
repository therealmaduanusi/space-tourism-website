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
      <p className="font-bold text-[3rem] md:pt-[10rem] max-md:pt-[10rem] mb-[3rem] md:ml-[10rem]">
        <span className="text-[#fff5]">03</span> Space launch 101
      </p>
      <SpaceLauch
        currentIndex={currentIndex}
        technology={technology}
        handleIndex={handleIndex}
        spaceName={currentSpace.name}
        spaceImage={currentSpace.images.portrait}
        spaceDescription={currentSpace.description}
       />
    </div>
  );
}

function SpaceLauch({technology, handleIndex, currentIndex, spaceName, spaceImage, spaceDescription}) {
  return (
    <div className="spaceLauchConatiner flex max-md:flex-col md:max-w-[1000px] md:mx-auto gap-[2rem]">
      <div className="spaceContents flex max-md:flex-col gap-[2rem]">
        <div className="spaceToggle flex md:flex-col gap-[1rem]">
          {technology.map((_, index) => (
            <button
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
      <img className="spaceImg" src={spaceImage} alt={`space image ${spaceName}`} />
      {/* <img src={spaceImage} alt={`space image ${spaceName}`} /> */}
    </div>
  );
}

export default Technology;
