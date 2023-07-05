import React from "react";
import Products from "../components/Products";

const ShopPage = () => {
  return (
    <div className="bg-black py-28 px-20 flex flex-col items-center">
    <h1 className="text-white text-center mb-12 text-3xl font-bold  border-b-2 border-white w-44">Products</h1>
     <Products />
    </div>
  );
};

export default ShopPage;
