import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';
import ClassCard from '../Class/ClassCard';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useClass from '../../Hooks/useClass';
import { Link } from 'react-router-dom';

import Class_Catagory_tab from '../../Pages/Class/Class_Catagory_tab';
import AnimateTitle from '../../Common/AnimateTitle';

import { FaArrowUpRightFromSquare } from "react-icons/fa6";



const PopulerCourse = () => {
    const  [classes,refetch,isLoading]  = useClass();
    const approvedClass = classes.filter(classData => classData.status === 'approved')
    const sortedClass = approvedClass.sort((a,b) => b.totalEnrollments - a.totalEnrollments);
    const populerClasses = sortedClass.slice(0,8)

    const web_softawre = populerClasses.filter(data => data.category == "web & software")
    const design_multimedia = populerClasses.filter(data => data.category == "design & multimedia")
    const digital_marketing = populerClasses.filter(data => data.category == "digital marketing")
    const office_management = populerClasses.filter(data => data.category == "office management")
    
     
     
             
   
    return (
        <div className='bg_color_2 p-6 secondary_bg_color px-16'>

                  <AnimateTitle animateTtile={'top class courses'}></AnimateTitle>
              <div className='grid grid-cols-2 pt-4 pb-3'>
                  <div className='pr-14'>
                  <SectionTitle  title={'Explore populer courses'}></SectionTitle>
                  </div>
               
                  <div className='text-end'>
                     <Link to='allClass' className=" text-lg my-4 capitalize primary_text_color font-bold flex justify-end items-center gap-x-2">view all courses  
                       <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
                      </Link>
                  </div>
              </div>
                <div className='divider'></div>

              

                    {/* name of each tab group should be unique */}
<div className="tabs tabs-box">

  <input type="radio" name="my_tabs_2" className="tab text-lg capitalize mb-8" aria-label="all" defaultChecked  />
  <div className="tab-content  border-base-300 bg-base-100 p-10">   {
     <Class_Catagory_tab class_catagory={populerClasses}></Class_Catagory_tab>} </div>

<input type="radio" name="my_tabs_2" className="tab text-lg capitalize mb-8" aria-label="web & software" />
  <div className="tab-content  border-base-300 bg-base-100 p-10">   {
     <Class_Catagory_tab class_catagory={web_softawre}></Class_Catagory_tab>} </div>


<input type="radio" name="my_tabs_2" className="tab text-lg capitalize mb-8" aria-label="design & multimedia" />
  <div className="tab-content  border-base-300 bg-base-100 p-10">   {
     <Class_Catagory_tab class_catagory={design_multimedia}></Class_Catagory_tab>} </div>

<input type="radio" name="my_tabs_2" className="tab text-lg capitalize mb-8" aria-label="digital marketing" />
  <div className="tab-content  border-base-300 bg-base-100 p-10">   {
     <Class_Catagory_tab class_catagory={digital_marketing}></Class_Catagory_tab>} </div>


<input type="radio" name="my_tabs_2" className="tab text-lg capitalize mb-8" aria-label="office management" />
  <div className="tab-content  border-base-300 bg-base-100 p-10">   {
     <Class_Catagory_tab class_catagory={office_management}></Class_Catagory_tab>} </div>

</div>




            {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 '> 
                 {
                    populerClasses.map(populerClass => <ClassCard approvedClass= {populerClass}></ClassCard>)
                 }
            </div> */}
            
        </div>
    );
};

export default PopulerCourse;