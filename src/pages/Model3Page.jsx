import React from "react";

import VideoBackground from "../components/VideoBackground";
import { MAIN_HERO_MODEL_3 } from "../utils/constant";
import modelsImage from "../assets/model-3.avif";
import modelsRange from "../assets/Model-3-Range-NA.avif";

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

      <div className="px-44 w-full h-[600px] ">
        <img className="w-full h-full object-cover " src={modelsImage} alt="" />
      </div>
      <div className="px-44 mt-8">
        <h1 className="text-black text-3xl font-medium">Safety First Design</h1>
        <p className="mt-8 text-lg">
          Safety is the most important part of every Tesla. We design our
          vehicles to{" "}
          <span className="border-b-2 border-black">
            exceed safety standards.
          </span>
        </p>
        <div className="mt-8 flex gap-4 items-center justify-between pb-28">
          <div>
            <span className="text-black font-medium">5-Star Rating</span>
            <p className="w-[510px]">
              Model 3 achieved NHTSA 5-star safety ratings in every category and
              subcategory.
            </p>
          </div>
          <div className="">
            <span className="text-black font-medium">Top Safety Pick+</span>
            <p className="w-[510px]">
              Model 3 received the IIHS Top Safety Pick+ award, with top ratings
              in all crashworthiness and front crash prevention categories.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[600px] relative">
        <img className="w-full h-full" src={modelsRange} alt="map-image" />
        <div className="absolute top-0 left-16 flex flex-col justify-center h-full gap-28">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-3xl">333 mi</span>
            <span className="font-medium text-sm">Range (EPA est.)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-medium text-3xl">15 min</span>
            <span className="font-medium text-sm">
              Recharge up to 147 mi of range
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-medium text-3xl">45,000 +</span>
            <span className="font-medium text-sm">Global SuperCharges</span>
          </div>
        </div>
      </div>

      <div className="px-44 mt-8 flex items-center justify-between gap-80 pb-16">
        <div className="w-[800px] ">
          <span className="text-black text-3xl font-medium mb-2">Go Anywhere</span>
          <button
            type="button"
            className="rounded-md border-2 bg-white  border-black px-20 md:px-12 lg:px-13 py-2 font-semibold text-black text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black hover:text-white transition delay-200 ease-in-out mt-4 "
          >
            Plan my trip
          </button>
        </div>
        <div>
          Model 3 is fully electric with 333 miles of estimated range, so you
          never need to visit a gas station again. You can charge at home
          anytime, or plug in on the road with access to over 45,000
          Superchargers worldwide. <span className="border-b-2 border-black">Chat with a Tesla Advisor</span> to
          learn more about Model 3 or <span className="border-b-2 border-black">schedule a demo drive</span> today.
        </div>
      </div>
    </div>
  );
};

export default Model3Page;
