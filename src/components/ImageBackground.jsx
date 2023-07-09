import React from "react";
import { Link } from "react-router-dom";
import Img from "./Img";

const ImageBackground = ({
  backgroundImage,
  title,
  price,
  description,
  features,
}) => {
  return (
    <div className={`relative z-0`}>
      <Img
        className="h-screen object-cover w-full"
        src={backgroundImage}
        alt="Model-3 image"
      />
      <div className="absolute inset-0 flex flex-col items-center top-[20%]">
        <h1 className="text-black font-medium text-4xl md:text-5xl">{title}</h1>
        <div className="flex flex-col items-center">
          <span className="text-black text-base font-medium inline-block mt-1 md:mt-3">
            {price}
          </span>
          <span className="text-black text-base font-medium inline-block  ">
            {description}
          </span>
        </div>
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

      <div className="absolute inset-0 flex flex-col items-center top-[80%] md:top-[75%] lg:top-[80%] text-white text-xl md:text-3xl font-medium">
        <div className="flex md:gap-4 flex-col md:flex-row  text-center md:mt-6">
          <Link to="/drive">
            <button
              type="button"
              className="rounded-md bg-white px-12 md:px-12 lg:px-20 py-2 font-semibold text-black text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black delay-200 ease-in-out mt-4 lg:mr-5 hover:bg-black hover:text-white transition-colors duration-300"
            >
              Explore Inventory
            </button>
          </Link>
          <Link to="/shop">
            <button
              type="button"
              className="rounded-md bg-black px-16  md:px-12 lg:px-20 py-2 font-semibold text-white text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-white hover:text-black ease-in-out mt-4 transition-colors duration-300"
            >
              Custom Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageBackground;
