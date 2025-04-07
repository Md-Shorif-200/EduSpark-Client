
import React from 'react';


const Faculty = ({facultyData}) => {

    const {icon,title,description} = facultyData;



     

     return (

        <div className="faculty_card card bg-base-100 rounded-lg my-10 overflow-hidden ">
  <div className="card-body text-center">
        <img src={icon} alt="faculty icon" className="w-[50px] mx-auto" />
    <h2 className="capitalize text-lg my-3 font-bold"> {title} </h2>
  </div>
</div>
   
  );

};

export default Faculty;