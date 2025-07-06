import React from 'react';
import banner_img from '../../assets/banner-img/banner_1.jpg'
       
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import img_1  from '../../assets/banner-img/banner_img_1.jpg'
import img_3  from '../../assets/banner-img/banner_img_3.jpg'




const Banner = () => {

    return (
        <div className='banner_section w-full h-[80vh] px-4 sm:px-6 md:px-16 2xl:px-22 bg-gradient-to-br from-[#39b8ae41] via-transparent to-transparent'>

          <div className=' w-full h-full grid grid-cols-1 md:grid-cols-2 items-center   '>
              <div className="banner_info">
                        <h3 className='bg-[#39B8AD] w-[35%] px-4 py-1  text-lg text-white rounded-2xl capitalize'> 33% off today </h3>
                  <h1 className='text-6xl font-semibold my-6'>Education is Create  <br /> Better <span>Future</span></h1>
                   <p className='secondary_text_color capitalize text-lg'> Join 500+ of companies actively hiring our students.</p>

                            <div className="banner_btn flex gap-x-3   my-3 ">
                                     <button className=" btn_1 uppercase"> <span>Start learning</span> </button>
                                     <button className="btn_2 uppercase text-black "> <span>join free seminer</span> </button>
                            </div>

                 
            </div>
            <div className="banner_img relative ">
                    <motion.img
                     layout
                    initial = {{x : 0}}
                    animate = {{x : 20}}
                    transition={ {type : 'tween',duration: 4, repeat : Infinity , repeatType : 'reverse', ease : 'easeInOut'}}
                    src={img_1} className='w-[55%] h-[280px] absolute top-32 left-32 transform  -translate-y-1/2 rounded-3xl z-20 drop-shadow-lg' alt="" />
                    
                    <motion.img
                     layout
                     initial={{y : 0}}
                    animate = {{y : -20}}
                    transition={{ type : 'tween', duration : 4, repeat : Infinity,repeatType :'reverse',ease :'easeInOut' }}
                    
                    src={img_3} className='w-[55%] h-[280px] absolute top-0 left-0 transform  -translate-y-1/2 rounded-3xl z-10 opacity-90 drop-shadow-lg' alt="" />

            </div>
          </div>
              


        </div>
            
        );
};

export default Banner;





{/* <BannerContent className='' img={banner_img} subTitle={'welcome to EduSpark'} title= {""} description={"Join thousands of learners worldwide and gain in-demand skills with our high-quality online courses. Start learning today and take your career to the next level!"}></BannerContent>                     */}
            