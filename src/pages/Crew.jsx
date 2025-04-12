import React, { useState } from "react";
import "../styles/Crew.css";
import Navigation from "../components/Navigation";

function Crew({ crews }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(crews);
  const currentCrew = crews[currentIndex];
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="crewBgImg text-white pb-[3rem]">
      <Navigation />
      <p className="max-sm:text-center text-[2.5rem] max-sm:text-[2rem] md:pt-[10rem] max-md:pt-[5rem] mb-[3rem] md:ml-[10rem]">
        <span className="text-[#fff5]">02</span> Meet your crew
      </p>
      <CrewContents
        key={currentCrew.name}
        crews={crews}
        handleDotClick={handleDotClick}
        currentIndex={currentIndex}
        crewName={currentCrew.name}
        crewImg={currentCrew.images.png}
        crewBio={currentCrew.bio}
        crewRole={currentCrew.role}
      />
    </div>
  );
}

function CrewContents({
  crewName,
  crewImg,
  crewBio,
  crewRole,
  crews,
  currentIndex,
  handleDotClick,
}) {
  return (
    <div className="crewContainer max-md:text-center flex justify-between gap-[2rem] max-md:flex-col max-w-[900px] md:mx-auto">
      <div className="crewContents flex flex-col justify-around">
        <div>
          <p className="text-[1.5rem] text-[#fff6]">{crewRole}</p>
          <p className="my-[0.5rem] xs:text-[3.5rem] max-sm:text-[2rem] font-space">{crewName}</p>
          <p className="md:max-w-[30rem] text-[#D0D6F9]">{crewBio}</p>
        </div>
        <div className="flex gap-4 mt-6 max-md:justify-center">
          {crews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full hover ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
      <img className="crewImg md:max-w-[50%] md:h-[400px] md:object-contain" src={crewImg} alt={`crew Image ${crewName}`} />
    </div>
  );
}

export default Crew;
