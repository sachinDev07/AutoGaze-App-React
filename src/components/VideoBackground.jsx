import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const VideoBackground = ({ videoSource, title, description, features }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.muted = true;
    video.loop = true;
    video.play().catch((error) => {
      console.error("Autoplay was blocked:", error);
    });
  }, []);

  return (
    <div className="">
      <video
        ref={videoRef}
        playsInline
        className="w-full h-screen object-cover "
      >
        <source src={videoSource} />
      </video>
      <div className="absolute inset-0 flex flex-col items-center top-[20%]">
        <h1 className="text-white font-medium text-4xl md:text-5xl">{title}</h1>
        <Link>
          <Link to="/drive">
            <span className="text-white text-sm font-medium border-b-2 inline-block mt-1 md:mt-3">
              {description}
            </span>
          </Link>
        </Link>
      </div>

      <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 flex text-white gap-8  md:gap-16 text-center">
        {features.length &&
          features.map((item) => (
            <div
              key={item.title}
              className="flex flex-wrap md:flex-nowrap flex-col"
            >
              <span className="text-xl md:text-3xl font-medium whitespace-nowrap">
                {item.title}
              </span>
              <span className="text-xs md:text-sm whitespace-nowrap font-normal mt-2">
                {item.description}
              </span>
            </div>
          ))}
      </div>

      <div className="absolute inset-0 flex flex-col items-center top-[77%] md:top-[75%] lg:top-[80%] text-white text-xl md:text-3xl font-medium">
        <div className="mt-5 flex flex-col md:flex-row text-center md:mt-12">
          <Link to="/drive">
            <button
              type="button"
              className="rounded-md border-2 bg-white  border-white px-20 md:px-12 lg:px-20 py-2 font-semibold text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-transparent hover:text-white transition-colors duration-200 ease-in-out mt-4 md:ml-4 md:mb-8 text-black"
            >
              Demo Drive
            </button>
          </Link>

          {features.length && (
            <Link to="/shop">
              <button
                type="button"
                className="rounded-md border-2 bg-white  border-white px-20 md:px-12 lg:px-20 py-2 font-semibold text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-transparent hover:text-white transition-colors duration-200 ease-in-out mt-4 md:ml-4 mb-8 text-black"
              >
                Order Now
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
