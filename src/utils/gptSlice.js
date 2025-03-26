import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false, // GPT search visibility
    movieResults: null,   // TMDB movie data
    movieNames: null,     // GPT movie name list (renamed for clarity)
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; // Toggle visibility
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload; // Destructure payload
      state.movieNames = movieNames;   // Assign GPT movie names
      state.movieResults = movieResults; // Assign TMDB results
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;