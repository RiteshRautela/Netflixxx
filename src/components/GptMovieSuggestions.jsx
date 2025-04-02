import React from 'react'
import {  useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptMovieSuggestions = () => {
  const {movieResults , movieNames} = useSelector((store)=>store.gpt)
  if(!movieNames) return null;

  return (
    <div className=' bg-opacity-70 p-4 m-4 bg-purple/90 text-white  '>
      <div>
        {/* // todo resuing the  <MovieList/> component here for each moviename and index, the <MovieList/> will be shown  */}
        {movieNames.map((movieName , index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]} /> )}
        {/* <MovieList title={movieNames[0] } movies={movieResults[0]} /> */}
      </div>
    </div>
  )
}

export default GptMovieSuggestions
