import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react';



// images
       import img_1 from '../../assets/banner-img/img-1.jpg'
       import img_2 from '../../assets/banner-img/img-2.jpg'
       import img_3 from '../../assets/banner-img/img-3.jpg'
       import img_4 from '../../assets/banner-img/img-4.webp'
       import img_5 from '../../assets/banner-img/img-5.webp'
       import img_6 from '../../assets/banner-img/img-6.webp'
       import img_7 from '../../assets/banner-img/img-7.avif'
       import img_8 from '../../assets/banner-img/img-8.jpg'
       import img_9 from '../../assets/banner-img/img-9.jpg'
       import img_10 from '../../assets/banner-img/img-10.jpg'
       import banner_img from '../../assets/banner-img/banner_1.jpg'

import { useEffect, useState } from "react";
import BannerContent from "../../Componets/BannerContent";


const Banner = () => {

    // const [delay,setDelay] = useState(5000)

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setDelay(3000)
    //     }, 5000);

    //     return () => clearTimeout(timer)
    // }, [])

   

    return (
        <div>
              

            <div className="">
                                   <BannerContent className='' img={banner_img} subTitle={'welcome to academix'} title= {""} description={"Join thousands of learners worldwide and gain in-demand skills with our high-quality online courses. Start learning today and take your career to the next level!"}></BannerContent>                    
                </div>


        </div>
            
    );
};

export default Banner;




   {/* <Carousel
                 autoPlay 
                 infiniteLoop 
                 interval={10000} 
                 showThumbs={false} 
      showStatus={false}
      transitionTime={800}  // Slide পরিবর্তনের সময় 0.8s (Smooth effect)
      swipeable={true}  // Mouse & touch swipe সাপোর্ট
      emulateTouch={true} // Smooth swipe effect
      stopOnHover={false} // Mouse hover করলে স্লাইড বন্ধ হবে না
      useKeyboardArrows={true} // কিবোর্ডের arrow key ব্যবহার করে স্লাইড করা যাব
   

                 >

               

                <div className="">
                                   <BannerContent  className='w-full h-full' img={img_2} 
                                   subTitle={'welcome to academix'} 
                                   
                                   title= {'Learn Anytime, Anywhere – Master New Skills'} 
                                   
                                   description={ "Flexible and affordable courses designed for busy professionals, students, and lifelong learners. Learn at your own pace and achieve your goals!"}></BannerContent>                    
                
                </div>


                <div className="">
                                   <BannerContent  className='w-full h-full' img={img_1} 
                                   subTitle={'welcome to academix'} 
                                   
                                   title= {'From Beginner to Pro – Learn with Industry Experts'} 
                                   
                                   description={"Our expert instructors guide you through hands-on learning experiences in programming, design, marketing, and more. Start your learning journey today!"}></BannerContent>                    
                
                </div>
                
            </Carousel>  */}

            