import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

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
  const [scrolled, setScrolled] = useState(false);
  const [isCartPage, setIsCartPage] = useState(false);
  const [isDrivePage, setIsDrivePage] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  const location = useLocation();

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    setIsDrivePage(location.pathname === "/drive");
  }, [location]);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 px-2 md:px-9 font-medium w-full z-50 ${
        scrolled ? "bg-black" : "bg-transparent text-white"
      } ${isDrivePage ? "!bg-black" : ""} transition-colors duration-300 `}
    >
      <nav className="hidden lg:block py-4">
        <div className="flex justify-between items-center w-full">
          <Link
            to="/"
            className={`${isCartPage ? "text-black" : " "} ${
              scrolled ? "text-white" : ""
            } text-2xl font-bold mt-2 hover:scale-105 transition-colors duration-300`}
          >
            AutoGaze
          </Link>
          <ul className="flex item-center gap-6 lg:gap-1 xl:gap-6">
            {primaryNavigationItems?.slice(0, 4).map((item, index) => (
              <Link to={item?.href} key={index}>
                <li
                  className={`cursor-pointer py-1 px-2  hover:bg-[#242123] rounded transition-all ease-in delay-150 ${
                    isCartPage ? "text-black hover:text-white" : " "
                  } ${
                    scrolled ? "text-white hover:bg-white hover:text-black" : ""
                  } transition-colors duration-300`}
                >
                  {item?.title}
                </li>
              </Link>
            ))}
          </ul>

          <ul className="flex items-center gap-6 lg:gap-1 xl:gap-6">
            {isAuthenticated && <li className="text-white">{user.name}</li>}
            <Link to="/cart">
              <li className=" relative cursor-pointer py-1 px-2 rounded transition-all ease-in delay-150">
                <i
                  className={`fa-solid fa-cart-shopping ${
                    isCartPage ? "text-black" : "text-white"
                  } ${scrolled ? "text-white" : ""} `}
                ></i>
                <span className=" absolute top-0 right-0 left-5 bg-blue-600 w-4 h-4 rounded-full text-[11px] text-white flex items-center justify-center ">
                  {cartItems.length}
                </span>
              </li>
            </Link>
            <Link to="/shop">
              <li
                className={`cursor-pointer py-1 px-2  hover:bg-[#242123] rounded transition-all ease-in delay-150 ${
                  isCartPage ? "text-black hover:text-white" : " "
                } ${
                  scrolled ? "text-white hover:bg-white hover:text-black" : ""
                } transition-colors duration-300`}
              >
                Shop
              </li>
            </Link>
            {isAuthenticated ? (
              <li>
                <button
                  className="text-white bg-blue-700 py-1 px-2 rounded-md hover:bg-blue-500"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button
                  className="text-white bg-blue-700 py-1 px-2 rounded-md hover:bg-blue-500"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <nav className="block lg:hidden mt-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 items-center">
            <Link to="/">
              <img
                className={`w-24 h-14 cursor-pointer ${
                  isCartPage && !scrolled ? "bg-black hover:text-white" : ""
                }`}
                src={logo}
                alt="logo"
              />
            </Link>
            <Link to="/shop">
              <li
                className={`cursor-pointer py-1 px-3  rounded ease-in  transition-colors duration-150 hover:bg-black ${
                  isCartPage && !scrolled
                    ? "text-black hover:text-white"
                    : "text-white"
                }`}
              >
                Shop
              </li>
            </Link>
          </div>

          <div className="flex gap-3 items-center">
            <Link to="/cart">
              <li className=" relative cursor-pointer py-1 px-2 rounded transition-all ease-in delay-150">
                <i
                  className={`fa-solid fa-cart-shopping ${
                    isCartPage && !scrolled ? "text-black" : "text-white"
                  } ${scrolled ? "text-white" : "text-black"} `}
                ></i>
                <span className="absolute top-0 right-0 bg-blue-600 w-4 h-4 rounded-full text-[11px] text-white flex items-center justify-center ">
                  {cartItems.length}
                </span>
              </li>
            </Link>
            <div
              className={`cursor-pointer py-1 px-2  hover:bg-[#242123] rounded transition-all ease-in delay-150  ${
                isCartPage && !scrolled
                  ? "text-black hover:text-white"
                  : "text-white"
              } transition-colors duration-300`}
              onClick={toggleSideBar}
            >
              {primaryMobileNavigationRightItems}
            </div>
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
