import React from 'react';
import SectionTitle from '../../Components/SectionTitle';

// images 

import img_1 from '../../assets/partnership/img-1.png'
import img_2 from '../../assets/partnership/img-2.png'
import img_3 from '../../assets/partnership/img-3.png'
import img_4 from '../../assets/partnership/img-4.png'
import img_5 from '../../assets/partnership/img-5.jpeg'

const Partners = () => {
    return (
        <div className='Our_partners'>
            <SectionTitle title={'out partners'}></SectionTitle>


            <section className='grid grid-cols-5 gap-6 items-center'>

                {/*partner company logo  */}
            <div className="card bg-base-100  shadow-sm">
  <figure className="p-5">
    <img
      src={img_1}
      alt="Shoes"
      class="rounded-xl" />
  </figure>

            </div>
            <div className="card bg-base-100  shadow-sm">
  <figure className="p-5">
    <img
      src={img_2}
      alt="Shoes"
      class="rounded-xl" />
  </figure>

            </div>
            <div className="card bg-base-100  shadow-sm">
  <figure className="p-5">
    <img
      src={img_3}
      alt="Shoes"
      class="rounded-xl" />
  </figure>

            </div>
            <div className="card bg-base-100  shadow-sm">
  <figure className="p-5">
    <img
      src={img_4}
      alt="Shoes"
      class="rounded-xl" />
  </figure>

            </div>
            <div className="card bg-base-100  shadow-sm">
  <figure className="p-5">
    <img
      src={img_5}
      alt="Shoes"
      class="rounded-xl" />
  </figure>

            </div>

                 {/* <img className='w-[150px]' src={img_1} alt="" />
                 <img className='w-[150px]' src={img_2} alt="" />
                 <img className='w-[150px]' src={img_3} alt="" />
                 <img className='w-[150px]' src={img_4} alt="" />
                 <img className='w-[150px]' src={img_5} alt="" /> */}

            </section>

        </div>
    );
};

export default Partners;