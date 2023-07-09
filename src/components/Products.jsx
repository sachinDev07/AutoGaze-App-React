import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { products } from "../utils/helper.js";
import Img from "./Img";

const Products = () => {
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (item) => {
    setSelectedProduct(item);
    setTimeout(() => {
      setSelectedProduct(null);
    }, 2000); // Hide the toast after 2 seconds
    dispatch(addItem(item));

  };

  return (
    <div className="flex flex-wrap gap-5 md:justify-between lg:justify-between  lg:gap-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="relative w-80 h-[480px] lg:w-72 lg:mb-8 p-4 border-white border-[1px] rounded-md  text-center text-white"
        >
          <div className="w-72 lg:w-64 h-48">
            <Img
              className="w-full h-full object-center rounded-md transition-transform hover:scale-105 cursor-pointer"
              src={item.image}
              alt="car image"
            />
          </div>
          <span className="font-medium text-xl mt-4 block mb-3">
            {item.title}
          </span>
          <p>{item.description}</p>
          <span className="absolute top-70 left-1/2 transform -translate-x-1/2 bottom-24 mt-4  block text-lg font-medium">
            ${item.price}
          </span>
          <button
            className="absolute top-70 left-1/2 transform -translate-x-1/2 bottom-5 border-white border-2 bg-black px-4 py-3 rounded-lg hover:bg-white hover:text-black transition-colors ease-linear delay-150"
            type="button"
            onClick={() => handleAddToCart(item)}
          >
            Add To Cart
          </button>
          {selectedProduct && selectedProduct.id === item.id && (
            <div className="bg-green-500 text-white text-center py-2 mt-4 rounded absolute left-2 right-2 top-[340px] transition-opacity duration-300">
              {selectedProduct.title} added to cart!
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
