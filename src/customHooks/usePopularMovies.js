import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  //? Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies)

  const getPopularMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    console.log("popular movies ", json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if (!popularMovies) {
       getPopularMovies();
    }
 }, [popularMovies]); // ✅ Add dependency
 
};

export default usePopularMovies;
