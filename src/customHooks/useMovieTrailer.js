import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    if (!movieId) return;

    // ✅ Reset trailer only if a new movie is selected
    dispatch(addTrailerVideo(null));

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await response.json();

      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0] || null;

      console.log("Fetched Trailer:", trailer);
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching trailer:", error);
      dispatch(addTrailerVideo(null)); // Reset if error occurs
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]); // ✅ Runs every time a new movieId is selected
};

export default useMovieTrailer;
