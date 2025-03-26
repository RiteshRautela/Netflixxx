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
  //? Fetching Now Playing movies and storing in Redux
  useNowPlayingMovies();

  //? Fetching Popular movies and storing in Redux
  usePopularMovies();

  //? Fetching Upcoming movies and storing in Redux
  useUpComingMovies();

  //? Fetching Top Rated movies and storing in Redux
  useTopRatedMovies();

  //? Getting GPT search visibility state from Redux store
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);



  return (
    <div>
      {/* Header Component - Displays logo, user profile, and navigation */}
      <Header />

      {/* Conditional Rendering: If GPT search is enabled((true), show GPT search UI; otherwise, show movie sections */}
      {
        showGptSearch ? ( 
          <GptSearch /> 
        ) : (
          <>  {/* <-- React Fragment to group multiple elements */}
            <MainContainer />  {/* Main Movie Display Section */}
            <SecondaryContainer />  {/* Additional Movie Sections */}
            <Footer/>
          </>    
        )
      }


      {/* 
        📌 Component Breakdown:

        1️⃣ MainContainer
          - Displays movie background with trailers
          - Shows featured movie list

        2️⃣ SecondaryContainer
          - Contains multiple movie lists (Popular, Top-Rated, Upcoming, etc.)
          - Renders multiple MovieCards inside each list
      */}
      
      
    </div>
  )
}

export default Browse
