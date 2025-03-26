// GptSearchBar.jsx
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstans";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      return json.results || [];
    } catch (error) {
      console.error(`Error fetching TMDB for ${movie}:`, error);
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    const userQuery = searchText.current.value;
    if (!userQuery) return;

    dispatch(addGptMovieResults({ movieNames: null, movieResults: null }));
    console.log("Dispatched reset action");

    try {
      const gptQuery = `Act as a Movie Recommendation System and Suggest Some Movies For The Query: ${userQuery}. Only give me the names of 7 movies, comma-separated like: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya, Harry Potter, Fifty Shades of Grey`;

      const gptResponse = await openai([{ role: "user", content: gptQuery }]);
      if (!gptResponse) {
        console.log("No results from GPT");
        dispatch(addGptMovieResults({ movieNames: [], movieResults: [] }));
        return;
      }

      const movies = gptResponse.split(",").map((movie) => movie.trim());
      console.log("Movies from GPT:", movies);

      const promiseArray = movies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      console.log("tmdbResults before dispatch:", tmdbResults);

      dispatch(addGptMovieResults({ movieNames: movies, movieResults: tmdbResults }));
      console.log("Dispatched results:", { movieNames: movies, movieResults: tmdbResults });
    } catch (error) {
      console.error("Error during GPT search:", error);
      dispatch(addGptMovieResults({ movieNames: [], movieResults: [] }));
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-9"
          placeholder={lang[langkey]?.gptSearchPlaceHolder || "Search for movies"}
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg cursor-pointer hover:bg-red-600"
          onClick={handleGptSearchClick}
        >
          {lang[langkey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;