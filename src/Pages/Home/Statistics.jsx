import React, { useEffect } from 'react';
import { MdSettingsSuggest } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";

import img_1 from '../../assets/Statistics/quality.png'
import img_2 from '../../assets/Statistics/best-seller.png'

 
import statistics_img from '../../assets/banner-img/img-8.jpg'
import SectionTitle from '../../Common/SectionTitle';
import { Typewriter } from 'react-simple-typewriter';

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// react aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimateTitle from '../../Common/AnimateTitle';

const Statistics = () => {

    // aos init 
         useEffect(() => {
                          // Initialize AOS
              AOS.init({
                duration: 800, 
                once: false, // false করলে স্ক্রোল আপ/ডাউন করলে বারবার অ্যানিমেশন ট্রিগার হবে
                easing: 'linear', // 'ease' এর চেয়ে 'ease-in-out' বেশি স্মুথ
                offset: 80, // এলিমেন্ট ভিউপোর্টের ১২০px আগে অ্যানিমেশন শুরু হবে
                mirror: true, // স্ক্রোল ডাউনের পাশাপাশি স্ক্রোল আপেও অ্যানিমেশন দেখাবে
  
             
              });
                } , [])
    

    const { ref, inView } = useInView({
        triggerOnce: false, // একবার ট্রিগার হলে বারবার রিস্টার্ট হবে না
        threshold: 0.5, // ৫০% অংশ ভিউতে এলে কাউন্ট শুরু করবে
    });


    return (
        <div className='statistics grid grid-cols-1 lg:grid-cols-2 bg-[#182024] text-gray-300 px-2 md:px-5 py-16 my-12'>
              <div className="statistics_img relative mb-4">
                        <img src={statistics_img} alt="" className='w-full h-full rounded-2xl' />

                        <div className="cards flex gap-4 absolute bottom-[80px] px-6 hidden">
                            <div className='statistics_img_card flex'>
                                        <div className=''>
                                            
                                        <img src={img_1} alt="" className='w-[60px] mt-8' />    </div>                             
                                    <div className="card_cnt px-4">
                                        <h1 className='text-2xl capitalize font-semibold my-1'>most qualified teacher</h1>
          
          <p>Lorem ipsum dolor sit amet.</p>                            
                  </div>

                            </div>

                            <div className='statistics_img_card flex'>
                                              
                                            <div className=''><img src={img_2} alt="" className='w-[60px] mt-8' /> </div>                       
                                    <div className="card_cnt px-4">
                                        <h1 className='text-2xl capitalize font-semibold my-1'>best online course</h1>
          
          <p>Lorem ipsum dolor sit amet.</p>                                    </div>

                            </div>


                        </div>
              </div>

              <div className="statistics_cnt px-2 md:px-6">
                        

                             <AnimateTitle animateTtile={'why choose us'}></AnimateTitle>

                            <h1 className='text-3xl md:text-4xl font-semibold capitalize  my-4'>your ideal learning partner</h1>

                            <p className='my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sed aliquid repellendus culpa labore pariatur asperiores cumque illum minus reprehenderit.</p>

                            <div className="statistics_cards grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 px-7 pt-8">
                           

                                  <div className="card" data-aos='fade-left'>
                                     <h1 key={inView} ref={ref}>  <CountUp start={0} end={5000}  duration={3}></CountUp>  + </h1>
                                     <p>satisfied students</p>
                                  </div>

                                  <div className="card" data-aos='fade-left' data-aos-delay='100'>
                                   <h1 key={inView} ref={ref}> <CountUp start={0} end={20}  duration={3}></CountUp>  + </h1>
                                     <p>years exprerience</p>
                                  </div>

                                  <div className="card" data-aos='fade-left' data-aos-delay='200'>
                         <h1 key={inView} ref={ref}> <CountUp start={0} end={15}  duration={3}></CountUp>  + </h1>
                                     <p>faculty course</p>
                                  </div>

                                  <div className="card" data-aos='fade-left' data-aos-delay='300'>
                       <h1 key={inView} ref={ref}> <CountUp start={0} end={100}  duration={3}></CountUp>  + </h1>
                                     <p>Teacher</p>
                                  </div>

                            </div>
              </div>
        </div>
    );
};

export default Statistics;