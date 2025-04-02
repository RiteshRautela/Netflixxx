import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import { addPopular } from "../../utils/TvSlice";
import { useEffect } from "react";

const usePopularTv = () => {
  const dispatch = useDispatch();
  const popularTv = useSelector((store) => store.tv?.Popular);

  console.log("usePopularTv: popularTv initial state:", popularTv);

  const getPopularTv = async () => {
    try {
      console.log("Fetching Popular TV Shows...");
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log("Dispatching addPopularTv with:", json.results);
      dispatch(addPopular(json.results));
    } catch (error) {
      console.error("Error fetching Popular TV:", error);
    }
  };

  useEffect(() => {
    console.log("useEffect running, popularTv:", popularTv);
    if (!popularTv) {
      getPopularTv();
    }
  }, [popularTv]);
};

export default usePopularTv;
