import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



import banner_img_1 from '../../assets/banner-img/banner-1.jpg'
import banner_img_2 from '../../assets/banner-img/banner-2.jpg'
import banner_img_3 from '../../assets/banner-img/banner-3.jpg'

const Banner = () => {
    return (
        <div>
                 <Carousel>
                <div className="">
                     <img src={banner_img_1} alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={banner_img_2} alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                     <img src={banner_img_3} alt="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> 
        </div>
    );
};

export default Banner;