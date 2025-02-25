import React from 'react';
import useClassCard from '../../Hooks/useClassCard';
import ClassCard from './ClassCard';

const AllClass = () => {
            const [classes,refetch] = useClassCard();

            const approvedClasses = classes.filter(Class => Class.status == 'approved')
            
    return (
        <div className='my-10'>
                {/* <h1>         total claass  :{approvedClasses.length} </h1> */}


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 '>
                      {
                        approvedClasses.map((appProvedClass,index) => <ClassCard key={index} approvedClass ={appProvedClass}></ClassCard>)
                      }
                </div>
            
        </div>
    );
};

export default AllClass;