import React, { useEffect, useState,useRef } from 'react';
import SectionTitle from '../../Common/SectionTitle';

// import React, { , useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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

  // const groupedFaculties = [];
  // for (let i = 0; i < facultites.length; i += 4) {
  //   groupedFaculties.push(facultites.slice(i, i + 4));
  // }

    return (
        <div className='secondary_text_color'>
                {/* <SectionTitle  title={'  education facultites'}></SectionTitle> */}
                {/* sweper slider */}
                <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

          {
            facultites.map((faculty, index) => 
            <SwiperSlide key={index}>
                <Faculty facultyData = {faculty}></Faculty>
            </SwiperSlide>)
          }
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>

            
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
        </div>
    );
};

export default EducationFaculties;
            {/* {
                groupedFaculties.map((group,index) => 
                
                <SwiperSlide key={index}>
                    <div className='grid grid-cols-4'>
                        {
                            group.map(faculty => <Faculty key={faculty.id} faculty={faculty}></Faculty>)
                        }
                    </div>
                </SwiperSlide>
                )
            } */}