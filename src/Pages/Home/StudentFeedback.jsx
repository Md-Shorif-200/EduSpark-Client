import React from 'react';

const StudentFeedback = ({feedback}) => {
     const {studentName,studentImage,courseTitle,teacherName, feedbackDescription , feedbackStar} = feedback;
    return (
        <div>
            <div className="card w-[60%] h-[200px] mx-auto  bg-base-100 card-xs shadow-lg">
  <div className="card-body text-center capitalize">
                        <img src={studentImage} className='w-[80px] h-[80px] mx-auto rounded-full' alt="" />
                    <h1 className='text-xl font-bold '> {studentName} </h1>

                      <div className="feedback_desc">
                         <h1  className='text-lg font-semibold'>  successfully complete  {courseTitle} course </h1>
                         <p className='text-gray-700 text-md font-semibold'>   {feedbackDescription} </p>
                      </div>

   
  </div>
</div>
        </div>
    );
};

export default StudentFeedback;