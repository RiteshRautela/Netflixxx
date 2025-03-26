import React from 'react';
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/FullVideo/${movieId}`); // ✅ Navigates with movieId
  };

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg font-semibold w-1/2">{overview}</p>

      <div className="my-6 md:m-0">
        {/* Play Button - Navigates to Full Video */}
        <button 
          className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg cursor-pointer hover:bg-opacity-80"
          onClick={handleClick}
        >
          ▶ Play
        </button>

        {/* More Info Button - Kept as it is ✅ */}
        <button className="hidden md:inline-block md:mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg cursor-pointer hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
