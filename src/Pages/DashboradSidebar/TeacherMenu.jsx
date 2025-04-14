import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdAddBox, MdLibraryBooks } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';

const linkClasses = ({ isActive }) =>
  `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 
   ${isActive ? 'bg-primary text-white font-semibold shadow-md' : 'hover:bg-gray-200'}`;

const TeacherMenu = () => {
  return (
    <div className="dashboard_menu bg-base-200 min-h-screen w-70 md:w-80 p-4">
      <h2 className="text-xl font-bold mb-6 text-center text-primary">Teacher Panel</h2>
      <ul className="menu bg-base-200 text-base-content min-h-full w-full md:w-60 lg:w-72 p-4 space-y-2">

        <li>
          <NavLink to="addClass" className={linkClasses}>
            <MdAddBox size={20} /> Add Class
          </NavLink>
        </li>

        <li>
          <NavLink to="myClass" className={linkClasses}>
            <MdLibraryBooks size={20} /> My Classes
          </NavLink>
        </li>

        <div className="divider" />

        <li>
          <NavLink to="/" className={linkClasses}>
            <FaHome size={20} /> Home
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default TeacherMenu;
