import React from 'react';
import image from '../assets/banner-img/img-1.jpg'

const CoverImg = ({title}) => {
    return (
        <div className='cover__img w-full h-[250px] relative'  style={
            {
            backgroundImage : `url(${image})`,
            backgroundSize : 'cover',
            backgroundRepeat : 'no-repeat',
            backgroundPosition : 'center',
          
            }
            }>

                <h1 className='absolute top-26 left-36 text-white text-5xl capitalize'> {title} </h1>
              
        </div>
    );
};

export default CoverImg;