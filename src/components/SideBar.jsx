import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ primaryMobileNavigationItems, isOpen, onClose }) => {
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
          {primaryMobileNavigationItems?.map((item, index) => (
            <Link to={item?.href} key={index}>
              <li className="ml-10 hover:bg-slate-200 p-2 w-44 rounded-md text-black mb-5">
                {item?.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
