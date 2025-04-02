import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import {  addTopRatedtv } from "../../utils/TvSlice";
import { useEffect } from "react";

const useTopRatedTv = () => {
  const dispatch = useDispatch();
  const topRatedTv = useSelector((store) => store.tv?.TopRatedTv);

  console.log("useTopRatedTv: topRatedTv initial state:", topRatedTv);

  const getTopRatedTv = async () => {
    try {
      console.log("Fetching Top Rated TV Shows...");
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log("Dispatching addTopRatedTv with:", json.results);
      dispatch( addTopRatedtv(json.results));
    } catch (error) {
      console.error("Error fetching Top Rated TV:", error);
    }
  };

  useEffect(() => {
    console.log("useEffect running, topRatedTv:", topRatedTv);
    if (!topRatedTv) {
      getTopRatedTv();
    }
  }, [topRatedTv]);
};

export default useTopRatedTv;
