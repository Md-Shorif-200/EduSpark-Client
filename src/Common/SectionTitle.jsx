import React from 'react';

const SectionTitle = ({title,subTitle}) => {
    return (
        <div className='text-center font-semibold'>
            <h3 className='text-justify capitalize my-3'>{subTitle} </h3>
            <h1 className='text-3xl md:text-4xl font-semibold capitalize text-justify'>{title} </h1>
        </div>
    );
};

export default SectionTitle;