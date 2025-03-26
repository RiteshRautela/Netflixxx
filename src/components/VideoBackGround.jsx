import React from "react";
import useMovieTrailer from "../customHooks/useMovieTrailer";
import { useSelector } from "react-redux";
import Spinning from "./Spinning"; // ✅ Import Spinning Component

const VideoBackGround = ({ movieId, fullScreen = false }) => {
  useMovieTrailer(movieId); // ✅ Fetch trailer
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  if (trailerVideo === null) return <Spinning />; // ✅ Show Spinning only when trailer is null

  if (!trailerVideo?.key) return <div className="text-white text-center">No trailer available</div>; // ✅ Handle missing trailer case

  return (
    <div className={fullScreen ? "w-screen h-screen" : "w-screen aspect-video"}>
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&loop=1&playlist=${trailerVideo.key}${
          fullScreen ? "&mute=0&controls=1" : "&mute=1&controls=0"
        }`} 
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
