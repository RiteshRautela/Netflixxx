import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        NowPlayingMovies :null,
        trailerVideo:null,
        PopularMovies:null,
        UpComingMovies:null,
        TopRatedMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{state.NowPlayingMovies = action.payload},
        addTrailerVideo: (state,action)=>{state.trailerVideo = action.payload},
        addPopularMovies: (state,action)=>{state.PopularMovies = action.payload},
        addUpComingMovies: (state,action)=>{state.UpComingMovies = action.payload},
        addTopRatedMovies: (state,action)=>{state.TopRatedMovies = action.payload},
    
    }

})
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies , addUpComingMovies ,  addTopRatedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;