import React from "react";
import banner_img from "../../assets/banner-img/banner_1.jpg";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import img_1 from "../../assets/banner-img/banner_img_1.jpg";
import img_3 from "../../assets/banner-img/banner_img_3.jpg";

const Banner = () => {
    const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdUp(window.innerWidth >= 1024); // Tailwind's 'md' breakpoint
    };

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="banner_section w-full h-[80vh] md:h-[70vh] lg:h-[90vh]  common_padding bg-gradient-to-br from-[#39b8ae41] via-transparent to-transparent">
      <div className=" w-full h-full  pt-10  lg:pt-0 lg:flex gap-x-3 items-center   ">
            {/* banner info section  */}
        <div className="banner_info w-full lg:w-[50%]  mb-36  md:mb-16  lg:mb-0"  data-aos='fade-right'>
          <h3 className="common_section_intro">
            {" "}
            33% off today{" "}
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold my-6">
            Education is Create <br /> Better <span>Future</span>
          </h1>
          <p className="secondary_text_color capitalize text-lg">
            {" "}
            Join 500+ of companies actively hiring our students.
          </p>

          <div className="banner_btn  md:flex  gap-x-3   my-3 ">
            <button className=" primary_btn w-full md:w-[40%] lg:w-[30%] my-2 uppercase">
              {" "}
              <span>Start learning</span>{" "}
            </button>
            <button className="secondary_btn w-full md:w-[40%] lg:w-[30%] my-2 uppercase  ">
              {" "}
              <span>join free seminer</span>{" "}
            </button>
          </div>
        </div>

        {/* banner img section  */}
        <div className="banner_img w-full lg:w-[50%] relative ">
          <motion.img
            layout
      initial={{ x: 0 }}
      animate={isMdUp ? { x: 20 } : { x: 0 }}
      transition={
        isMdUp
          ? {
              type: "tween",
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }
          : { duration: 0 }
      }
            src={img_1}
            className="w-full md:w-[55%] h-[280px] absolute md:top-32 md:left-32 transform  -translate-y-[40%] rounded-3xl z-20 drop-shadow-lg"
            alt=""
          />

          <motion.img
            layout
            initial={{ y: 0 }}
            animate={{ y: -20 }}
            transition={{
              type: "tween",
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            src={img_3}
            className="w-[55%] h-[280px] absolute top-0 left-0 transform  -translate-y-1/2 rounded-3xl z-10 opacity-90 drop-shadow-lg hidden lg:block"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <BannerContent className='' img={banner_img} subTitle={'welcome to EduSpark'} title= {""} description={"Join thousands of learners worldwide and gain in-demand skills with our high-quality online courses. Start learning today and take your career to the next level!"}></BannerContent>                     */
}
