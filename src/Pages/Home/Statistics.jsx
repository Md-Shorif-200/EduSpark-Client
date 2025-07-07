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

 
    

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.5, 
    });


    return (
        <div className='statistics grid grid-cols-1 lg:grid-cols-2 bg-[#182024] text-gray-300 px-2 md:px-5 py-16 mt-12 overflow-hidden '>
              <div className="statistics_img w-full h-full relative mb-4  ">
                        <img src={statistics_img} alt="" className='w-full h-auto rounded-2xl' />

                  
              </div>

              <div className="statistics_cnt px-2 md:px-6">
                        

                              <h3 className='common_section_intro'>  why choose us </h3>

                            <h1 className='text-3xl md:text-4xl font-semibold capitalize  my-4'>your ideal learning partner</h1>

                                <p className="my-2">With over 10 years of excellence in education, we’ve empowered 5,000+ students through expert-led courses and personalized learning support. Our 100+ qualified instructors and 15+ specialized programs ensure a high-impact learning experience tailored to your goals.</p>
                            <div className="statistics_cards grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 px-2 pt-8">
                           

                                  <div className="card" data-aos='fade-left'>
                                     <h1 key={inView} ref={ref}>  <CountUp start={0} end={5000}  duration={3}></CountUp>  + </h1>
                                     <p>satisfied students</p>
                                  </div>

                                  <div className="card" data-aos='fade-left' data-aos-delay='100'>
                                   <h1 key={inView} ref={ref}> <CountUp start={0} end={10}  duration={3}></CountUp>  + </h1>
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