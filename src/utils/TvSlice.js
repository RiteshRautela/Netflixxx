// TvSlice.js
import { createSlice } from "@reduxjs/toolkit";

const TvSlice = createSlice({
  name: "tv",
  initialState: {
    AiringToday: null,
    OnTheAir: null,
    Popular: null,
    TopRatedTv: null,
    trailerVideo: null,
  },
  reducers: {
    addAiringToday: (state, action) => { state.AiringToday = action.payload; },
    addOnTheAir: (state, action) => { state.OnTheAir = action.payload; },
    addPopular: (state, action) => { state.Popular = action.payload; },
    addTopRatedtv: (state, action) => { state.TopRatedTv = action.payload; },
    addTvTrailerVideo: (state, action) => { state.trailerVideo = action.payload; },
  },
});

export const { addAiringToday, addOnTheAir, addPopular, addTopRatedtv, addTvTrailerVideo } = TvSlice.actions;
export default TvSlice.reducer;