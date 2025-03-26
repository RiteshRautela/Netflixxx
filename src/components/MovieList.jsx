import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='p-6'>
            <h1 className='text-lg md:text-4xl py-6 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll  '>
                <div className='flex '>
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path}  movieId={movie.id} />
                        
                    ))}
                    {/* <MovieCard posterPath={movies[0].poster_path}/> */}
                </div>
            </div>
        </div>
    )
}

export default MovieList
