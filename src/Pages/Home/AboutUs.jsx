import React, { useEffect } from 'react';
import { FaCheckCircle, FaVideo } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";


// react aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';


// react type-writer
import { Typewriter } from 'react-simple-typewriter'

import img1 from '../../assets/about_us/about-img-1.jpg'
import img2 from '../../assets/about_us/about-img-2.jpg'
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
        <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-x-8 px-2 md:px-16  mb-4 items-center mt-14 md:mt-16 '>

<div className="about_us_img md:flex gap-x-6" >

                    <div className="img_1">
                              <div className='relative'>
                                 <img src={img1} alt="" className=' w-full sm:w-[80%] md:w-full mx-auto  rounded-tr-[60px] rounded-bl-[60px]' />
                                        <div className="video_icon absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-4  bg-white rounded-full primary_text_color text-3xl">
                                            <MdSlowMotionVideo></MdSlowMotionVideo>      
                                </div>
                              </div>



                            <div className="online_support sm:w-[80%] md:w-full  mx-auto primary_bg_color text-white my-4 py-6 px-8 rounded-tr-[60px] rounded-bl-[60px]">

                                        <div className='flex items-center gap-x-4'>

                                               <div className='p-2 bg-white rounded-full primary_text_color text-2xl'>
                                                 <MdOutlinePhoneInTalk></MdOutlinePhoneInTalk>
                                               </div>
                                   

                                            <div>
                                   <h2 className=' font-semibold uppercase'>online support</h2>
                                    <p className='font-semibold'>+88 01972144240</p>

                                            </div>
                                        </div>

                            </div>

                    </div>
                    <div className="img_2 flex justify-end  items-end">
                      <img src={img2} alt="" className=' w-full sm:w-[80%] md:w-full mx-auto  rounded-tl-[60px] rounded-br-[60px]' />

                    </div>
               </div>
   

         <div className="about_us_cnt mt-8">
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