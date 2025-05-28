import React, { useEffect } from 'react';


// react aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';


// react type-writer
import { Typewriter } from 'react-simple-typewriter'


import useClass from '../Hooks/useClass';
import { motion } from "framer-motion";
import AnimateTitle from '../Common/AnimateTitle';
import CountUp from 'react-countup';

import shape_1 from '../assets/banner-img/hero-shape-2.png'
import shape_2 from '../assets/banner-img/hero-shape-3.png'


const BannerContent = ({subTitle,title,description,img}) => {

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

       //    get all class 

       const  [classes,refetch,isLoading]  = useClass()

    return (
         <div className='px-3 pt-8 lg:pt-0 sm:px-6 md:px-16 2xl:px-22 secondary_bg_color'>
                <div className="banner w-full lg:min-h-screen 2xl:min-h-[800px]  lg:flex gap-x-10 items-center justify-between  "  >

                        <div className="banner_cnt w-full lg:w-[50%] text-justify lg:pr-20 relative" data-aos='fade-up' data-aos-duration="1000">

                              
                               <AnimateTitle animateTtile={'welcome to academix'}></AnimateTitle>

                               <h1 className="text-3xl md:text-4xl lg:text-5xl  my-6 secondary_text_color font-bold">  Education Is About    <span className='primary_text_color font-normal'>Academic Excellence   </span>  </h1>


                               <div className="banner_btn mt-8 flex gap-6  ">
                              
                                      <button className=" btn_secondary uppercase">GET STARTED</button>
                               </div>

                               <h2 className='capitalize text-2xl font-semibold mt-8 mb-4'> Explore  <span className='primary_text_color'> {classes?.length} +   </span>  course within subject</h2>

                                <motion.img src={shape_1} alt="" className="absolute left-1/12 hidden lg:block"
                                
                                 animate={{
    x: [-10, 10, -10], // -20px থেকে 20px, তারপর আবার -20px (লুপের মতো)
  }}
  transition={{
       duration: 5, // ২ সেকেন্ডে সম্পূর্ণ অ্যানিমেশন হবে
       repeat: Infinity, // বারবার চলতে থাকবে
       repeatType: "reverse", // সামনে-পিছনে যাবে, বন্ধ হলে হঠাৎ বন্ধ হবে না
       ease: "easeInOut", // স্মুথ এফেক্ট
     }}
                                />




                          

                        </div> 

                        <div className="banner_img lg:w-[50%] lg:min-h-screen 2xl:min-h-[800px]  p-4  relative  flex lg:justify-end  pt-8 sm:pt-16 md:pt-22 lg:pt-0">

                              <div className='  flex lg:items-center '>
                                   <img src={img} alt="" className='md:w-[80%] lg:w-full mx-auto z-10  rounded-2xl' />
                              </div>

                                <motion.div className='animate_card bg-white w-[150px] py-2 pl-4 rounded-md absolute top-16 -left-4 md:top-60 2xl:top-80 md:-left-10 z-20' 
                                 animate={{
    x: [-10, 10, -10], // -20px থেকে 20px, তারপর আবার -20px (লুপের মতো)
  }}
  transition={{
       duration: 5, // ২ সেকেন্ডে সম্পূর্ণ অ্যানিমেশন হবে
       repeat: Infinity, // বারবার চলতে থাকবে
       repeatType: "reverse", // সামনে-পিছনে যাবে, বন্ধ হলে হঠাৎ বন্ধ হবে না
       ease: "easeInOut", // স্মুথ এফেক্ট
     }}
  >
         
                                       <div className='text-3xl font-bold primary_text_color '>
                                       <CountUp start={0} end={5000} duration={3} separator="" />
                                         +
                                         </div>
                                        <p>students</p>
                                </motion.div>


                                <img src={shape_2} alt="" className='w-full sm:w-[80%] md:w-[70%] lg:w-[100%] absolute left-0 bottom-0 z-0' />
                        </div>


                 </div>
         </div>
    );
};

export default BannerContent;