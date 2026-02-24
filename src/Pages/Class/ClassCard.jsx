import React from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline, IoBookOutline } from "react-icons/io5"; // Added Book icon
import { GoProjectSymlink } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ClassCard = ({ approvedClass }) => {
  const {
    _id,
    title,
    name,
    price,
    image,
    duration,
    totalProjects,
    category, // New field
    totalLectures, // New field
  } = approvedClass;

  // Function to format category string (e.g., web_development -> Web Development)
  const formatCategory = (cat) => cat.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-100/50 border border-slate-200 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-indigo-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md shadow-lg">
            {formatCategory(category)}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-indigo-700 font-bold px-3 py-1.5 rounded-lg shadow-sm text-sm">
            ${price}
          </span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-4">
            By <span className="text-slate-700">{name}</span>
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div className="flex items-center text-sm text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-lg">
              <IoTimeOutline className="text-indigo-500 mr-1.5 shrink-0" />
              <span className="truncate">{duration} Month{duration > 1 ? 's' : ''}</span>
            </div>
            
            <div className="flex items-center text-sm text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-lg">
              <IoBookOutline className="text-indigo-500 mr-1.5 shrink-0" />
              <span className="truncate">{totalLectures} Lectures</span>
            </div>

            <div className="flex items-center text-sm text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-lg col-span-2">
              <GoProjectSymlink className="text-indigo-500 mr-1.5 shrink-0" />
              <span>{totalProjects}+ Real-world Projects</span>
            </div>
          </div>
        </div>
        
        {/* Footer Button - Aligned End */}
        <div className="flex justify-end pt-4 border-t border-slate-50">
          <Link 
            to={`/allClass/classDetails/${_id}`}
            className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:text-indigo-800 transition-all duration-300 group/btn"
          >
            View Details
            <HiOutlineArrowNarrowRight className="text-lg transform transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;