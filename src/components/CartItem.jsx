import React from "react";

import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="rounded-md mb-4 mt-8 md:mb-8 w-full md:mt-8">
      <div className="flex gap-4">
        <img
          className="w-36 h-36 rounded-md transition-transform hover:scale-105 cursor-pointer"
          src={item.image}
          alt="car image"
        />
        <div className="flex flex-col justify-between  w-full">
          <span className="text-xl text-[#393c41] font-bold">{item.title}</span>
          <p className="text-[#44474c] w-full">{item.description}</p>

          <div className="flex justify-between">
            <div className="flex justify-between items-center  border-[1px] border-[#44474c] w-20 rounded-md text-[#44474c">
              <button
                className="hover:bg-red-300 w-6 h-6 flex items-center justify-center"
                onClick={() => dispatch(removeItem(item))}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="hover:bg-green-300 w-6 h-6 flex items-center justify-center"
                onClick={() => dispatch(addItem(item))}
              >
                +
              </button>
            </div>
            <span className=" text-xl text-[#44474c] font-medium  md:hidden">
              ${item.price}
            </span>
          </div>
        </div>
        <span className="ml-32 md:ml-0 text-xl text-[#44474c] font-medium hidden md:block">
          ${item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
