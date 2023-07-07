import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const cartItems = useSelector((store) => store.cart.items);

  function getSubTotal() {
    const subTotal = cartItems.reduce((total, item) => {
      const itemSubTotal = item.price * item.quantity;
      return total + itemSubTotal;
    }, 0);

    return subTotal / 100;
  }

  return (
    <div className="lg:shadow-2xl mb-28 md:p-8 rounded-lg mt-16 md:mt-8 lg:sticky lg:top-28 right-26 lg:w-80 lg:h-[280px]">
      <h2 className="text-2xl font-medium">Order Summary</h2>
      <div className="flex items-center justify-between mt-2">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span>Sales Tax</span>
        <span>Calculate at checkout</span>
      </div>
      <div className="flex items-center justify-between mt-3">
        <span className="text-xl font-medium">Subtotal</span>
        <span className="text-xl font-medium">{getSubTotal()}</span>
      </div>
      <div className="bg-white fixed lg:static bottom-0 left-0 w-full p-2 md:px-28 md:py-4 lg:px-0 lg:py-0">
        <Link to="/thankyou">
          <button className="flex items-center justify-center w-full mt-7 bg-green-500 hover:bg-green-600 transition-colors duration-300 py-2 rounded-md text-white text-lg">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
