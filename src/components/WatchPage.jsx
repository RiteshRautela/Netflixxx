import React from "react";
import { useParams } from "react-router-dom";
import FullVideo from "../components/FullVideo";

const WatchPage = () => {
  const { movieId } = useParams();  // ✅ Get movieId from URL

  return (
    <div className="bg-black h-screen">
      <FullVideo movieId={movieId} /> {/* ✅ Reusing FullVideo */}
    </div>
  );
};

export default WatchPage;
