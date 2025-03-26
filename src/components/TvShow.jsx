import React from 'react'
import Header from './Header'
import useAiringToday from "../customHooks/TvCustomHooks/useAiringToday"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useSelector } from 'react-redux';
function TvShow() {
    useAiringToday()
    //? Getting GPT search visibility state from Redux store
    const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

    return (
        <div>
             <Header />

            {/* Conditional Rendering: If GPT search is enabled((true), show GPT search UI; otherwise, show movie sections */}
            {
                showGptSearch ? (
                    <GptSearch />
                ) : (
                    <>  {/* <-- React Fragment to group multiple elements */}
                        <MainContainer />  {/* Main Movie Display Section */}
                        <SecondaryContainer />  {/* Additional Movie Sections */}
                    </>
                )
            }

        </div>
    )
}

export default TvShow
