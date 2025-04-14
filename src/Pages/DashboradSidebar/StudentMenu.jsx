import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserGraduate, FaShoppingBag } from 'react-icons/fa';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import { MdSchool } from 'react-icons/md';
import { FiHome } from 'react-icons/fi';

const StudentMenu = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 
     ${isActive ? 'bg-primary text-white font-semibold shadow-md' : 'hover:bg-gray-200'}`;

  return (
    <div className="bg-base-200 min-h-screen w-70 md:w-80 p-4">
      <h2 className="text-xl font-bold mb-6 text-center text-primary">Student Panel</h2>
      <ul className="space-y-2">
        <li>
          <NavLink to="myEnrollMent" className={linkClasses}>
            <FaUserGraduate className="text-lg" /> My Enrollments
          </NavLink>
        </li>
        <li>
          <NavLink to="myOrders" className={linkClasses}>
            <FaShoppingBag className="text-lg" /> My Orders
          </NavLink>
        </li>
        {/* Future: Add more options like student profile or feedback here */}
        <div className="divider my-4" />
        <li>
          <NavLink to="/" className={linkClasses}>
            <FiHome className="text-lg" /> Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default StudentMenu;
