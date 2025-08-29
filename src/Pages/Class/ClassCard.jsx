import React from "react";
import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";

const ClassCard = ({ approvedClass }) => {
  const {
    _id,
    title,
    name,
    price,
    image,
    duration,
    totalProjects,
  } = approvedClass;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={image}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
          alt={title}
        />
        <div className="absolute top-3 right-3 bg-white rounded-md px-2 py-1 shadow-sm">
          <span className="text-indigo-600 font-semibold">${price}</span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 h-14">{title}</h3>
        
        <p className="text-gray-600 text-sm mb-4 flex items-center">
          <span className="text-indigo-500 font-medium mr-1">Instructor:</span> 
          {name}
        </p>
        
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center text-sm text-gray-600">
            <IoTimeOutline className="text-indigo-500 mr-1" />
            <span>{duration} month{duration > 1 ? 's' : ''}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <GoProjectSymlink className="text-indigo-500 mr-1" />
            <span>{totalProjects}+ projects</span>
          </div>
        </div>
        
        <Link 
          to={`/allClass/classDetails/${_id}`}
          className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
        >
          View Course Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;