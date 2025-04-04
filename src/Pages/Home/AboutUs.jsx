import React, { useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";

// react aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';


// react type-writer
import { Typewriter } from 'react-simple-typewriter'

import img1 from '../../assets/about_us/low-angle-business-people-posing.jpg'
import img2 from '../../assets/about_us/woman-work-having-video-call.jpg'
import img3 from '../../assets/about_us/youngsters-coworking-with-laptop.jpg'

import lottie_animation from '../../../src/assets/lottie react/about_lottie_animation.json'
import Lottie from 'lottie-react';
import AnimateTitle from '../../Common/AnimateTitle';

const AboutUs = () => {

         useEffect(() => {
                    // Initialize AOS
        AOS.init({
            duration: 800, 
            once: false, 
            easing: 'ease-in-out', 
            offset: 120,
            mirror: true,
        });
          } , [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-8 px-2 md:px-16  mb-4 items-center mt-14 md:mt-16'>

<div className="about_us_animation" >
                    <Lottie animationData={lottie_animation}></Lottie>
               </div>
   

         <div className="about_us_cnt">
                        <AnimateTitle animateTtile={'get more about us'}></AnimateTitle>
                    <h1 className='text-3xl md:text-4xl  secondary_text_color font-semibold my-6 leading-10  md:leading-16' data-aos='fade-up'>
                    Over 10 Years in Distant learning
for Skill Development
                    </h1>

                    <p className='secondary_text_color mt-3 mb-5' data-aos='fade-up' data-aos-delay='100'>At Academix, we believe that quality education should be accessible to everyone. Our expert-led courses are designed to help learners gain real-world skills and advance their careers. Join us in shaping a future where knowledge knows no boundaries!</p>

                    <div className="about_checkmark grid grid-cols-2 gap-6 secondary_text_color" data-aos='fade-up' data-aos-delay='200'>
                          <div>
                              <p className='flex items-center  gap-x-3'> <span className=' text-xl'><FaCheckCircle></FaCheckCircle> </span>  Innovative Learning    </p>
                          </div>
                          
                          <div>
                              <p className='flex items-center  gap-x-3'> <span className=' text-xl'><FaCheckCircle></FaCheckCircle> </span>  Unlimited Access    </p>
                          </div>

                          <div>
                              <p className='flex items-center  gap-x-3'> <span className=' text-xl'><FaCheckCircle></FaCheckCircle> </span>  Superior Results    </p>
                          </div>

                          <div>
                              <p className='flex items-center  gap-x-3'> <span className=' text-xl'><FaCheckCircle></FaCheckCircle> </span>  Digital Education    </p>
                          </div>
                    </div>

                     <div data-aos='fade-up' data-aos-delay='300'>
                          <button className='btn btn_secondary  uppercase mt-8'>learn more</button>
                     </div>
            </div>

            
         

          
            
        </div>
    );
};

export default AboutUs;