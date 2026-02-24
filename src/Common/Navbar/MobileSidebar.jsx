import React from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import nav__logo from "../../assets/navLogo/Nav_logo.png";
import Navlinks from "./Navlinks";
import UserAvater from "./UserAvater";
import NavSearch from "./NavSearch";
import { FiLogIn } from "react-icons/fi";

const MobileSidebar = ({
  user,
  data,
  isActive,
  closeSidebar,
  setIsActive,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black/30 backdrop-blur-[3px] transition-all duration-300 ease-out lg:hidden z-50 ${
        isActive ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
      onClick={() => setIsActive(false)}
    >
      <div
        className={`h-full w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100 shrink-0">
          <Link to="/" onClick={closeSidebar} className="flex items-center gap-x-2.5">
            <img src={nav__logo} alt="EduSpark" className="w-9 h-9" />
            <span className="text-lg font-bold text-gray-900">
              Edu<span className="text-indigo-600">Spark</span>
            </span>
          </Link>
          <button
            onClick={() => setIsActive(false)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Search */}
          <div className="px-4 pt-4 pb-2">
            <NavSearch />
          </div>

          {/* Navigation */}
          <nav className="px-3 py-2">
            <p className="px-3 mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
              Menu
            </p>
            <ul className="nav_link list-none space-y-0.5" onClick={closeSidebar}>
              <Navlinks />
            </ul>
          </nav>

          <div className="mx-4 border-t border-gray-100" />

          {/* User Section */}
          {user ? (
            <div className="px-2 py-2" onClick={closeSidebar}>
              <UserAvater />
            </div>
          ) : (
            <div className="px-4 py-4">
              <Link to="signIn" onClick={closeSidebar}>
                <button className="inline-flex items-center justify-center gap-x-2 w-full px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer">
                  <FiLogIn className="text-base" />
                  Log In / Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 px-5 py-3.5 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} EduSpark
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
