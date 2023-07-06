import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function getSubTotal() {
    const subTotal = cartItems.reduce((total, item) => {
      const itemSubTotal = item.price * item.quantity;
      return total + itemSubTotal;
    }, 0);

    return subTotal / 100;
  }

  return cartItems.length === 0 ? (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-black text-medium text-3xl">
        No item added to the cart !
      </h1>
      <Link to="/shop">
        <button className="p-2 mt-4 border-2 border-black text-base text-black hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
          Shop here
        </button>
      </Link>
    </div>
  ) : (
    <div className="mt-28 px-44">
      <div className=" w-[700px] flex items-center justify-between">
        <h1 className="text-3xl text-black font-bold">Cart</h1>
        <button
          className="text-lg font-medium px-2 py-1 rounded-lg text-black bg-blue-400 hover:bg-blue-300 transition-colors duration-300"
          type="button"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex justify-between">
        <div className="mt-8 w-[700px] ">
          {cartItems.map((item) => (
            <div key={item.id} className="rounded-md mb-4 ">
              <div className="flex gap-4 p-2">
                <img
                  className="w-36 h-36 rounded-md transition-transform hover:scale-105 cursor-pointer"
                  src={item.image}
                  alt="car image"
                />
                <div className="flex flex-col justify-between">
                  <span className="text-xl text-[#393c41] font-bold">
                    {item.title}
                  </span>
                  <p className="text-[#44474c] w-80">{item.description}</p>

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
                </div>
                <span className="ml-32 text-xl text-[#44474c] font-medium block">
                  ${item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="shadow-2xl p-8 w-96 h-72 rounded-lg mt-8">
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
          <Link to='/thankyou'>
            <button className="flex items-center justify-center w-full  mt-7 bg-green-500 hover:bg-green-600 transition-colors duration-300 py-2 rounded-md text-white text-lg">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
