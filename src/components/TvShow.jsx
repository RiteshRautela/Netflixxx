import React from 'react'
import Header from './Header'
import useAiringToday from "../customHooks/TvCustomHooks/useAiringToday"
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import useOnTheAirTv from '../customHooks/TvCustomHooks/useOnTheAir';
import usePopularTv from '../customHooks/TvCustomHooks/usePopularTv';
import useTopRatedTv from '../customHooks/TvCustomHooks/useTopRatedTv';
import GptSearch from "./GptSearch"
import { useLocation } from 'react-router-dom';
function TvShow() {
    useAiringToday()
    useOnTheAirTv();
    usePopularTv();
    useTopRatedTv();
    const location = useLocation();
    console.log("location", location)
    //? Getting GPT search visibility state from Redux store
    const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
    const tv  = useSelector((store)=>store.tv)

    return (
        <div className=' bg-gradient-to-b from-black to-transparent'>
             <Header />

            {/* Conditional Rendering: If GPT search is enabled((true), show GPT search UI; otherwise, show movie sections */}
            {
                showGptSearch ? (
                    <GptSearch />
                ) : (
                    <>  
                    <MovieList  title={"AiringToday"} movies={tv.AiringToday}/>
                    <MovieList  title={"OnTheAir"} movies={tv.OnTheAir}/>
                    <MovieList  title={"Popular"} movies={tv.Popular}/>
                    <MovieList  title={"TopRatedTv"} movies={tv.TopRatedTv}/>
                    </>
                )
            }

        </div>
    )
}

export default TvShow
