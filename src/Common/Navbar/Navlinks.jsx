import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
      const navLinks = (
    <>
      <li className="text-base text-[#1E293B] font-normal capitalize mx-2  py-2 lg:py-0 cursor-pointer">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-base text-[#1E293B] font-normal capitalize mx-2  py-2 lg:py-0 cursor-pointer">
        <NavLink to="/allClass">All Class</NavLink>
      </li>
      <li className="text-base text-[#1E293B] font-normal capitalize mx-2  py-2 lg:py-0 cursor-pointer">
        <NavLink to="/TeachOn">Teach On</NavLink>
      </li>
      <li className="text-base text-[#1E293B] font-normal capitalize mx-2  py-2 lg:py-0 cursor-pointer">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

    return   navLinks;
};

export default Navlinks;