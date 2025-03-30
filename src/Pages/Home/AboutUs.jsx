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

import lottie_animation from '../../../src/assets/lottie react/about_us.json'
import Lottie from 'lottie-react';

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
        <div className='grid grid-cols-2 gap-x-8 px-16  mb-4 items-center'>

<div className="about_us_cnt">
                    <h6 className='secondary_text_color  text-[16px] uppercase font-bold'>
                    <Typewriter
                                       words={['about us']}
                                       loop = {0}
                                        cursor
                                        cursorStyle='__'
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    ></Typewriter>

                    </h6>
                    <h1 className='text-5xl  text_color_2 font-semibold my-4 leading-16'>
                    Empowering Minds Shaping Futures
                    </h1>

                    <p className='text_color_2 mt-3 mb-5'>At Academix, we believe that quality education should be accessible to everyone. Our expert-led courses are designed to help learners gain real-world skills and advance their careers. Join us in shaping a future where knowledge knows no boundaries!</p>

                    <div className="about_checkmark grid grid-cols-2 gap-6">
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

                     <div>
                          <button className='btn primary_bg_color text-white uppercase mt-8'>learn more</button>
                     </div>
            </div>

{/* <div className="about_us_img ">
                     <div className='grid grid-cols-2  gap-6'>
                         <img src={img1} alt="" className=' w-full h-full row-span-3 rounded-2xl' data-aos='fade-left' data-aos-delay = '100' />
                         <img src={img3} alt="" className=' w-full row-span-2  rounded-2xl' data-aos='fade-left' data-aos-delay = '200' />
                         <img src={img2} alt="" className=' w-full  rounded-2xl' data-aos='fade-left' data-aos-delay = '300' />
                     </div>
            </div> */}

            <div className="about_us_animation w-full" data-aos='fade-left' data-aos-delay = '100'>
                <Lottie animationData={lottie_animation}></Lottie>
            </div>

         

          
            
        </div>
    );
};

export default AboutUs;