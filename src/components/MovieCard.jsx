import React, { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import HoverCard from "./HoverCard";

const HOVER_DELAY = 2000; // 6 seconds

const MovieCard = ({ posterPath, movieId, movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showHoverCard, setShowHoverCard] = useState(false);
  const navigate = useNavigate();
  let timer; // Declare timer outside to manage it properly

  useEffect(() => {
    if (isHovered) {
      timer = setTimeout(() => setShowHoverCard(true), HOVER_DELAY);
    } else {
      clearTimeout(timer);
      setShowHoverCard(false);
    }
    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, [isHovered]);

  if (!posterPath) return null;

  return (
    <div
      className="relative w-36 md:w-48 pr-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Zoom-out Effect */}
      <div className="transform transition duration-500 hover:scale-125 bg-indigo-400 hover:bg-indigo-600 rounded-lg shadow-lg">
        <img
          alt="movie card"
          src={IMG_CDN_URL + posterPath}
          className="w-full h-auto rounded-lg"
          onClick={() => navigate(`/watch/${movieId}`)}
        />
      </div>

      {/* HoverCard appears ONLY if hovered for 6 seconds */}
      {showHoverCard && (
        <div className="absolute top-0 left-0 w-full z-50">
          <HoverCard movie={movie} />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
