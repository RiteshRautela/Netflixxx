import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import styles

const MovieSliderShimmer = ({ dimention }) => {
  const categories = [
    "Now Playing",
    "Popular",
    "Top Rated",
    "Upcoming",
    "Trending",
    "Action",
    "Comedy",
  ]; // 7 sections

  return (
    <div className="movies-shimmer bg-black py-8 -pt-90 px-10">
      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          {/* Section Title */}
          <Skeleton
            height={32}
            width={192}
            className="mb-3"
            baseColor="#1a1a1a"
            highlightColor="#2a2a2a"
          />

          {/* Movie Cards Row */}
          <div className="flex gap-4 overflow-hidden">
            {Array(10)
              .fill(0)
              .map((_, idx) => (
                <Skeleton
                  key={idx}
                  className={`slider-shimmer ${dimention}`}
                  height={200}
                  width={250}
                  borderRadius={8}
                  baseColor="#1a1a1a"
                  highlightColor="#2a2a2a"
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieSliderShimmer;
