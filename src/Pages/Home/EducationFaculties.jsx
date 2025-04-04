import React, { useEffect, useState,useRef } from 'react';
import SectionTitle from '../../Common/SectionTitle';

// import React, { , useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// react aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import Faculty from './Faculty';

const EducationFaculties = () => {

    const [facultites, setFaculties] = useState([]);
    const [swiperRef, setSwiperRef] = useState(null);

            // get data 
    useEffect(() => {
              const fetchFaculties = async() => {
                 try{
                            const response = await fetch('EducationFaculties.json')
                            if(!response.ok){
                                throw new Error('faild to fetch catagories')
                            }

                            const data = await response.json();
                            setFaculties(data)
                 }catch(error){
                     console.log(error.meassage);
                     
                 }
              }

              fetchFaculties();
    },[])




    useEffect(() => {
      // Initialize AOS
AOS.init({
duration: 800,
once: false, 
easing: 'ease-in-out', 
offset: 100, 
mirror: true, 
});
} , [])

    



    let appendNumber = 4;
    let prependNumber = 1;
  
    const prepend2 = () => {
      swiperRef.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      ]);
    };
  
    const prepend = () => {
      swiperRef.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
      );
    };
  
    const append = () => {
      swiperRef.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
      );
    };
  
    const append2 = () => {
      swiperRef.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      ]);
    };


    return (
        <div className='secondary_text_color my-10 px-4 ' data-aos='fade-up'>
                {/* <SectionTitle  title={'  education facultites'}></SectionTitle> */}
                {/* sweper slider */}
                <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
            // responsive for all device
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        
        }}

        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

          {
            facultites.map((faculty, index) => 
            <SwiperSlide key={index}>
                <Faculty facultyData = {faculty}></Faculty>
            </SwiperSlide>)
          }
    
      </Swiper>

   
        </div>
    );
};

export default EducationFaculties;
           