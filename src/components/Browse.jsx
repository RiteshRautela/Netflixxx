import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useUpComingMovies from '../customHooks/useUpComingMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import Footer from './Footer';

const Browse = () => {
  // Fetching movies and storing them in Redux
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  useTopRatedMovies();

  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  return (
    <div >
      {/* Header Component - Displays logo, user profile, and navigation */}
      <Header />

      {/* Conditional Rendering: Show GPT search UI or Movie Sections */}
      {showGptSearch ? ( 
        <GptSearch /> 
      ) : (
        <>
          <div > {/* Ensure enough space for Header */}
            <MainContainer />
            <SecondaryContainer />
          </div>
          <Footer />
        </>
      )}
    </div>
  )
}

export default Browse;
