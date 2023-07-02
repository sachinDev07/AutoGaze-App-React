import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const VideoBackground = ({ videoSource, title, description }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.muted = true;
    video.loop = true;
    video.play().catch((error) => {
      // Autoplay was blocked, handle the error
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
        <h1 className="text-white font-medium text-4xl md:text-5xl">
          {title}
        </h1>
        <Link>
          <span className="text-white text-sm font-medium border-b-2 inline-block mt-1 md:mt-3">
            {description}
          </span>
        </Link>
      </div>

      <div className="absolute inset-0 flex flex-col items-center top-[80%] md:top-[75%] lg:top-[80%] text-white text-xl md:text-3xl font-medium">
        <div className="mt-6 text-center md:mt-6">
          <button
            type="button"
            className="rounded-md border-2 bg-transparent  border-white px-20 md:px-12 lg:px-20 py-2 font-semibold text-white text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-white hover:text-black transition delay-200 ease-in-out mt-4"
          >
            Demo Drive
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
