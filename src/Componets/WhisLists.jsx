import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useWhisList from '../Hooks/useWhisList';
import useAuth from '../Hooks/useAuth';
import { FaChalkboardTeacher, FaBookOpen, FaTasks, FaTrash } from "react-icons/fa";


const WhisLists = () => {

        const   [whislists,refetch,isLoading]  = useWhisList()
        const {user} = useAuth();


           const myWhisLists = whislists.filter(data => data.studentEmail == user?.email);
            
          
                    

    return (
        <div>
             <h1 className="text-2xl font-semibold px-16 mt-14 mb-6"> My WhisLists : {myWhisLists.length} </h1>

                    <div  className="whisList_cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 mb-24">
                           {
                            myWhisLists.map((data,index) =>   
                            
                                <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden  hover:shadow-lg transition-all duration-300">
                                <img
                                  src={data?.image}
                                  alt={data?.courseTitle}
                                  className="w-full h-[150px]"
                                />
                                <div className="p-4 space-y-2">
                                  <h2 className="text-xl font-semibold text-gray-800">{data?.courseTitle}</h2>
                          
                                  <p className="flex items-center gap-2 text-sm text-gray-600">
                                    <FaChalkboardTeacher className="text-green-500" />
                                    Instructor: <span className="font-medium">{data?.teacherName}</span>
                                  </p>
                          
                                  <p className="flex items-center gap-2 text-sm text-gray-600">
                                    <FaBookOpen className="text-blue-500" />
                                    Lectures: <span className="font-medium">{data?.totalLectures}</span>
                                  </p>
                          
                                  <p className="flex items-center gap-2 text-sm text-gray-600">
                                    <FaTasks className="text-purple-500" />
                                    Projects: <span className="font-medium">{data?.totalProjects}</span>
                                  </p>
                          
                                  <div className="mt-4 flex gap-3">
                                  <button
    // onClick={() => onDelete(id)}
    className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
  >
    {/* <FaTrash /> Delete */}
    Delete
  </button>


  <button
    // onClick={() => onViewDetails(id)}
    className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
  >
    {/* <FaBookOpen />  Details */}
    See Details
  </button>


</div>

                                </div>
                              </div>
                            
                            )
                           }
                    </div>

        </div>
    );
};

export default WhisLists;