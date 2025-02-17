import React from 'react';
import useClassCard from '../../Hooks/useClassCard';
import ClassCard from './ClassCard';

const AllClass = () => {
            const [classes,refetch] = useClassCard();

            const approvedClasses = classes.filter(Class => Class.status == 'approved')
            
    return (
        <div>
                <h1>         total claass  :{approvedClasses.length} </h1>


                <div className='grid grid-cols-3 gap-14'>
                      {
                        approvedClasses.map((appProvedClass,index) => <ClassCard key={index} approvedClass ={appProvedClass}></ClassCard>)
                      }
                </div>
            
        </div>
    );
};

export default AllClass;