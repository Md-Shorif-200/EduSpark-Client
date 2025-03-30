import React, { useEffect } from 'react';
// react aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';


// react type-writer
import { Typewriter } from 'react-simple-typewriter'

const BannerContent = ({subTitle,title,description,img}) => {

       useEffect(() => {
                    // Initialize AOS
        AOS.init({
          duration: 1000, // Duration of animation in milliseconds
          once: true, // Whether animation should happen only once
          easing: 'ease', // Easing function for the animation
        });
          } , [])

    return (
           <div className="banner w-full min-h-screen bg-cover bg-center bg-no-repeat " style={{backgroundImage : `url(${img})`}}>

                        <div className="banner_cnt w-[45%] text-justify py-30 px-16 " data-aos='fade-up' data-aos-duration="1000">

                               <h6 className="section_heading"> {subTitle}
{/*                                 
                                    <Typewriter
                                       words={[`${subTitle}`]}
                                       loop = {0}
                                        cursor
                                        cursorStyle='__'
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    ></Typewriter> */}
                               </h6>
                               <h1 className="text-5xl   font-semibold my-6 primary_text_color">{title}</h1>
                               <p className=" text-white"> {description} </p>

                               <div className="banner_btn mt-8 flex gap-6  ">
                                      <button className="btn btn_primary ">get started</button>
                                      <button className="btn btn_secondary">browse course</button>
                               </div>
                        </div>
                      

                 </div>
    );
};

export default BannerContent;