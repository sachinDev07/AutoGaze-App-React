import React, { useEffect, useRef } from "react";

import {
  IMAGE_MODEL_S,
  MAIN_HERO_MODEL_X,
  MODEL_S_VIDEO_SOURCE,
} from "../utils/constant";
import ImageBackground from "../components/ImageBackground";
import ModelX_img from "../assets/MX-Interior.avif";
import ModelX_img2 from "../assets/MX-Interior2.avif";
import Img from "../components/Img";

const features = [
  { title: "333mi", description: "Range (EPA est.)" },
  { title: "2.5s", description: "0-60 mph*" },
  { title: "9.9s", description: "1/4 mile" },
  { title: "1020 hp", description: "Peak Power" },
];

const ModelXPage = () => {
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
      <ImageBackground
        backgroundImage={MAIN_HERO_MODEL_X}
        title="Model X"
        description="Explore Inventory"
        features={features}
      />

      <div className="relative bg-black mb-16">
        <h1 className="absolute left-1/2 transform -translate-x-1/2 top-[15%] text-xl md:text-2xl text-white flex-nowrap font-bold ">
          Interior of the Future
        </h1>
        <Img
          className="object-cover w-screen h-screen"
          src={IMAGE_MODEL_S}
          alt="Model S"
        />
      </div>

      <video
        ref={videoRef}
        playsInline
        className="w-full md:object-cover pb-20 md:pb-20 md:px-28 lg:p-32 lg:py-16 "
      >
        <source src={MODEL_S_VIDEO_SOURCE} />
      </video>

      <div className="md:flex md:items-center md:justify-center md:pb-12 lg:p-32">
        <div className="grid grid-cols-1 grid-rows-4 pb-4 md:p-4 md:grid-cols-2 md:grid-rows-2 md:gap-6 lg:gap-8">
          <div className="col-start-1 col-end-1">
            <img className="w-full h-full" src={ModelX_img} alt="image" />
          </div>
          <div className="p-8 md:px-0 md:col-start-2 md:col-end-3 flex flex-col justify-center">
            <span className="text-white mb-2 block font-medium">
              Stay Connected
            </span>
            <p className="text-gray-300">
              Instantly connect with multi-device Bluetooth, or fast charge
              devices with wireless and 36-watt USB-C charging.
            </p>
          </div>
          <div className="p-8 md:px-0 flex flex-col justify-center">
            <span className="text-white">Immersive Sound</span>
            <p className="text-gray-300">
              A 22-speaker, 960-watt audio system with Active Road Noise
              Reduction offers immersive listening and studio-grade sound
              quality.
            </p>
          </div>
          <div className="row-start-3 md:col-start-2 md:row-start-2">
              <Img className="w-full h-full" src={ModelX_img2} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ModelXPage;
