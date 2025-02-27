
import SectionTitle from '../../Common/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useEffect, useState } from 'react';
import StudentFeedback from './StudentFeedback';



const Feedback = () => {
    const axiosPublic = useAxiosPublic(); // base url 
const [studentFeedback, setStudentFeedback] = useState([])


// get feedback data form database 
 
       try{
         useEffect(() => {
            axiosPublic.get('/feedback')
            .then(response => {
                const feedbackData = response.data;   
                 setStudentFeedback(feedbackData)
            })
    
         }, [])
    }catch(error){
            console.log(error);
            
    }



    return (
        <div>
              <SectionTitle title={'our students feedback'}></SectionTitle>
        <div>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      loop = {true}
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
           {
            studentFeedback.map((feedback,index) => 
             <SwiperSlide>
                 <StudentFeedback key={index} feedback={feedback}></StudentFeedback>
            </SwiperSlide>)
           }
   
      ...
    </Swiper>
        </div>
        </div>

    );
};

export default Feedback;