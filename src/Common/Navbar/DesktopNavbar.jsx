import React from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import nav__logo from "../../assets/navLogo/Nav_logo.png";
import Navlinks from "./Navlinks";
import UserAvater from "./UserAvater";
import NavSearch from "./NavSearch";
import { FiLogIn } from "react-icons/fi";

const DesktopNavbar = ({ user, handleMenuIcon }) => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 h-[72px]">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-x-2.5 shrink-0 group">
        <div className="relative">
          <img
            src={nav__logo}
            alt="EduSpark"
            className="w-10 h-10 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <span className="text-[22px] font-bold tracking-tight text-gray-900 hidden sm:block">
          Edu<span className="text-indigo-600">Spark</span>
        </span>
      </Link>

      {/* Center: Nav Links */}
      <nav className="hidden lg:flex items-center">
        <ul className="flex items-center gap-x-1">
          <Navlinks />
        </ul>
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-x-3">
        {/* Search */}
        <div className="hidden lg:block">
          <NavSearch />
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-8 bg-gray-200" />

        {/* Desktop User / Login */}
        <div className="hidden lg:block">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-x-2 px-2 py-1.5 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-indigo-100 ring-offset-1">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {user.displayName?.[0]?.toUpperCase() || "U"}
                      </span>
                    </div>
                  )}
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div
                tabIndex={0}
                className="dropdown-content mt-3 w-72 rounded-2xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100/80 overflow-hidden z-50"
              >
                <UserAvater />
              </div>
            </div>
          ) : (
            <Link to="signIn">
              <button className="inline-flex items-center gap-x-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl shadow-sm shadow-indigo-200 hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-200 active:scale-[0.97] transition-all duration-200 cursor-pointer">
                <FiLogIn className="text-base" />
                Log In
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleMenuIcon}
          className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <IoMenu className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
