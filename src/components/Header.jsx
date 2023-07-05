import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/tesla-logo.png";
import { TESLA_API } from "../utils/constant";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [primaryNavigationItems, setPrimaryNavigationItems] = useState([]);
  const [primaryMobileNavigationRightItems, setMobileNavigationRightItems] =
    useState([]);
  const [primaryMobileNavigationItems, setMobileNavigationItems] = useState([]);
  const [isCartPage, setIsCartPage] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  const location = useLocation();

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await fetch(TESLA_API);
      const data = await response.json();
      setPrimaryNavigationItems(data.primaryNavigationItems);
      setMobileNavigationRightItems(
        data.primaryMobileNavigationRightItems[0].title
      );
      setMobileNavigationItems(data.primaryMobileNavigationItems);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    setIsCartPage(location.pathname === "/cart");
  }, [location]);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 md:px-9 px-4 bg-transparent font-medium w-full z-50 `}
    >
      <nav className="hidden lg:block mt-4">
        <div className="flex justify-between items-center w-full">
          <Link to="/">
            <img
              className={`w-24 h-14 cursor-pointer ${
                isCartPage ? "bg-black rounded-lg" : null
              }`}
              src={logo}
              alt="logo"
            />
          </Link>
          <ul className="flex item-center gap-6 lg:gap-1 xl:gap-6">
            {primaryNavigationItems?.slice(0, 4).map((item, index) => (
              <Link to={item?.href} key={index}>
                <li
                  className={`cursor-pointer py-1 px-2  hover:bg-[#242123] rounded transition-all ease-in delay-150 ${
                    isCartPage ? "text-black hover:text-white" : "text-white"
                  }`}
                >
                  {item?.title}
                </li>
              </Link>
            ))}
          </ul>

          <ul className="flex items-center gap-6 lg:gap-1 xl:gap-6">
            <Link to="/cart">
              <li className=" relative cursor-pointer py-1 px-2 rounded transition-all ease-in delay-150">
                <i
                  className={`fa-solid fa-cart-shopping ${
                    isCartPage ? "text-black" : "text-white"
                  }`}
                ></i>
                <span className=" absolute top-0 right-0 left-5 bg-blue-600 w-4 h-4 rounded-full text-[11px] text-white flex items-center justify-center ">
                  {cartItems.length}
                </span>
              </li>
            </Link>
            <Link to="/shop">
              <li
                className={`cursor-pointer py-1 px-2  hover:bg-[#242123] rounded transition-all ease-in delay-150 ${
                  isCartPage ? "text-black hover:text-white" : "text-white"
                }`}
              >
                Shop
              </li>
            </Link>
          </ul>
        </div>
      </nav>

      <nav className="block lg:hidden">
        <div className="flex items-center justify-between w-full">
          <Link to="/">
            <img className="w-24 h-14 cursor-pointer" src={logo} alt="logo" />
          </Link>
          <div
            className="cursor-pointer py-1 px-2  hover:bg-[#242123] rounded transition-all ease-in delay-150"
            onClick={toggleSideBar}
          >
            {primaryMobileNavigationRightItems}
          </div>
        </div>
      </nav>
      <SideBar
        primaryMobileNavigationItems={primaryMobileNavigationItems}
        isOpen={isSideBarOpen}
        onClose={toggleSideBar}
      />
    </header>
  );
};

export default Header;
