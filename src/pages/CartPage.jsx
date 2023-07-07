import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

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
    <div className="mt-28 px-4 md:px-28 lg:px-28">
      <div className="lg:flex justify-between gap-12">
        <div className="mt-8 lg:flex-1 ">
          <div className="flex justify-between lg:mb-12">
            <h1 className="text-2xl md:text-3xl text-black font-bold">Cart</h1>
            <button
              className="md:text-lg font-medium px-2 py-2 rounded-lg text-black bg-blue-400 hover:bg-blue-300 transition-colors duration-300"
              type="button"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <OrderSummary />
      </div>
    </div>
  );
};

export default CartPage;
