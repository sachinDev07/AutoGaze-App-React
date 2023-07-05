import React, { useEffect, useRef } from "react";

import { IMAGE_MODEL_S, MAIN_HERO_MODEL_X, MODEL_S_VIDEO_SOURCE } from "../utils/constant";
import ImageBackground from "../components/ImageBackground";
import ModelX_img from "../assets/MX-Interior.avif";
import ModelX_img2 from "../assets/MX-Interior2.avif";


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
        <h1 className="absolute left-1/2 transform -translate-x-1/2 top-[15%]  text-2xl text-white flex-nowrap font-bold ">
          Interior of the Future
        </h1>
        <img
          className="object-cover w-screen h-screen"
          src={IMAGE_MODEL_S}
          alt="Model S"
        />
      </div>

      <video
        ref={videoRef}
        playsInline
        className="w-full h-screen object-cover px-28 py-24"
      >
        <source src={MODEL_S_VIDEO_SOURCE} />
      </video>

      <div className=" flex items-center justify-center pb-16">
        <div className="grid place-content-center h-[560px] w-[1000px] grid-cols-2 grid-rows-2">
          <div className="w-[500px] h-[280px]">
            <img className="w-full h-full" src={ModelX_img} alt="" />
          </div>
          <div className="w-[500px] h-[280px] flex flex-col gap-4 font-medium justify-center pl-16">
            <span className="text-white">Stay Connected</span>
            <p className="text-white w-[390px]">
              Instantly connect with multi-device Bluetooth, or fast charge
              devices with wireless and 36-watt USB-C charging.
            </p>
          </div>
          <div className="w-[500px] h-[280px] flex flex-col gap-4 font-medium justify-center pl-16">
            <span className="text-white">Immersive Sound</span>
            <p className="text-white w-[390px]">
              A 22-speaker, 960-watt audio system with Active Road Noise
              Reduction offers immersive listening and studio-grade sound
              quality.
            </p>
          </div>
          <div className="w-[500px] h-[280px]">
            <img className="w-full h-full" src={ModelX_img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelXPage;
