import React, { useState } from "react";
import { FaSearchDollar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useClass from "../../Hooks/useClass";

const NavSearch = () => {
  const [search, setSearch] = useState("");
  const [classes] = useClass();
  const navigate = useNavigate();

  const filteredCourses = classes.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleRedirect = (id) => {
    navigate(`/allClass/classDetails/${id}`);
    setSearch(""); // clear search after navigation
  };

  return (
    <div className="relative  w-[220px] ml-6 lg:ml-20">
      {/* Search Input */}
      <div className="flex items-center border border-gray-400 rounded-md px-3">
        <FaSearchDollar className="text-gray-500 mr-2 text-2xl" />
        <input
          type="text"
          placeholder="Search Course"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="py-2 w-full border-none focus:outline-none"
        />
      </div>

      {/* Search Dropdown */}
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
  );
};

export default NavSearch;
