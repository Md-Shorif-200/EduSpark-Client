import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



import banner_img_1 from '../../assets/banner-img/banner-1.jpg'
import banner_img_2 from '../../assets/banner-img/banner-2.jpg'
import banner_img_3 from '../../assets/banner-img/banner-3.jpg'

const Banner = () => {
    return (
        <div>
                 <Carousel>
                <div className="w-full h-[500px]">
                     <img className="" src={banner_img_1}  alt="" />
                    
                </div>
                <div className="w-full h-[500px]">
                    <img className="" src={banner_img_2} alt="" />
                
                </div>
                <div className="w-full h-[500px]">
                     <img className="" src={banner_img_3} alt="" />
                    
                </div>
            </Carousel> 
        </div>
    );
};

export default Banner;