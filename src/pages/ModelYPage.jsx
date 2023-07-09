import React from "react";

import VideoBackground from "../components/VideoBackground";
import { MAIN_HERO_MODEL_Y } from "../utils/constant";
import modelsImage from "../assets/model-3.avif";
import modelY from "../assets/Model-Y.avif";
import Img from "../components/Img";

const features = [
  { title: "70 cu ft.", description: "Cargo Space" },
  { title: "330 mi", description: "Range (EPA est.)" },
  { title: "$40,240†", description: "After Tax Credit" },
];

const ModelYPage = () => {
  return (
    <div className="bg-white">
      <VideoBackground
        videoSource={MAIN_HERO_MODEL_Y}
        title="Model Y"
        description="Explore Inventory"
        features={features}
      />

      <div className="md:px-4 w-full md:h-[600px] ">
        <Img
          className="w-full h-full object-cover "
          src={modelsImage}
          alt="car image"
        />
      </div>
      <div className="px-4 md:px-4 mt-8 lg:p-32">
        <h1 className="text-black text-3xl font-medium">Safety First Design</h1>
        <p className="mt-8 text-lg">
          Safety is the most important part of every Tesla. We design our
          vehicles to
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

      <div className="w-full h-[600px] relative">
        <Img
          className="w-full h-full object-cover md:object-center"
          src={modelY}
          alt="map-image"
        />
      </div>

      <div className="absolute px-4 md:px-7 mt-8 flex flex-col pb-8  md:pb-16 lg:px-32 lg:py-8 lg:flex-row lg:gap-8 lg:pb-20">
        <div className="flex flex-col lg:flex-1">
          <span className=" text-black text-3xl font-medium mb-3">
            A Place For Everything
          </span>
          <button
            type="button"
            className="rounded-md border-2 bg-white  border-black px-20 lg:px-13 py-2 font-semibold text-black text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-black hover:text-white transition-colors duration-200 ease-in-out mt-4 hidden md:block lg:inline-block md:w-[300px]"
          >
            Order Now
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
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ModelYPage;
