import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstans";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // 🔹 Loading state added

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
    setLoading(true); // 🔹 Start loading

    try {
      const gptQuery = `Act as a Movie Recommendation System and Suggest Some Movies For The Query: ${userQuery}. Only give me the names of 7 movies, comma-separated like: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya, Harry Potter, Fifty Shades of Grey`;

      const gptResponse = await openai([{ role: "user", content: gptQuery }]);
      if (!gptResponse) {
        dispatch(addGptMovieResults({ movieNames: [], movieResults: [] }));
        setLoading(false);
        return;
      }

      const movies = gptResponse.split(",").map((movie) => movie.trim());
      const promiseArray = movies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGptMovieResults({ movieNames: movies, movieResults: tmdbResults }));
    } catch (error) {
      console.error("Error during GPT search:", error);
      dispatch(addGptMovieResults({ movieNames: [], movieResults: [] }));
    } finally {
      setLoading(false); // 🔹 Stop loading after fetching data
    }
  };

  return (
    <div className="pt-[35%] md:pt-[20%] flex justify-center mx-3">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-[100%] grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-9 bg-gray-800"
          placeholder={lang[langkey]?.gptSearchPlaceHolder || "Search for movies"}
        />

        {/* Search Button with Loader */}
        <button
          className="col-span-2 py-2 px-3 m-4 bg-red-700 text-white rounded-lg cursor-pointer hover:bg-red-600 flex items-center justify-center"
          onClick={handleGptSearchClick}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <div className="flex gap-1">
              <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce"></span>
              <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          ) : (
            lang[langkey]?.search || "Search"
          )}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
