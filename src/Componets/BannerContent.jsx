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
           <div className="banner w-full min-h-screen  secondary_bg_color  flex gap-x-10 items-center justify-between" >

                        <div className="banner_cnt w-[45%] text-justify py-30 px-16 " data-aos='fade-up' data-aos-duration="1000">

                              
                               <AnimateTitle animateTtile={'welcome to academix'}></AnimateTitle>

                               <h1 className="text-5xl  my-6 secondary_text_color font-bold">  Start learning from
                               the world’s      <span className='primary_text_color font-normal'> best institutions </span>  </h1>


                               <div className="banner_btn mt-8 flex gap-6  ">
                                      <button className=" btn_primary ">get started</button>
                                      <button className=" btn_secondary">browse course</button>
                               </div>

                               <h2 className='capitalize text-2xl font-semibold mt-8 mb-4'> Explore  <span className='primary_text_color'> {classes?.length} +   </span>  course within subject</h2>


                          

                        </div> 

                        <div className="banner_img pr-17 relative">

                              <img src={img} alt="" className=' ' />

                                <motion.div className='animate_card pl-6 py-2 absolute top-50 -left-20' 
                                 animate={{
    x: [-20, 20, -20], // -20px থেকে 20px, তারপর আবার -20px (লুপের মতো)
  }}
  transition={{
       duration: 5, // ২ সেকেন্ডে সম্পূর্ণ অ্যানিমেশন হবে
       repeat: Infinity, // বারবার চলতে থাকবে
       repeatType: "reverse", // সামনে-পিছনে যাবে, বন্ধ হলে হঠাৎ বন্ধ হবে না
       ease: "easeInOut", // স্মুথ এফেক্ট
     }}
  >
         
                                       <div className='text-3xl font-bold primary_text_color'>
                                       <CountUp start={0} end={5000} duration={3} separator="" />
                                         +
                                         </div>
                                        <p>students</p>
                                </motion.div>
                        </div>


                 </div>
    );
};

export default BannerContent;