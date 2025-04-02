import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Information = () => {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies?.NowPlayingMovies || []);
  const movieDetails = movies.find((movie) => movie.id === Number(id));
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    if (!movieDetails) return;

    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=YOUR_TMDB_API_KEY`
        );
        const data = await response.json();
        const trailer = data.results.find((video) => video.type === "Trailer" && video.site === "YouTube");
        if (trailer) setVideoKey(trailer.key);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, [id, movieDetails]);

  if (!movieDetails) {
    return <div className="text-white text-center text-2xl p-10">Loading or Movie Not Found...</div>;
  }

  return (
    <div className="relative min-h-screen bg-black text-white p-8 flex flex-col items-center">
      {/* Background Video or Image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        {videoKey ? (
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&loop=1&playlist=${videoKey}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
            className="w-full h-full object-cover opacity-50"
          />
        )}
      </div>

      <h1 className="text-5xl font-extrabold text-center my-6 relative z-10">{movieDetails.title}</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl relative z-10">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="w-72 rounded-lg shadow-lg"
        />
        <div className="text-lg leading-relaxed">
          <p className="text-gray-300"><span className="font-semibold text-white">Overview:</span> {movieDetails.overview}</p>
          <p className="mt-4"><span className="font-semibold text-yellow-400">⭐ Rating:</span> {movieDetails.vote_average} / 10</p>
          <p className="mt-2"><span className="font-semibold text-blue-400">📅 Release Date:</span> {movieDetails.release_date}</p>
          <p className="mt-2"><span className="font-semibold text-green-400">🔥 Popularity:</span> {movieDetails.popularity}</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
