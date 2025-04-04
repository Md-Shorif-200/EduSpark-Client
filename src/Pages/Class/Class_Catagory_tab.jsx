import React from 'react';
import ClassCard from './ClassCard';

const Class_Catagory_tab = ({class_catagory}) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 lg:gap-6'>

            {
                class_catagory.map(classData => <ClassCard key={classData._id} approvedClass={classData}></ClassCard>)
            }
            
        </div>
    );
};

export default Class_Catagory_tab;