import React, { useState } from "react";

import { cars } from "../utils/helper";

const DrivePage = () => {
  const [selectedImage, setSelectedImage] = useState(cars[0].image);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [active, setActive] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleButton = (image) => {
    setActive(false);
    setSelectedImage(image);
  };

  return (
    <div className={`flex flex-col px-8 h-screen py-36 lg:px-44 &{l} `}>
      <h1 className="text-black text-3xl font-medium md:text-5xl">
        Schedule a Demo Drive
      </h1>
      <p className="mt-3 text-gray-500">
        Demo Drive a Tesla at a store near you. Drivers must have a valid U.S.
        driver's license and be 18 years of age or older.
      </p>
      <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-20 md:mt-10 ">
        <div>
          <img className="lg:w-[80%] lg:ml-28" src={selectedImage} alt="car" />
        </div>
        <div className="flex items-center justify-evenly md:flex-col ">
          {cars.map((car) => (
            <button
              key={car.id}
              className={`border-2 border-gray-400 px-4 py-2 md:px-8  rounded-md md:whitespace-nowrap text-gray-700 font-medium focus:border-blue-600 focus:border-2 ${
                car.id === 1 && active ? "border-blue-500 border-4" : ""
              } focus:border-blue-500 focus:border-4`}
              onClick={() => handleButton(car.image)}
            >
              {car.modelName}
            </button>
          ))}
        </div>
      </div>

      <div className=" mt-20 md:px-20 lg:px-60">
        <h2 className="text-black text-3xl md:text-4xl font-medium ">
          Contact Information:
        </h2>
        <form
          className="bg-white rounded  pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 md:text-2xl">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 md:px-4 md:py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 md:text-2xl">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:px-4 md:py-3"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2 md:text-2xl ">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DrivePage;
