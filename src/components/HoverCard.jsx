import React from "react";
import { useNavigate } from "react-router-dom";
import { Play, Info } from 'lucide-react';
import { IMG_CDN_URL } from "../utils/constant";
// import { Play } from 'lucide-react';
// import { Info } from 'lucide-react';


const HoverCard = ({ movie }) => {
    const navigate = useNavigate();

    if (!movie) return null;

    return (
        <div className="bg-black text-white p-4 rounded-lg shadow-lg transition-opacity duration-300 opacity-100 w-64 border border-gray-700">
            {/* Movie Image */}
            <img
                src={IMG_CDN_URL + movie.poster_path} 
                alt={movie.title}
                className="rounded-lg shadow-lg w-full h-36 object-cover"
            />

            {/* Movie Title */}
            <h3 className="text-lg font-bold mt-2">{movie.title}</h3>

            {/* Movie Genre */}
            <p className="text-xs mt-1 text-gray-400">{movie.genre_names?.join(", ")}</p>

            {/* Action Buttons */}
            <div className="flex justify-between mt-3">
                <button
                    className=" text-white px-4 py-1 rounded-md flex items-center gap-2 cursor-pointer "
                    onClick={() => navigate(`/watch/${movie.id}`)}
                >
                    <Play size={16} />  
                </button>
                <button
                    className=" px-3 py-1 rounded-md flex items-center gap-2 cursor-pointer "
                    onClick={() => navigate(`/information/${movie.id}`)}
                >
                    <Info size={16} /> 
                </button>
            </div>
        </div>
    );
};

export default HoverCard;
