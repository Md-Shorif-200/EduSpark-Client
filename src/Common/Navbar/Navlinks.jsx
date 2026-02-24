import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/allClass", label: "All Class" },
  { to: "/TeachOn", label: "Teach On" },
  { to: "/contact", label: "Contact" },
];

const Navlinks = () => {
  return links.map(({ to, label }) => (
    <li key={to}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-200 outline-none ${
            isActive
              ? "text-indigo-600 bg-indigo-50"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  ));
};

export default Navlinks;
