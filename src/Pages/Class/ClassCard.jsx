import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// react aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

// react icons
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { FaHeart } from "react-icons/fa";




const ClassCard = ({approvedClass}) => {

  // aos init 
     useEffect(() => {
                      // Initialize AOS
          AOS.init({
            duration: 1200, 
            once: false, 
            easing: 'ease-in-out', 
            offset: 120, 
            delay: 100, 
            mirror: true, 
          });
            } , [])
            
      //  get student feedback data
        const axiosSecure = useAxiosSecure();
       const [feedback,setFeedback] = useState([]);

       useEffect(() => {
        axiosSecure.get('/feedback')
          .then(res => {
            setFeedback(res.data); 
          })
          .catch(error => {
            console.log("Error fetching feedback:", error);
          });
      }, []);

       const studentFeedback = feedback.find(data => data.title == approvedClass.title);
        console.log(studentFeedback);
        
      
// get class data 
     const {_id,title,name ,email, price ,description, status , image,duration,totalEnrollments,totalLectures,totalProjects,courseCurriculam} = approvedClass;

    return (
              // course card
        <div className='populer_course_card'>

<div className="class_card bg-base-100 w-full">
  <figure>
    <img
      src={image}
       className='w-full h-[170px]'
      alt="class image " />
  </figure>
  <div className=" card_cnt capitalize px-2 py-2">
    <h2 className="text-lg font-bold secondary_text_color "> {title} </h2>
      <ul className='flex gap-1 text-md my-1'>
        <li className='primary_text_color'>  <FaStar></FaStar> </li>
        <li className='primary_text_color'>  <FaStar></FaStar> </li>
        <li className='primary_text_color'>  <FaStar></FaStar> </li>
        <li className='primary_text_color'>  <FaStar></FaStar> </li>
        <li className='primary_text_color'>  <FaStarHalfAlt></FaStarHalfAlt> </li>
      </ul>

        <div className='flex justify-between my-2'>
        <h1 className='text-md font-semibold secondary_text_color '><span className='text-gray-600'>$ {price} </span> </h1>
          <ul className='flex items-center gap-x-1'>
            <li> <IoTimeOutline></IoTimeOutline> </li>
        <li className='text-md font-semibold secondary_text_color'><span className='text-gray-600'>{duration} month </span> </li>
   
          </ul>

          <ul className='flex items-center gap-x-1'>
            <li> <GoProjectSymlink></GoProjectSymlink> </li>
        <li className='text-md font-semibold secondary_text_color'><span className='text-gray-600'>{totalProjects}+ projects </span> </li>
   
          </ul>
        </div>

    <div className="card-actions justify-end">
        <button className="btn btn-sm btn-outline btn-accent tooltip"  data-tip="Add To Favourite"> <FaHeart></FaHeart> </button>

      <Link to={`/allClass/classDetails/${_id}`} className="btn btn-sm btn-outline btn-accent" >view course  </Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ClassCard;