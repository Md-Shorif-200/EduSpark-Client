import React, { useEffect, useState } from "react";
import useClassCard from "../../Hooks/useClassCard";
import ClassCard from "./ClassCard";
import Loading from "../../Common/Loading";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import CoverImg from "../../Common/CoverImg";
import axios from "axios";
import useClass from "../../Hooks/useClass";

const AllClass = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const axiosPublic = useAxiosPublic();
  const [classes,refetch,isLoading] =  useClass(search,filter)

  //  get approved class
  const approvedClasses = classes.filter((Class) => Class.status == "approved");


  // reset classes
  const handleResetBtn = () => {
    setSearch("");
    setFilter("");
  };



  return (
    <div className="All_classes mb-30  common_padding">
      {/* <CoverImg title={'all course'}></CoverImg> */}
      {/* <h1>         total claass  :{approvedClasses.length} </h1> */}

      <div className="my-12 ">
        <div className=" w-full  md:flex justify-end items-center  gap-4 mb-6 ">
          {/* Search Input */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by Class Title"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>

          {/* Filter by Category */}
          <div className="w-full md:w-1/4 my-6 ">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option disabled value="">
                Filter By Cagtegory
              </option>
              <option value="web_development">Web Development</option>
              <option value="app_development">App Development</option>
              <option value="cyber_security">Cyber Security</option>
              <option value="design_and_multimedia">Design & Multimedia</option>
              <option value="digital_marketing">Digital Marketing</option>
              <option value="office_management">Office Management</option>
            </select>
          </div>

          {/* Reset Button */}
          <div className=" w-full md:w-1/12">
            <button
              onClick={handleResetBtn}
              className="btn w-full md:w-auto px-5 py-2 uppercase bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md shadow transition duration-300"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8  ">
        {approvedClasses.map((appProvedClass, index) => (
          <ClassCard key={index} approvedClass={appProvedClass}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClass;
