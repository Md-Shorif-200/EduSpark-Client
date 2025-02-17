import React from 'react';
import { Link } from 'react-router-dom';

const ClassCard = ({approvedClass}) => {
     const {title,name ,email, price ,description, status , image,_id} = approvedClass;
    return (
        <div>

<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <h1> {name} </h1>
    <h1> {price} </h1>
    <h1> {description} </h1>
    <h1> total Enrollment  </h1>
    <div className="card-actions justify-end">
      <Link to={`/classDetails/${_id}`} className="btn" >Enroll </Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ClassCard;