// import { createSlice } from "@reduxjs/toolkit";

// const mediaSlice = createSlice({
//   name: "media",
//   initialState: {
//     selectedMediaId: null,
//     selectedMediaType: null,
//     trailers: {}, // Store trailers as { "movie_123": trailer, "tv_456": trailer }
//   },
//   reducers: {
//     setMedia: (state, action) => {
//       state.selectedMediaId = action.payload.id;
//       state.selectedMediaType = action.payload.type;
//     },
//     addTrailer: (state, action) => {
//       const { mediaType, mediaId, trailer } = action.payload;
//       const key = `${mediaType}_${mediaId}`;
//       state.trailers[key] = trailer;
//     },
//     resetTrailers: (state) => {
//       state.trailers = {};
//     },
//   },
// });

// export const { setMedia, addTrailer, resetTrailers } = mediaSlice.actions;
// export default mediaSlice.reducer;