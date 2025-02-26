import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({approvedClass}) => {
     const {title,name ,email, price ,description, status , image,_id} = approvedClass;
    return (
        <div>

<div className="card bg-base-100 w-full shadow-sm ">
  <figure>
    <img
      src={image}
       className='w-full h-[200px]'
      alt="class image" />
  </figure>
  <div className="card-body capitalize">
    <h2 className="text-lg font-bold"> {title} </h2>
    <h1 className='text-md font-semibold'> teacher :  <span className='text-gray-600'>{name}</span> </h1>
    <h1 className='text-md font-semibold'> course fee : <span className='text-gray-600'>{price} $</span> </h1>
    <h1 className='text-md font-semibold'> course outline : <span className='text-gray-600'>{description}</span> </h1>
    <h1 className='text-md font-semibold'> total enrollment :    </h1>
    <div className="card-actions justify-end">
      <Link to={`/allClass/classDetails/${_id}`} className="btn common_bg_color_1 text-white" >Enroll </Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ClassCard;