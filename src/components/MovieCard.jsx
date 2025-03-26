import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constant";
// import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath , movieId }) => {
  // const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate(`/watch/${movieId}`);
  }

  if(!posterPath) return null

  return (
    <div
      className=" w-36 md:w-48 pr-4 cursor-pointer"
      // whileHover={{ scale: 1.1 }} // Zoom effect on hover
      // whileTap={{ scale: 0.9 }}   // Shrink effect on click
      // animate={isClicked ? { rotate: 360 } : { rotate: 0 }} // Rotate on click
      // transition={{ duration: 0.5 }}
      // onClick={() => setIsClicked(!isClicked)}
      onClick={handleClick}  >
    
      <img alt="movie card" src={IMG_CDN_URL + posterPath} className="rounded-lg shadow-lg" />
      </div>
  );
};
export default  MovieCard