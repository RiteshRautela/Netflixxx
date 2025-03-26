import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoBackGround from "./VideoBackGround";
import Spinning from "../components/Spinning"; // ✅ Import Spinning component

const FullVideo = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // ✅ Show spinner for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      {isLoading ? <Spinning /> : <VideoBackGround movieId={movieId} fullScreen={true} />}
    </div>
  );
};

export default FullVideo;
