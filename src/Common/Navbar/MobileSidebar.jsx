import React from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import nav__logo from "../../assets/navLogo/Nav_logo.png";
import Navlinks from "./Navlinks";
import UserAvater from "./UserAvater";
import NavSearch from "./NavSearch";

const MobileSidebar = ({
  user,
  isActive,
  closeSidebar,
  setIsActive,
}) => {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-all duration-300 lg:hidden ${
        isActive
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
      onClick={() => setIsActive(false)}
    >
      {/* Sidebar */}
      <aside
        className={`h-full w-[80%] max-w-[320px] bg-white shadow-xl transition-transform duration-300 flex flex-col ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 ">
          <Link
            to="/"
            onClick={closeSidebar}
            className="flex items-center gap-2"
          >
            <img src={nav__logo} alt="logo" className="w-9 h-9" />
            <span className="text-lg font-bold text-gray-800">
              Edu<span className="text-indigo-600">Spark</span>
            </span>
          </Link>

          <button
            onClick={() => setIsActive(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <MdClose className="text-xl text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
          
          {/* Search */}
          <NavSearch />

          {/* Navigation */}
          <nav>
          
            <ul
              className="flex flex-col gap-y-6"
              onClick={closeSidebar}
            >
              <Navlinks />
            </ul>
          </nav>

          {/* Account Section */}
          {user ? (
            <div onClick={closeSidebar}>
            
              <UserAvater />
            </div>
          ) : (
            <div className="bg-gray-50 border rounded-xl p-4">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Welcome to EduSpark 👋
              </p>

              <Link to="/signIn" onClick={closeSidebar}>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
                  <FiLogIn />
                  Login / Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t px-5 py-3 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} EduSpark
        </div>
      </aside>
    </div>
  );
};

export default MobileSidebar;