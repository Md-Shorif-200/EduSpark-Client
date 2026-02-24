import React from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoMoon, IoSunny } from "react-icons/io5";
import nav__logo from "../../assets/navLogo/Nav_logo.png";
import Navlinks from "./Navlinks";
import UserAvater from "./UserAvater";
import NavSearch from "./NavSearch";

const DesktopNavbar = ({ user, isDarkMode, handleThemeToggle, handleMenuIcon }) => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-3 relative">
      
      {/* Logo Section */}
      <div className="flex items-center gap-x-3">
        <img src={nav__logo} alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white ">
          EduSpark
        </h2>
      </div>

      {/* Desktop Search & Navigation */}
      <div className="hidden lg:flex items-center flex-grow justify-center max-w-2xl mx-8">
        <div className="w-full">
          <NavSearch />
        </div>
      </div>

      <div className="nav_link hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <Navlinks />
        </ul>
      </div>

      {/* Right Section - Controls */}
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        
        {/* Theme Toggle */}
        {/* <button
          onClick={handleThemeToggle}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors "
        >
          {isDarkMode ? (
            <IoSunny className="text-xl text-yellow-500" />
          ) : (
            <IoMoon className="text-xl text-gray-600" />
          )}
        </button> */}

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={handleMenuIcon}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <IoMenu className="text-2xl" />
          </button>
        </div>

        {/* Desktop User Section */}
        <div className="hidden lg:block">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-600">
                  <img
                    alt="User Avatar"
                    src={user.photoURL}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <UserAvater />
              </div>
            </div>
          ) : (
            <Link to="signIn">
              <button className="btn btn-primary btn-sm px-6 rounded-full hover:scale-105 transition-transform">
                Log In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;