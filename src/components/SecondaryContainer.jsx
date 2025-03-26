import React from 'react';
import MovieList from './MovieList';
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  // if (!movies || !movies.NowPlayingMovies) {
  //   return <div>Loading...</div>; // Show a loading state instead of crashing
  // }

  return movies.NowPlayingMovies && (
    <div className='bg-black'>
    <div className='relative mt-0 md:-mt-52 z-20 pl-4 md:pl-12'>
    <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
    </div>
      <MovieList title={"Popular"} movies={movies.PopularMovies} />
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies. UpComingMovies} />
  
    </div>
  );
}

export default SecondaryContainer;
