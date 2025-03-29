import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import styles

const ShowcaseShimmer = () => {
  return (
    <div className="showcase md:h-screen mt-[-70px] xl:h-auto xl:aspect-video bg-black">
    <div className="relative md:h-[80vh] mt-0 xl:h-auto xl:aspect-video">

        <div className="overlay h-full w-full z-10 relative">
          {/* For Desktop */}
          <div className="hidden md:flex w-full h-full items-center">
            <div className="px-4 md:px-12 w-full xl:w-1/2 pt-[0px]">
              <Skeleton height={80} width="100%" baseColor="#1a1a1a" highlightColor="#2a2a2a" />
              <Skeleton height={16} width="80%" baseColor="#1a1a1a" highlightColor="#2a2a2a" />
              <Skeleton height={16} width="70%" baseColor="#1a1a1a" highlightColor="#2a2a2a" />
              <Skeleton height={16} width="60%" baseColor="#1a1a1a" highlightColor="#2a2a2a" />
              <div className="flex gap-3 mt-4">
                <Skeleton width={150} height={48} baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                <Skeleton width={150} height={48} baseColor="#1a1a1a" highlightColor="#2a2a2a" />
              </div>
            </div>
          </div>

          {/* For Mobile */}
          <div className="md:hidden pb-8 md:pb-0 w-full h-full flex items-center">
            <div className="px-4 md:px-12 w-full">
              <div className="relative h-[415px] max-w-80 m-auto mt-[140px] rounded-lg overflow-hidden shadow-md bg-black">
                <div className="absolute bottom-0 w-full px-4 pt-20 pb-5 text-center">
                  <Skeleton height={28} width="75%" baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                  <Skeleton height={12} width="60%" baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                  <Skeleton height={12} width="50%" baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                  <div className="flex gap-3 mt-4 px-3">
                    <Skeleton width={120} height={44} baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                    <Skeleton width={120} height={44} baseColor="#1a1a1a" highlightColor="#2a2a2a" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ShowcaseShimmer;
