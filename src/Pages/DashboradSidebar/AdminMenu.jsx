import React from "react";
import { NavLink } from "react-router-dom";
import { FaChalkboardTeacher, FaUsers, FaClipboardList, FaHome, FaChartPie } from "react-icons/fa";

const menuItems = [
  { to: "/dashboard/admin", icon: FaChartPie, label: "Analytics" },
  { to: "teacherRequest", icon: FaChalkboardTeacher, label: "Teacher Request" },
  { to: "users", icon: FaUsers, label: "Users" },
  { to: "RequestedClass", icon: FaClipboardList, label: "All Classes" },
];

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
    isActive
      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
      : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
  }`;

const AdminMenu = () => {
  return (
    <nav className="px-4 py-6">
      <p className="px-4 mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Admin Panel
      </p>
      <ul className="space-y-1">
        {menuItems.map(({ to, icon: Icon, label }) => (
          <li key={to}>
            <NavLink to={to} className={linkClass}>
              <Icon size={18} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="my-5 border-t border-gray-100" />

      <p className="px-4 mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        General
      </p>
      <ul>
        <li>
          <NavLink to="/" className={linkClass}>
            <FaHome size={18} />
            Back to Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminMenu;
