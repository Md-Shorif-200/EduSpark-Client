import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import Loading from "../../Common/Loading";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import useClass from "../../Hooks/useClass";

const AllClass = () => {

 
  const [classes,refetch,isLoading] =  useClass()

  //  get approved class
  const approvedClasses = classes.filter((Class) => Class.status == "approved");




  if(isLoading){
    return  <Loading></Loading>
  }



  return (
    <div className="All_classes mb-30  common_padding py-10">

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8  ">
        {approvedClasses.map((appProvedClass, index) => (
          <ClassCard key={index} approvedClass={appProvedClass}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClass;