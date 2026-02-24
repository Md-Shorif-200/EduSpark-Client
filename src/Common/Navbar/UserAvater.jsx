import React from "react";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const UserAvater = () => {
  const { user, logOut } = useAuth();
  const [data] = useRole();

  return (
    <div className="w-full">
      {/* User Info */}
      <div className="px-5 pt-5 pb-4 bg-gradient-to-br from-indigo-50/80 to-purple-50/60">
        <div className="flex items-center gap-3.5">
          <div className="relative shrink-0">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center ring-2 ring-white shadow-sm">
                <span className="text-white font-bold text-lg">
                  {user?.displayName?.[0]?.toUpperCase() || "U"}
                </span>
              </div>
            )}
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-[2.5px] border-white rounded-full" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {user?.displayName || "User"}
            </p>
            <p className="text-xs text-gray-500 truncate mt-0.5">{user?.email}</p>
            {data?.role && (
              <span className="mt-1.5 inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-600">
                {data.role}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Menu Links */}
      <div className="py-2 px-2.5">
        <Link
          to="/profile"
          className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-500 transition-all duration-200 group-hover:bg-indigo-100 group-hover:text-indigo-600">
            <FaUser className="text-xs" />
          </span>
          Profile
        </Link>

        <Link
          to="/dashboard"
          className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-500 transition-all duration-200 group-hover:bg-indigo-100 group-hover:text-indigo-600">
            <MdDashboard className="text-sm" />
          </span>
          Dashboard
        </Link>
      </div>

      {/* Logout */}
      <div className="px-2.5 pb-2.5 pt-1 border-t border-gray-100">
        <button
          onClick={logOut}
          className="group flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-red-50 hover:text-red-600 cursor-pointer"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-500 transition-all duration-200 group-hover:bg-red-100 group-hover:text-red-600">
            <FaSignOutAlt className="text-xs" />
          </span>
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserAvater;
