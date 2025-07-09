import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaHome, FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdClose, MdDashboard } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import useRole from "../Hooks/useRole";
import nav__logo from '../assets/navLogo/nav_logo.png';

const Navbar = () => {
  const { user, logOut } = useAuth(); // context api
  const [data] = useRole(); // tanstack query
  const [isActive, setIsActive] = useState(false);
  // nav Links
  const navLinks = (
    <>
      <li className="text-base font-semibold   capitalize mx-4  py-2 lg:py-0 cursor-pointer">
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li className="text-base font-semibold   capitalize mx-4  py-2 lg:py-0 cursor-pointer">
        {" "}
        <NavLink to="/allClass">All Class</NavLink>{" "}
      </li>
      <li className="text-base font-semibold   capitalize mx-4  py-2 lg:py-0 cursor-pointer">
        {" "}
        <NavLink to="/TeachOn">Teach On </NavLink>{" "}
      </li>
      <li className="text-base font-semibold   capitalize mx-4  py-2 lg:py-0 cursor-pointer">
        {" "}
        <NavLink to="/contact">Contact</NavLink>{" "}
      </li>
    </>
  );

  // avater links
  const avaterLinks = (
    <>
      <Link
        to="/profile"
        className="text-base font-semibold   capitalize flex items-center gap-x-3 px-2 pt-6 pb-2 hover:bg-gray-100"
      >
        {" "}
        <FaUser></FaUser> Profile
      </Link>
      <Link
        to="/dashboard"
        className="text-base font-semibold   capitalize flex items-center gap-x-3 p-2 hover:bg-gray-100"
      >
        {" "}
        <MdDashboard></MdDashboard> dashboard
      </Link>
      <Link
        onClick={logOut}
        className="text-base font-semibold   capitalize flex items-center gap-x-3 px-2 pb-6 pt-2 hover:bg-gray-100"
      >
        {" "}
        <FaSignOutAlt></FaSignOutAlt> Logout
      </Link>
    </>
  );

  // responsove menu icon functionality
  const handleMenuIcon = () => {
    setIsActive(true);
  };

  return (
    <div className=" bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar px-4 sm:px-6 md:px-16 2xl:px-22  py-3 relative">
        <div className="navbar-start flex items-center">
            <img src={nav__logo} alt="" className="w-[60px] h-[60px]" />
          <h2 className="text-xl font-semibold">EduSpark</h2>
        </div>
        <div className="nav_link navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* nav links */}
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="">
            {/*responsive menu icon */}
            <div
              tabIndex={0}
              role="button"
              className={`lg:hidden text-4xl cursor-pointer ${
                isActive ? "hidden" : "block"
              }`}
              onClick={handleMenuIcon}
            >
              <IoMenu></IoMenu>
            </div>
            {/* responsive nav menu */}
            <div
              tabIndex={0}
              className={`  h-[100vh] bg-black/30  absolute left-0 top-0 transition-all duration-300 ease-in-out ${
                isActive ? "w-full " : "w-0 overflow-hidden"
              } `}
              onClick={() => setIsActive(false)}
            >
              <div
                className={`h-full bg-white transition-all duration-500 ease-in-out  ${
                  isActive ? "w-[80%]" : "w-0 overflow-hidden"
                }`}
              >
                <div className=" flex justify-between items-center pt-2 mb-6 ">
                  <a className="btn btn-ghost text-xl ">EduSpark</a>

                  <MdClose
                    className="text-5xl pr-4 cursor-pointer"
                    onClick={() => setIsActive(false)}
                  ></MdClose>
                </div>

                <ul className="nav_link"> {navLinks} </ul>

                <div className="divider"></div>

                {/*  responsive user avater */}
                <div className="responsive_user_avater pl-4">
                  <div className="img flex items-center gap-x-3">
                    <img
                      src={user?.photoURL}
                      className="w-[40px] h-[40px] rounded-full border border-gray-200"
                      alt="image"
                    />
                    <div>
                      <p className="capitalize"> {user?.displayName} </p>
                      <p className=" text-sm"> {data?.role} </p>
                    </div>
                  </div>
                  <div className="avater_link">{avaterLinks}</div>
                </div>
              </div>
            </div>
          </div>

          {/* user avater & log-in button */}
          <div className="hidden lg:block">
            {user ? (
              <>
                {/* user avater */}
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className=" ">
                    <div className="">
                      <img
                        alt=""
                        src={user.photoURL}
                        className=" w-[50px] h-[50px] rounded-full border border-gray-300"
                      />
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-0 shadow"
                  >
                    {/* avater links */}
                    {avaterLinks}
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="signIn" className="">
                  <button className="secondary_btn uppercase">
                    <span>log in / sign up</span>
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
