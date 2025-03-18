import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


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

import { useEffect } from "react";
import BannerContent from "../../Componets/BannerContent";


const Banner = () => {

   

    return (
        <div>
                 <Carousel
                 autoPlay 
                 infiniteLoop 
                 interval={3000} 
                 showThumbs={false} 
      showStatus={false}

                 >

                <div className="">
                                   <BannerContent className='w-full h-full' img={img_2} subTitle={'welcome to academix'} title= {'Transform Your Future with Expert-Led Online Courses'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'}></BannerContent>                    
                </div>

                <div className="">
                                   <BannerContent  className='w-full h-full' img={img_2} 
                                   subTitle={'welcome to academix'} 
                                   
                                   title= {'Transform Your Future with Expert-Led Online Courses'} 
                                   
                                   description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'}></BannerContent>                    
                
                </div>
                {/* <div className="w-full   md:h-[500px]">
                                   <BannerContent img={banner_img_1}></BannerContent>                    
                    
                </div> */}
            </Carousel> 
        </div>
            
    );
};

export default Banner;