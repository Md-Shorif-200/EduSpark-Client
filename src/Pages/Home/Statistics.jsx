import React from 'react';
import { MdSettingsSuggest } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";

import img_1 from '../../assets/Statistics/quality.png'
import img_2 from '../../assets/Statistics/best-seller.png'

 
import statistics_img from '../../assets/banner-img/img-8.jpg'
import SectionTitle from '../../Common/SectionTitle';
import { Typewriter } from 'react-simple-typewriter';

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistics = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, // একবার ট্রিগার হলে বারবার রিস্টার্ট হবে না
        threshold: 0.5, // ৫০% অংশ ভিউতে এলে কাউন্ট শুরু করবে
    });


    return (
        <div className='statistics grid grid-cols-2 bg-red-400 px-5 py-16'>
              <div className="statistics_img relative">
                        <img src={statistics_img} alt="" className='w-full h-full rounded-2xl' />

                        <div className="cards flex gap-4 absolute bottom-[80px] px-6">
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

              <div className="statistics_cnt px-6">
                        

                            <h3 className='text-justify font-semibold capitalize my-3'>
                            <Typewriter
                                       words={['why choose us']}
                                       loop = {0}
                                        cursor
                                        cursorStyle='__'
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    ></Typewriter>
                            </h3>

                            <h1 className='text-4xl font-semibold capitalize text-justify'>your ideal learning partner</h1>

                            <p className='my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sed aliquid repellendus culpa labore pariatur asperiores cumque illum minus reprehenderit.</p>

                            <div className="statistics_cards grid grid-cols-2 gap-10 px-7 pt-8">
                           

                                  <div className="card">
                                     <h1 ref={ref}>{inView ? <CountUp start={0} end={5000} duration={3}></CountUp> : '0'} + </h1>
                                     <p>satisfied students</p>
                                  </div>

                                  <div className="card">
                                   <h1 ref={ref}>{inView ? <CountUp start={0} end={20} duration={5}></CountUp> : '0'} + </h1>
                                     <p>years exprerience</p>
                                  </div>

                                  <div className="card">
                         <h1 ref={ref}>{inView ? <CountUp start={0} end={15} duration={5}></CountUp> : '0'} + </h1>
                                     <p>faculty course</p>
                                  </div>

                                  <div className="card">
                       <h1 ref={ref}>{inView ? <CountUp start={0} end={100} duration={4}></CountUp> : '0'} + </h1>
                                     <p>Teacher</p>
                                  </div>

                            </div>
              </div>
        </div>
    );
};

export default Statistics;