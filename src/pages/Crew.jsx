import React, { useState } from "react";
import "../styles/Crew.css";
import Navigation from "../components/Navigation";

function Crew({ crews }) {
  const [currentIndex, setCurrentIndex] = useState(3);
  // console.log(crews);
  const currentCrew = crews[currentIndex];
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="crewBgImg text-white pb-[3rem]">
      <Navigation />
      <p className="font-bold text-[3rem] md:pt-[10rem] max-md:pt-[10rem] mb-[3rem] md:ml-[10rem]">
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
    <div className="crewContainer h-[30rem] flex justify-between max-md:flex-col max-w-[1000px] mx-auto">
      <div className="crewContents self-center">
        <p className="text-[2rem]">{crewRole}</p>
        <p className="my-[0.5rem] text-[3.5rem]">{crewName}</p>
        <p>{crewBio}</p>
        <div className="flex gap-4 mt-6">
          {crews.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
      <img className="md:w-[50%] " src={crewImg} alt={`crew Image ${crewName}`} />
    </div>
  );
}

export default Crew;
