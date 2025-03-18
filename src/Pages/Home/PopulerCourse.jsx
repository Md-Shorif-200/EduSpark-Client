import React, { useEffect } from 'react';
import SectionTitle from '../../Common/SectionTitle';
import ClassCard from '../Class/ClassCard';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useClass from '../../Hooks/useClass';

const PopulerCourse = () => {
    const  [classes,refetch,isLoading]  = useClass();
    
    const sortedClass = classes.sort((a,b) => b.totalEnrollments - a.totalEnrollments);
    const populerClasses = sortedClass.slice(0,6)
    
     
     
             
   
    return (
        <div className='bg_color_2 p-6 '>

              <SectionTitle title={'our populer courses'}></SectionTitle>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '> 
                 {
                    populerClasses.map(populerClass => <ClassCard approvedClass= {populerClass}></ClassCard>)
                 }
            </div>
            
        </div>
    );
};

export default PopulerCourse;