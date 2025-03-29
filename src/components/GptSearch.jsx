import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <>
      {/* No background for search bar */}
      <div className="w-screen min-h-screen bg-gradient-to-b from-purple-700 to-black" >
        <GptSearchBar />
     

      
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
