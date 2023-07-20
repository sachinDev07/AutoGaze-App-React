import React, { useEffect, useRef } from "react";

import VideoBackground from "../components/VideoBackground";
import {
  IMAGE_MODEL_S,
  MAIN_HERO_MODEL_S,
  MODEL_S_IMAGE_SOURCE,
  MODEL_S_VIDEO_SOURCE,
  MODEL_S_VIDEO_SOURCE2,
} from "../utils/constant";
import Img from "../components/Img";

const features = [
  { title: "396mi", description: "Range (EPA est.)" },
  { title: "1.99s", description: "0-60 mph*" },
  { title: "200 mph", description: "Top Speed" },
  { title: "1020 hp", description: "Peak Power" },
];

const ModelSPage = () => {
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
    <div className="bg-black">
      <VideoBackground
        videoSource={MAIN_HERO_MODEL_S}
        title="Model S"
        description="Explore Inventory"
        features={features}
      />
      <div className="relative bg-black mb-16">
        <h1 className="absolute left-1/2 transform -translate-x-1/2 top-[15%] text-xl  md:text-2xl text-white flex-nowrap font-bold ">
          Interior of the Future
        </h1>
        <img
          className="md:object-cover w-screen h-screen"
          src={IMAGE_MODEL_S}
          alt="Model S"
        />
      </div>

      <video
        ref={videoRef}
        playsInline
        className="w-full md:object-cover pb-20 md:pb-20 md:px-8 lg:p-32"
      >
        <source src={MODEL_S_VIDEO_SOURCE} />
      </video>

      <div className="md:flex md:items-center md:justify-center md:pb-12 lg:p-32">
        <div className="grid grid-cols-1 grid-rows-4 pb-4 md:p-4 md:grid-cols-2 md:grid-rows-2 md:gap-6 lg:gap-8">
          <div className="col-start-1 col-end-2">
            <img
              className="w-full h-full"
              src={MODEL_S_IMAGE_SOURCE}
              alt="image"
            />
          </div>
          <div className="p-8 md:px-0 md:col-start-2 md:col-end-3 flex flex-col justify-center">
            <span className="text-white mb-2 block font-medium">Stay Connected</span>
            <p className="text-gray-300">
              Instantly connect with multi-device Bluetooth, or fast charge
              devices with wireless and 36-watt USB-C charging.
            </p>
          </div>
          <div className="p-8 md:px-0 flex flex-col justify-center">
            <span className="text-white mb-2 block font-medium">Immersive Sound</span>
            <p className="text-gray-300">
              A 22-speaker, 960-watt audio system with Active Road Noise
              Reduction offers immersive listening and studio-grade sound
              quality.
            </p>
          </div>
          <div className="row-start-3 md:col-start-2 md:row-start-2">
            <video className="" ref={videoRef} playsInline>
              <source src={MODEL_S_VIDEO_SOURCE2} />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSPage;
