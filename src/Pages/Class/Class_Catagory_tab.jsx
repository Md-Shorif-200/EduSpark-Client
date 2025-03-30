import React from 'react';
import ClassCard from './ClassCard';

const Class_Catagory_tab = ({class_catagory}) => {
    return (
        <div className='grid grid-cols-4 gap-6'>

            {
                class_catagory.map(classData => <ClassCard key={classData._id} approvedClass={classData}></ClassCard>)
            }
            
        </div>
    );
};

export default Class_Catagory_tab;