import React, { useEffect, useState } from "react";
import useClassCard from "../../Hooks/useClassCard";
import ClassCard from "./ClassCard";
import Loading from "../../Common/Loading";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import CoverImg from "../../Common/CoverImg";


const AllClass = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("sort by price");
  const [filter, setFilter] = useState("");
  const [classes, setClasses] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const getClasses = async () => {
      const { data } = await axiosPublic.get(
        `/classes?search=${search}&sort=${sort}&filter=${filter}`
      );
      setClasses(data);
    };
    getClasses();
  }, [search, sort, filter]);

  const approvedClasses = classes.filter((Class) => Class.status == "approved");

  const handleResetBtn = () => {
    setSearch("");
    setSort("sort by price");
    setFilter("");
  };

  return (
    <div className="All_classes mb-30 overflow-x-hidden ">
                    <CoverImg title={'all course'}></CoverImg>
      {/* <h1>         total claass  :{approvedClasses.length} </h1> */}

      <div className="my-12 px-2 lg:px-16">
  <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">

    {/* Filter by Category */}
    <div className="w-full md:w-1/4">
      <label className="block mb-1 text-sm font-medium text-gray-700">Filter by Category</label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option disabled value="">Select category</option>
        <option value="frontend development">Frontend Development</option>
        <option value="web design">Web Design</option>
        <option value="video editing">Video Editing</option>
        <option value="professional vedio editing">Professional Video Editing</option>
        <option value="digital marketing">Digital Marketing</option>
        <option value="professional digital marketing">Professional Digital Marketing</option>
        <option value="data entry">Data Entry</option>
      </select>
    </div>

    {/* Search Input */}
    <div className="w-full md:w-1/3">
      <label className="block mb-1 text-sm font-medium text-gray-700">Search Courses</label>
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
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

    {/* Sort By Price */}
    <div className="w-full md:w-1/4">
      <label className="block mb-1 text-sm font-medium text-gray-700">Sort by Price</label>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option disabled value="sort by price">Select sorting</option>
        <option value="asc">Low To High</option>
        <option value="dsc">High To Low</option>
      </select>
    </div>

    {/* Reset Button */}
    <div className="w-full md:w-auto mt-2 md:mt-6">
      <button
        onClick={handleResetBtn}
        className="w-full md:w-auto px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md shadow transition duration-300"
      >
        Reset
      </button>
    </div>
  </div>
</div>


    

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 lg:px-16 ">
        {approvedClasses.map((appProvedClass, index) => (
          <ClassCard key={index} approvedClass={appProvedClass}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClass;
