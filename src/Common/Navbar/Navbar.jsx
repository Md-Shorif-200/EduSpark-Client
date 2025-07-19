import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import nav__logo from "../../assets/navLogo/Nav_logo.png";
import Navlinks from "./Navlinks";
import UserAvater from "./UserAvater";
import useClass from "../../Hooks/useClass";


const Navbar = () => {
  const { user, logOut } = useAuth();
  const [data] = useRole();
  const [isActive, setIsActive] = useState(false);
  const [classes,refetch,isLoading] = useClass()
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredCourses = classes.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleRedirect = (id) => {
    navigate(`/allClass/classDetails/${id}`);
    setSearch(""); // close dropdown after click
  };

  const handleMenuIcon = () => setIsActive(true);

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-16 2xl:px-22 py-3 relative">
        <div className="flex">
          {/* Logo */}
          <div className="flex items-center gap-x-2">
            <img src={nav__logo} alt="Logo" className="w-[60px] h-[60px]" />
            <h2 className="text-xl font-semibold">EduSpark</h2>
          </div>

          {/* Search + Navlinks */}
          <div className="flex items-center flex-grow justify-center gap-x-10 relative">
            <div className="relative hidden sm:block w-[220px] ml-20">
              <div className="flex items-center border border-gray-400 rounded-md px-3">
                <FaSearch className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search Course"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="py-2 w-full border-none focus:outline-none"
                />
              </div>
              {search && filteredCourses.length > 0 && (
                <div className="absolute w-full bg-white shadow rounded-md z-50 mt-2">
                  <ul className="p-2">
                    {filteredCourses.map((item) => (
                      <li
                        key={item._id}
                        onClick={() => handleRedirect(item._id)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
                        {/* nav-links */}
            <div className="nav_link hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <Navlinks />
              </ul>
            </div>
          </div>
        </div>

        {/* User & Mobile */}
        <div className="flex items-center gap-x-4">
          <div className="lg:hidden text-4xl cursor-pointer">
            {!isActive && <IoMenu onClick={handleMenuIcon} />}
          </div>

          <div className="hidden lg:block">
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                  <img
                    alt=""
                    src={user.photoURL}
                    className="w-[50px] h-[50px] rounded-full border border-gray-300"
                  />
                </div>
                <div
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-0 shadow"
                >
                  <UserAvater />
                </div>
              </div>
            ) : (
              <Link to="signIn">
                <button className="secondary_btn uppercase">
                  <span>Log In</span>
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          tabIndex={0}
          className={`h-[100vh] bg-black/30 absolute left-0 top-0 transition-all duration-300 ease-in-out ${
            isActive ? "w-full" : "w-0 overflow-hidden"
          }`}
          onClick={() => setIsActive(false)}
        >
          <div
            className={`h-full bg-white px-8 transition-all duration-500 ease-in-out ${
              isActive ? "w-[80%]" : "w-0 overflow-hidden"
            }`}
          >
            <div className="flex justify-between items-center pt-2 mb-6">
              <span className="btn btn-ghost text-xl">EduSpark</span>
              <MdClose
                className="text-5xl pr-4 cursor-pointer"
                onClick={() => setIsActive(false)}
              />
            </div>

            <ul className="nav_link">
              <Navlinks />
            </ul>
            <div className="divider"></div>

            {user ? (
              <div className="responsive_user_avater pl-4">
                <div className="img flex items-center gap-x-3">
                  <img
                    src={user?.photoURL}
                    className="w-[40px] h-[40px] rounded-full border border-gray-200"
                    alt="User"
                  />
                  <div>
                    <p className="capitalize">{user?.displayName}</p>
                    <p className="text-sm">{data?.role}</p>
                  </div>
                </div>
                <div className="avater_link">
                  <UserAvater />
                </div>
              </div>
            ) : (
              <div className="text-center">
                <Link to="signIn">
                  <button className="secondary_btn uppercase">
                    <span>Log In / Sign Up</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
