import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// react aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from 'react-icons/fa';



const ClassCard = ({approvedClass}) => {

  // aos init 
     useEffect(() => {
                      // Initialize AOS
          AOS.init({
            duration: 1200, // কম ডুরেশন = স্মুথার এফেক্ট (১৫০০ms থেকে ১২০০ms বা ১০০০ms এ নামান)
            once: false, // false করলে স্ক্রোল আপ/ডাউন করলে বারবার অ্যানিমেশন ট্রিগার হবে
            easing: 'ease-in-out', // 'ease' এর চেয়ে 'ease-in-out' বেশি স্মুথ
            offset: 120, // এলিমেন্ট ভিউপোর্টের ১২০px আগে অ্যানিমেশন শুরু হবে
            delay: 100, // প্রতিটি এলিমেন্টের অ্যানিমেশনে ১০০ms ডিলে যোগ করুন
            mirror: true, // স্ক্রোল ডাউনের পাশাপাশি স্ক্রোল আপেও অ্যানিমেশন দেখাবে
          });
            } , [])

     const {title,name ,email, price ,description, status , image,_id,duration,totalEnrollments} = approvedClass;
    return (
        <div className='populer_course_card' data-aos='fade-up'>

<div className="class_card bg-base-100 w-full">
  <figure>
    <img
      src={image}
       className='w-full h-[160px]'
      alt="class image" />
  </figure>
  <div className=" capitalize px-2 py-3">
    <h2 className="text-lg font-bold  my-2 secondary_text_color "> {title} </h2>
    {/* <h2 className="text-lg font-bold  my-2"> {totalEnrollments} </h2> */}
    {/* <h1 className='text-md font-semibold'> teacher :  <span className='text-gray-600'>{name}</span> </h1> */}
    <h1 className='text-md font-semibold secondary_text_color '><span className='text-gray-600'>{price} $</span> </h1>
    {/* <h1 className='text-md font-semibold'><span className='text-gray-600'>{duration}</span> </h1> */}

    {/* <h1 className='text-md font-semibold'> course outline : <span className='text-gray-600'>{description}</span> </h1> */}
    {/* <h1 className='text-md font-semibold'> total enrollment :    </h1> */}
    <div className="card-actions justify-end">
      <Link to={`/allClass/classDetails/${_id}`} className="text-[#F4B400]" >Enroll  </Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ClassCard;