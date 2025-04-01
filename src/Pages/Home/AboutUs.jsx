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
            duration: 800, // কম ডুরেশন = স্মুথার এফেক্ট (১৫০০ms থেকে ১২০০ms বা ১০০০ms এ নামান)
            once: false, // false করলে স্ক্রোল আপ/ডাউন করলে বারবার অ্যানিমেশন ট্রিগার হবে
            easing: 'ease-in-out', // 'ease' এর চেয়ে 'ease-in-out' বেশি স্মুথ
            offset: 120, // এলিমেন্ট ভিউপোর্টের ১২০px আগে অ্যানিমেশন শুরু হবে
            mirror: true, // স্ক্রোল ডাউনের পাশাপাশি স্ক্রোল আপেও অ্যানিমেশন দেখাবে
        });
          } , [])

    return (
        <div className='grid grid-cols-2 gap-x-8 px-16  mb-4 items-center'>

<div className="about_us_cnt" data-aos='fade-right' data-aos-delay='100'>
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
                    <h1 className='text-5xl  secondary_text_color font-semibold my-4 leading-16'>
                    Empowering Minds Shaping Futures
                    </h1>

                    <p className='secondary_text_color mt-3 mb-5'>At Academix, we believe that quality education should be accessible to everyone. Our expert-led courses are designed to help learners gain real-world skills and advance their careers. Join us in shaping a future where knowledge knows no boundaries!</p>

                    <div className="about_checkmark grid grid-cols-2 gap-6 secondary_text_color">
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
                          <button className='btn btn_primary uppercase mt-8'>learn more</button>
                     </div>
            </div>

{/* <div className="about_us_img ">
                     <div className='grid grid-cols-2  gap-6'>
                         <img src={img1} alt="" className=' w-full h-full row-span-3 rounded-2xl' data-aos='fade-left' data-aos-delay = '100' />
                         <img src={img3} alt="" className=' w-full row-span-2  rounded-2xl' data-aos='fade-left' data-aos-delay = '200' />
                         <img src={img2} alt="" className=' w-full  rounded-2xl' data-aos='fade-left' data-aos-delay = '300' />
                     </div>
            </div> */}

            <div className="about_us_animation w-full" data-aos='fade-left' data-aos-delay='600'>
                <Lottie animationData={lottie_animation}></Lottie>
            </div>

         

          
            
        </div>
    );
};

export default AboutUs;