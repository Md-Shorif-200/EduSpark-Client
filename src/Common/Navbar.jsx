import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import nav_logo from "../assets/navLogo/logo__1-removebg-preview.png";
import Heading from "./Heading";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [data] = useRole();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          className="hover:bg-white hover:text-[#39B8AD] transition duration-300 ease-in-out"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-white hover:text-[#39B8AD] transition duration-300 ease-in-out"
          to="allClass"
        >
          All Classes
        </NavLink>
      </li>
      {data?.role !== "teacher" || !user ? (
        <li>
          <NavLink
            className="hover:bg-white hover:text-[#39B8AD] transition duration-300 ease-in-out"
            to="/TeachOn"
          >
            Teach on Academix
          </NavLink>
        </li>
      ) : null}
      <li>
        <NavLink
          className="hover:bg-white hover:text-[#39B8AD] transition duration-300 ease-in-out"
          to="contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="web_header w-full  ">
      <Heading />
      <div className="navbar shadow-sm px-4 md:px-16 py-6 flex justify-between items-center">
        {/* Mobile Menu & Logo */}
        <div className="navbar-start flex items-center">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="nav_links menu menu-lg dropdown-content bg-base-100 rounded-box z-50 mt-3 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <div className="nav_logo ml-5">
            <img
              src={nav_logo}
              className="max-w-[50px] md:max-w-[60px] h-auto"
              alt="Logo"
            />
          </div>
        </div>

        {/* Navbar Links for Large Screen */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* User Profile Dropdown */}
        {user ? (
          <div className="relative flex items-center">
            {/* Avatar Button */}
            <div
              tabIndex={0}
              role="button"
              className="avatar flex items-center cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <img
                className="rounded-full border w-[40px] h-[40px]"
                src={user?.photoURL}
                alt="User"
              />
            </div>

            {/* Dropdown */}
            {isOpen && (
              <div
                className="absolute right-5 top-12 bg-white shadow-lg rounded-box p-3 z-50 transition-transform duration-300 overflow-hidden"
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={user?.photoURL}
                    className="w-[50px] h-[50px] rounded-full border"
                    alt="User"
                  />
                  <div>
                    <h1 className="text-[18px] font-bold capitalize">
                      {user?.displayName}
                    </h1>
                    <p className="text-[12px]">
                      {user?.email.slice(0, 23)}...
                    </p>
                    <p className="capitalize">{data?.role}</p>
                  </div>
                </div>

                <div className="divider my-3"></div>

                <div className="h-full px-1">
                  {data?.role === "student" && (
                    <div className="hover:bg-gray-200 p-2 rounded">
                      <Link to="dashboard/myEnrollMent">Dashboard</Link>
                    </div>
                  )}
                  {data?.role === "admin" && (
                    <div className="hover:bg-gray-200 p-2 rounded">
                      <Link to="dashboard/teacherRequest">Dashboard</Link>
                    </div>
                  )}
                  {data?.role === "teacher" && (
                    <div className="hover:bg-gray-200 p-2 rounded">
                      <Link to="dashboard/addClass">Dashboard</Link>
                    </div>
                  )}

                  <div className="hover:bg-gray-200 p-2 rounded">
                    <Link>Profile</Link>
                  </div>

                  <div
                    className="hover:bg-red-100 p-2 rounded cursor-pointer"
                    onClick={logOut}
                  >
                    Log Out
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="ml-5">
            <Link className="btn_primary" to="/signIn">
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
