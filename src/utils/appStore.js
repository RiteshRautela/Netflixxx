import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import moviesReducers from "./moviesSlice"
import gptReducer from "./gptSlice"
import configReducer from './configSlice'
import TvReducer from "./TvSlice"
const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducers,
        gpt:gptReducer,
        config:configReducer,
        tv:TvReducer,
    }
})

export default appStore;