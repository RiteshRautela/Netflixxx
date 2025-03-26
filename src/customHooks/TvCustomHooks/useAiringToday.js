// useAiringTodayTv.js
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constant"; 
import { addAiringToday } from "../../utils/TvSlice";
import { useEffect } from "react";

const useAiringTodayTv = () => {
  const dispatch = useDispatch();
  const airingToday = useSelector((store) => store.tv?.AiringToday);

  console.log("useAiringTodayTv: airingToday initial state:", airingToday);

  const getAiringTodayTv = async () => {
    try {
      console.log("Fetching Airing Today TV...");
      const response = await fetch(
        'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log("Dispatching addAiringToday with:", json.results);
      dispatch(addAiringToday(json.results));
    } catch (error) {
      console.error("Error fetching Airing Today TV:", error);
    }
  };

  useEffect(() => {
    console.log("useEffect running, airingToday:", airingToday);
    if (!airingToday) {
      getAiringTodayTv();
    }
  }, [airingToday]);
};

export default useAiringTodayTv;