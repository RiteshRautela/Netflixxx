import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useUpComingMovies = () => {
  //? Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo)

  const getUpComingMovies = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    console.log("popular movies ", json.results);
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    if(!trailerVideo){
      getUpComingMovies()
    }
  }, []);
};

export default useUpComingMovies;
