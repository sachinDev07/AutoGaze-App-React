import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ primaryMobileNavigationItems, isOpen, onClose }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <aside
      className={`bg-white absolute top-0 right-0 w-64 h-screen ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out lg:hidden`}
    >
      <div
        className="overflow-y-auto h-full relative
      "
      >
        <div className="text-black text-right absolute right-0 mt-8 mr-10 p-2 hover:bg-slate-200 inline-block">
          <i
            className="fa-sharp fa-solid fa-xmark fa-xl cursor-pointer"
            onClick={onClose}
          ></i>
        </div>
        <ul className="mt-24">
          {primaryMobileNavigationItems?.slice(0, 4)?.map((item, index) => (
            <Link to={item?.href} key={index}>
              <li className="ml-10 hover:bg-slate-200 p-2 w-44 rounded-md text-black mb-5">
                {item?.title}
              </li>
            </Link>
          ))}
        </ul>
        <Link to="/shop">
          <li
            className="mb-5 ml-10 cursor-pointer py-2 px-2 w-44 rounded ease-in text-black transition-colors duration-150 hover:bg-slate-200"
          >
            Shop
          </li>
        </Link>
        <div className="px-4">
          {isAuthenticated ? (
            <li>
              <button
                className="text-white bg-blue-700 py-2 px-2 rounded-md hover:bg-blue-500 w-full"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button
                className="text-white bg-blue-700 py-2 px-2 rounded-md hover:bg-blue-500 w-full"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            </li>
          )}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
