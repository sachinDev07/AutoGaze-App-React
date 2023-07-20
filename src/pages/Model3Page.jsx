import React from "react";

import VideoBackground from "../components/VideoBackground";
import { MAIN_HERO_MODEL_3 } from "../utils/constant";
import modelsImage from "../assets/model-3.avif";
import modelsRange from "../assets/Model-3-Range-NA.avif";
import Img from "../components/Img";

const features = [
  { title: "3.1s", description: "0-60 mph" },
  { title: "333 mi", description: "Range (EPA est.)" },
  { title: "$32,740†", description: "After Tax Credit" },
];

const Model3Page = () => {
  return (
    <div className="bg-white">
      <VideoBackground
        videoSource={MAIN_HERO_MODEL_3}
        title="Model 3"
        description="Demo Drive"
        features={features}
      />

      <div className="md:px-4 w-full md:h-[600px]">
        <img
          className="w-full h-full object-cover "
          src={modelsImage}
          alt="car image"
        />
      </div>
      <div className="px-4 md:px-7 mt-8 lg:p-32">
        <h1 className="text-black text-3xl font-medium">Safety First Design</h1>
        <p className="mt-8 text-lg">
          Safety is the most important part of every Tesla. We design our
          vehicles to{" "}
          <span className="border-b-2 border-black">
            exceed safety standards.
          </span>
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between pb-28 ">
          <div className="md:flex-1">
            <span className="text-black font-medium ">5-Star Rating</span>
            <p className="md:mt-1 text-gray-900">
              Model 3 achieved NHTSA 5-star safety ratings in every category and
              subcategory.
            </p>
          </div>
          <div className="flex-1">
            <span className="text-black font-medium">Top Safety Pick+</span>
            <p className="md:mt-1 text-gray-900">
              Model 3 received the IIHS Top Safety Pick+ award, with top ratings
              in all crashworthiness and front crash prevention categories.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[600px] relative lg:h-[500px]">
        <img
          className="w-full h-full object-cover md:object-center"
          src={modelsRange}
          alt="map image"
        />
        <div className="absolute px-8 top-[85%] flex justify-center w-full lg:flex-col lg:top-[0] lg:h-full lg:w-auto lg:left-8">
          <div className="flex flex-col gap-1 flex-1 items-center text-center lg:items-start lg:mt-20">
            <span className="font-medium text-[22px] md:text-3xl ">333 mi</span>
            <span className="font-medium text-[10px] md:text-sm lg:text-xs">
              Range (EPA est.)
            </span>
          </div>
          <div className="flex flex-col flex-1 gap-1 items-center text-center lg:text-start lg:items-start">
            <span className="font-medium text-[22px] md:text-3xl">15 min</span>
            <span className="font-medium text-[10px] md:text-sm lg:text-xs">
              Recharge up to 147 mi of range
            </span>
          </div>
          <div className="flex flex-col flex-1 gap-1 items-center text-center lg:items-start">
            <span className="font-medium text-[22px] md:text-3xl">
              45,000 +
            </span>
            <span className="font-medium text-[10px] md:text-sm lg:text-xs">
              Global SuperCharges
            </span>
          </div>
        </div>
      </div>

      <div className="absolute px-4 md:px-7 mt-8 flex flex-col pb-8 md:pb-16 lg:px-32 lg:py-8 lg:flex-row lg:gap-8 lg:pb-20">
        <div className="flex flex-col lg:flex-1 ">
          <span className="text-black text-3xl font-medium mb-3">
            Go Anywhere
          </span>
          <button
            type="button"
            className="rounded-md border-2 bg-white  border-black px-20 lg:px-13 py-2 font-semibold text-black text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black hover:text-white transition-colors duration-200 ease-in-out mt-4 hidden md:block lg:inline-block md:w-[300px]"
          >
            Plan my trip
          </button>
        </div>
        <div className="md:mt-4 lg:flex-1">
          Model 3 is fully electric with 333 miles of estimated range, so you
          never need to visit a gas station again. You can charge at home
          anytime, or plug in on the road with access to over 45,000
          Superchargers worldwide.
          <span className="border-b-2 border-black">
            Chat with a Tesla Advisor
          </span>
          to learn more about Model 3 or
          <span className="border-b-2 border-black">schedule a demo drive</span>
          today.
        </div>
        <button
          type="button"
          className="rounded-md border-2 bg-white  border-black px-20 md:px-12 lg:px-13 py-2 font-semibold text-black text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black hover:text-white transition-colors duration-200 ease-in-out mt-8 md:hidden"
        >
          Plan my trip
        </button>
      </div>
    </div>
  );
};

export default Model3Page;
