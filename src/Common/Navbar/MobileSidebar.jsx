import React from "react";
import { Link } from "react-router-dom";
import { IoMoon, IoSunny, IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import nav__logo from "../../assets/navLogo/Nav_logo.png";
import Navlinks from "./Navlinks";
import UserAvater from "./UserAvater";
import NavSearch from "./NavSearch";

const MobileSidebar = ({
  user,
  data,
  isActive,
  isDarkMode,
  handleThemeToggle,
  closeSidebar,
  setIsActive,
}) => {
  return (
    /* Mobile Sidebar Overlay */
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out lg:hidden ${
        isActive ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setIsActive(false)}
    >
      {/* Mobile Sidebar */}
      <div
        className={` w-[80%] bg-white dark:bg-gray-900 shadow-2xl transition-all duration-300 ease-in-out ${
          isActive ? "w-80 translate-x-0" : "w-80 -translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6  border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-x-3">
            <img src={nav__logo} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              EduSpark
            </span>
          </div>
          <button
            onClick={() => setIsActive(false)}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <MdClose className="text-3xl" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col h-full">
          {/* Mobile Search - Same as Desktop */}
          <div className="  lg:hidden mt-1">
            <NavSearch />
          </div>

          {/* Navigation Links */}
          <div className="flex-1 p-6">
            <nav className="space-y-2">
              <div onClick={closeSidebar}>
                <Navlinks />
              </div>
            </nav>

            <div className="divider"></div>

            {/* User Section */}
            {user ? (
              <div className="">
                <div className="flex items-center gap-x-3  rounded-lg bg-gray-50 dark:bg-gray-800">
                  <img
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-600"
                    alt="User"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 dark:text-white capitalize">
                      {user?.displayName}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                      {data?.role}
                    </p>
                  </div>
                </div>
                <div className=" ">
                  <div onClick={closeSidebar}>
                    <UserAvater />
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center pt-4">
                <Link to="signIn" onClick={closeSidebar}>
                  <button className="btn btn-primary w-full rounded-full">
                    Log In / Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar Footer - Dark Mode Toggle */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Theme
              </span>
              <button
                onClick={handleThemeToggle}
                className="flex items-center gap-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? (
                  <>
                    <IoSunny className="text-lg text-yellow-500" />
                    <span className="text-sm">Light</span>
                  </>
                ) : (
                  <>
                    <IoMoon className="text-lg" />
                    <span className="text-sm">Dark</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
