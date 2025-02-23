import React from 'react';

const EnrollmentCard = ({myPayment}) => {
     const {courseTitle,TeacherName,courseBanner} = myPayment
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img className='w-full h-[150px]'
      src={courseBanner}
      alt="course Image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{courseTitle} </h2>
    <h1 className='text-xl  my-2'>   Teacher  Name : {TeacherName} </h1>
    
    <div className="card-actions justify-end">
      <button className="btn common_bg_color_1 text-white w-full">continue</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default EnrollmentCard;