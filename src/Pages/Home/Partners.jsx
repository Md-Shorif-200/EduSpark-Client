import React from 'react';
import SectionTitle from '../../Common/SectionTitle';

// images 

import img_1 from '../../assets/partnership/img-1.png'
import img_2 from '../../assets/partnership/img-2.png'
import img_3 from '../../assets/partnership/img-3.png'
import img_4 from '../../assets/partnership/img-4.png'
import img_5 from '../../assets/partnership/img-5.jpeg'

const Partners = () => {
    return (
        <div className='Our_partners mb-14'>
            <SectionTitle title={'our partners'}></SectionTitle>


            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center'>

                {/*partner company logo and description  */}
                <div className=" w-full h-[300px]card bg-base-100  shadow-sm">
  <div className="p-5">
    <img
      src={img_5}
      alt="Parter company logo"
      class="rounded-xl w-full h-[100px]" />
       <div className="description">
       
        <p>Programming Hero brings interactive and engaging coding courses to our platform, making learning to code easier and more enjoyable. </p>
       </div>
  </div>

            </div>


            <div className="card w-full h-[300px] bg-base-100  shadow-sm">
  <div className="p-5">
    <img
      src={img_1}
      alt="Parter company logo"
      class="rounded-xl w-full h-[100px]" />
       <div className="description">
        <p>
Apple partners with us to provide advanced digital tools and resources that enhance the online learning experience.</p>
       </div>
  </div>

            </div>
    
            <div className="card w-full h-[300px] bg-base-100  shadow-sm">
  <div className="p-5">
    <img
      src={img_3}
      alt="Parter company logo"
      class="rounded-xl w-full h-[100px]" />
       <div className="description">
     
       <p>TutorialBD provides high-quality educational content and tutorials, empowering students with knowledge across various subjects.</p>
       </div>
  </div>

            </div>
            <div className="card w-full h-[300px] bg-base-100  shadow-sm">
  <div className="p-5">
    <img
      src={img_4}
      alt="Parter company logo"
      class="rounded-xl w-full h-[100px]" />
       <div className="description">
      
        <p>W3Schools supports our community with comprehensive, easy-to-follow web development tutorials and documentation. </p>
       </div>
  </div>

            </div>
           
              

            </section>

        </div>
    );
};

export default Partners;