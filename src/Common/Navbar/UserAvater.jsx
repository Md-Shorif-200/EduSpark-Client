import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdClose, MdDashboard } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

const UserAvater = () => {
    const {user,logOut} = useAuth();

      const avaterLinks = (
        <>
          <Link
            to="/profile"
            className="text-base font-semibold capitalize flex items-center gap-x-3 px-2 pt-6 pb-2 hover:bg-gray-100"
          >
            <FaUser /> Profile
          </Link>
          <Link
            to="/dashboard"
            className="text-base font-semibold capitalize flex items-center gap-x-3 p-2 hover:bg-gray-100"
          >
            <MdDashboard /> Dashboard
          </Link>
          <Link
            onClick={logOut}
            className="text-base font-semibold capitalize flex items-center gap-x-3 px-2 pb-6 pt-2 hover:bg-gray-100"
          >
            <FaSignOutAlt /> Logout
          </Link>
        </>
      );


    return avaterLinks;
};

export default UserAvater;