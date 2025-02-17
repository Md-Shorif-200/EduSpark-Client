import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ClassProgress from './ClassProgress';
import ClassAssignment from './ClassAssignment';

const MyClassDetailsPage = () => {
     const classData = useLoaderData()
      console.log(classData);
      
    return (
        <div className='px-12 py-10'>

             <ClassProgress></ClassProgress>
             <ClassAssignment></ClassAssignment>
            
        </div>
    );
};

export default MyClassDetailsPage;