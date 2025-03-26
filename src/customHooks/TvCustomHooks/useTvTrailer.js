// useTvTrailer.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constant"; 
import { addTvTrailerVideo } from "../../utils/TvSlice";

const useTvTrailer = (tvId) => {
  const dispatch = useDispatch();
  // Fetch the trailer video from the Redux store
  const trailerVideo = useSelector((store) => store.tv.trailerVideo);

  const getTvVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/tv/${tvId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      // Filter for videos with type "Trailer"
      const filterData = json.results.filter((video) => video.type === "Trailer");

      // Prioritize official trailers
      const officialTrailer = filterData.find((trailer) => trailer.official === true);
      // If an official trailer exists, use it; otherwise, use the first trailer or first video
      const trailer = officialTrailer || (filterData.length ? filterData[0] : json.results[0]);

      console.log("Selected TV Trailer:", trailer);
      dispatch(addTvTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching TV trailer:", error);
    }
  };

  useEffect(() => {
    if (!trailerVideo) {
      getTvVideos();
    }
  }, [trailerVideo]); // Add trailerVideo to dependencies
};

export default useTvTrailer;