import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdCheck } from 'react-icons/md';
// react aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../assets/about_us/low-angle-business-people-posing.jpg'
import img2 from '../../assets/about_us/woman-work-having-video-call.jpg'
import img3 from '../../assets/about_us/youngsters-coworking-with-laptop.jpg'

const AboutUs = () => {

         useEffect(() => {
                    // Initialize AOS
        AOS.init({
          duration: 1000, // Duration of animation in milliseconds
          once: true, // Whether animation should happen only once
          easing: 'ease', // Easing function for the animation
        });
          } , [])

    return (
        <div className='grid grid-cols-2 gap-8 px-16 my-8'>

<div className="about_us_cnt">
                    <h6 className='secondary_text_color  text-[14px] uppercase font-bold'>about us</h6>
                    <h1 className='text-5xl  text_color_2 font-semibold my-4 leading-16'>
                    Empowering Minds Shaping Futures
                    </h1>

                    <p className='text_color_2 mt-3 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus ipsa nemo in sapiente pariatur?</p>

                    <div className="about_checkmark grid grid-cols-2 gap-6">
                          <div>
                              <p className='flex items-center  gap-x-3'> <span className='primary_text_color text-xl'><FaCheckCircle></FaCheckCircle> </span>  Innovative Learning    </p>
                          </div>
                          
                          <div>
                              <p className='flex items-center  gap-x-3'> <span className='primary_text_color text-xl'><FaCheckCircle></FaCheckCircle> </span>  Unlimited Access    </p>
                          </div>

                          <div>
                              <p className='flex items-center  gap-x-3'> <span className='primary_text_color text-xl'><FaCheckCircle></FaCheckCircle> </span>  Superior Results    </p>
                          </div>

                          <div>
                              <p className='flex items-center  gap-x-3'> <span className='primary_text_color text-xl'><FaCheckCircle></FaCheckCircle> </span>  Digital Education    </p>
                          </div>
                    </div>

                     <div>
                          <button className='btn primary_bg_color text-white uppercase mt-8'>learn more</button>
                     </div>
            </div>

<div className="about_us_img ">
                     <div className='grid grid-cols-2  gap-6'>
                         <img src={img1} alt="" className=' w-full h-full row-span-3 rounded-2xl' data-aos='fade-left' data-aos-delay = '100' />
                         <img src={img3} alt="" className=' w-full row-span-2  rounded-2xl' data-aos='fade-left' data-aos-delay = '200' />
                         <img src={img2} alt="" className=' w-full  rounded-2xl' data-aos='fade-left' data-aos-delay = '300' />
                     </div>
            </div>

         

          
            
        </div>
    );
};

export default AboutUs;