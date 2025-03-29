import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import MovieSliderShimmer from "./MovieSliderShimmer"; // ✅ Import MovieSliderShimmer

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // ✅ Show shimmer if movies data is not available
  if (!movies || !movies.NowPlayingMovies) {
    return <MovieSliderShimmer dimention="w-40 -mt-77 md:w-60 px-10 " />; // ✅ Show shimmer effect
  }

  return movies.NowPlayingMovies && (
    <div className="bg-black">
      <div className="relative mt-0 md:-mt-52 z-20 pl-4 md:pl-12">
        <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
      </div>
      <MovieList title={"Popular"} movies={movies.PopularMovies} />
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.UpComingMovies} />
    </div>
  );
};

export default SecondaryContainer;
