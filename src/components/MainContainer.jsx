import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";
import ShowcaseShimmer from "./ShowcaseShimmer"; // ✅ Import ShowcaseShimmer

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);

  // ✅ Fix: Ensure `movies` exists before accessing `movies[0]`
  if (!movies || !Array.isArray(movies) || movies.length === 0) {
    return <ShowcaseShimmer />; // ✅ Show shimmer effect instead of "Loading..."
  }

  // ✅ Extract only the first movie safely
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie || {}; // Safe fallback if null

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
