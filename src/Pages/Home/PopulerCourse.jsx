import React, { useEffect } from 'react';
import SectionTitle from '../../Common/SectionTitle';
import ClassCard from '../Class/ClassCard';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useClass from '../../Hooks/useClass';
import { Link } from 'react-router-dom';

const PopulerCourse = () => {
    const  [classes,refetch,isLoading]  = useClass();
    
    const sortedClass = classes.sort((a,b) => b.totalEnrollments - a.totalEnrollments);
    const populerClasses = sortedClass.slice(0,6)
    
     
     
             
   
    return (
        <div className='bg_color_2 p-6 '>

              <div className='grid grid-cols-2 pt-12 pb-3'>
                  <div className='pr-14'>
                  <SectionTitle  title={'populer courses'}></SectionTitle>
                  </div>
               
                  <div className='text-end'>
                     <Link className=" my-4 capitalize text-purple-700">view all courses</Link>
                  </div>
              </div>
                <div className='divider'></div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 '> 
                 {
                    populerClasses.map(populerClass => <ClassCard approvedClass= {populerClass}></ClassCard>)
                 }
            </div>
            
        </div>
    );
};

export default PopulerCourse;