import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({approvedClass}) => {
     const {title,name ,email, price ,description, status , image,_id,duration} = approvedClass;
    return (
        <div className='populer_course_card'>

<div className="class_card bg-base-100 w-full ">
  <figure>
    <img
      src={image}
       className='w-full h-[160px]'
      alt="class image" />
  </figure>
  <div className=" capitalize">
    <h2 className="text-lg font-bold  my-2"> {title} </h2>
    {/* <h1 className='text-md font-semibold'> teacher :  <span className='text-gray-600'>{name}</span> </h1> */}
    <h1 className='text-md font-semibold'><span className='text-gray-600'>{price} $</span> </h1>
    {/* <h1 className='text-md font-semibold'><span className='text-gray-600'>{duration}</span> </h1> */}

    {/* <h1 className='text-md font-semibold'> course outline : <span className='text-gray-600'>{description}</span> </h1> */}
    {/* <h1 className='text-md font-semibold'> total enrollment :    </h1> */}
    <div className="card-actions justify-end">
      <Link to={`/allClass/classDetails/${_id}`} className="btn primary_bg_color text-white" >Enroll </Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ClassCard;