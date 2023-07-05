import React from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { products } from "../utils/helper.js";

const Products = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap gap-5">
      {products.map((item) => (
        <div key={item.id} className="relative w-80 h-[480px] p-4 border-white border-[1px] rounded-md  text-center text-white">
          <div className="w-72 h-48">
            <img
              className="w-full h-full object-center rounded-md transition-transform hover:scale-105 cursor-pointer"
              src={item.image}
              alt="car image"
            />
          </div>
          <span className="font-medium text-xl mt-4 block mb-3">{item.title}</span>
          <p>{item.description}</p>
          <span className="absolute top-70 left-1/2 transform -translate-x-1/2 bottom-24 mt-4  block text-lg font-medium">
            ${item.price}
          </span>
          <button
            className="absolute top-70 left-1/2 transform -translate-x-1/2 bottom-5 border-white border-2 bg-black px-4 py-3 rounded-lg hover:bg-white hover:text-black transition-colors ease-linear delay-150"
            type="button"
            onClick={() => dispatch(addItem(item))}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
