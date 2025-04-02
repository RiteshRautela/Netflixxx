import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import { addOnTheAir } from "../../utils/TvSlice";
import { useEffect } from "react";

const useOnTheAirTv = () => {
  const dispatch = useDispatch();
  const onTheAir = useSelector((store) => store.tv?.OnTheAir);

  console.log("useOnTheAirTv: onTheAir initial state:", onTheAir);

  const getOnTheAirTv = async () => {
    try {
      console.log("Fetching On The Air TV Shows...");
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log("Dispatching addOnTheAir with:", json.results);
      dispatch(addOnTheAir(json.results));
    } catch (error) {
      console.error("Error fetching On The Air TV:", error);
    }
  };

  useEffect(() => {
    console.log("useEffect running, onTheAir:", onTheAir);
    if (!onTheAir) {
      getOnTheAirTv();
    }
  }, [onTheAir]);
};

export default useOnTheAirTv;
