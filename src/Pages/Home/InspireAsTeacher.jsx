import React from 'react';
import inspireImg  from '../../assets/InspireTeacher/teacher-6831688_640.webp'

const InspireAsTeacher = () => {

    return (
        <div  className='inspire_teacher w-full h-full my-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6'>
             <div className='inspire_img'>
            <img src={inspireImg} className='w-full h-full  lg:h-[300px] rounded-md' alt="" />
             </div>

             <div className="inspire_cnt">

             <div className=" w-full h-full shadow-sm">
  <div className="card-body h-full">
    <h2 className="text-xl font-bold capitalize">Share Your Knowledge, Shape the Future</h2>
    <p className='text-lg my-4'>  Join our platform and become a beacon of knowledge and inspiration. Connect with eager students, create transformative courses, and make a real impact. Let’s build the future of education together!
</p>
    <div className="card-actions justify-end">
      <button className="btn common_bg_color_1 text-white uppercase">become a teacher </button>
    </div>
  </div>

</div>
             </div>
        </div>
    );
};

export default InspireAsTeacher;