import React from 'react';

const SectionTitle = ({title,subTitle}) => {
    return (
        <div className='text-center font-semibold'>
            <h1 className='text-2xl font-bold my-4 capitalize'>{title} </h1>
            <h1>{subTitle} </h1>
        </div>
    );
};

export default SectionTitle;