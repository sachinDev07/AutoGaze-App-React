import React from "react";

const ImageBackground = ({
  backgroundImage,
  title,
  price,
  description,
  features
}) => {
  return (
    <div className={`relative z-0`}>
      <img
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

      <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 flex text-white  gap-16 text-center">
        {features.length &&
          features.map((item) => (
            <div key={item.title} className="flex flex-col">
              <span className="text-3xl font-medium">{item.title}</span>
              <span className="text-sm font-normal mt-2">
                {item.description}
              </span>
            </div>
          ))}
      </div>

      <div className="absolute inset-0 flex flex-col items-center top-[80%] md:top-[75%] lg:top-[80%] text-white text-xl md:text-3xl font-medium">
        <div className="mt-6 text-center md:mt-6">
          <button
            type="button"
            className="rounded-md border-2 bg-white  border-white px-20 md:px-12 lg:px-20 py-2 font-semibold text-black text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-white hover:text-black transition delay-200 ease-in-out mt-4 lg:mr-5"
          >
            Explore Inventory
          </button>
          <button
            type="button"
            className="rounded-md border-2 border-black bg-black  px-20 md:px-12 lg:px-20 py-2 font-semibold text-white text-base shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-white hover:text-black transition delay-200 ease-in-out hover:border-black mt-4"
          >
            Custom Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageBackground;
