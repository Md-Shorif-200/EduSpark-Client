import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useClass from "../../Hooks/useClass";

const NavSearch = () => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [classes] = useClass();
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const filteredCourses = classes.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRedirect = (id) => {
    navigate(`/allClass/classDetails/${id}`);
    setSearch("");
    setIsFocused(false);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <div
        className={`flex items-center gap-x-2 px-3.5 py-2 rounded-xl border transition-all duration-200 w-[240px] ${
          isFocused
            ? "border-indigo-300 bg-white shadow-sm shadow-indigo-100 ring-2 ring-indigo-50"
            : "border-gray-200 bg-gray-50 hover:bg-gray-100/80"
        }`}
      >
        <FiSearch className={`text-lg shrink-0 transition-colors duration-200 ${isFocused ? "text-indigo-500" : "text-gray-400"}`} />
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 border-none outline-none"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {search && isFocused && filteredCourses.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50 max-h-[320px] overflow-y-auto">
          <p className="px-4 pt-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            {filteredCourses.length} result{filteredCourses.length > 1 ? "s" : ""}
          </p>
          <ul className="pb-2">
            {filteredCourses.map((item) => (
              <li
                key={item._id}
                onClick={() => handleRedirect(item._id)}
                className="flex items-center gap-x-3 px-4 py-2.5 cursor-pointer hover:bg-indigo-50 transition-colors duration-150"
              >
                <span className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                  <FiSearch className="text-indigo-500 text-sm" />
                </span>
                <span className="text-sm text-gray-700 font-medium truncate">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {search && isFocused && filteredCourses.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] border border-gray-100 z-50">
          <div className="px-4 py-6 text-center">
            <p className="text-sm text-gray-400">No courses found</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavSearch;
