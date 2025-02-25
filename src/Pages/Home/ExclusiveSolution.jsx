import React from 'react';
import SectionTitle from '../../Common/SectionTitle';
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";


const ExclusiveSolution = () => {
    return (
        <div>

              <div>
                  <SectionTitle title={'Exclusive Solutions that Set Us Apart'}></SectionTitle>
              </div>

              <div className="exclusive_cards grid grid-cols-4 gap-x-6">
                     {/* card 1 */}
              <div className="card bg-base-100 w-full shadow-sm">
  <div className="card-body">
    <h2 className="text-lg">life time support</h2>
                <div className="logo">
                    <p>  <FaHandHoldingHeart></FaHandHoldingHeart> </p>
                </div>

                <p className='desc'>
                Enjoy lifetime access to expert guidance and mentorship. We’re here to help with technical challenges, career advice, and continuous growth. Your success is our mission.
                </p>
  
  </div>
           </div>
        
           {/* card 2 */}
           <div className="card bg-base-100 w-full shadow-sm">
  <div className="card-body">
    <h2 className="text-lg">job placement</h2>
                <div className="logo">
                    <p>
                          <FaIndustry></FaIndustry>
                    </p>
                </div>

                <p className='desc'>
                Get connected with top companies and exciting job opportunities. We offer resume help, interview coaching, and job board access. Start your career with confidence.


                </p>
  
  </div>
           </div>


           {/* card 3 */}
           <div className="card bg-base-100 w-full shadow-sm">
  <div className="card-body">
    <h2 className="text-lg">internship</h2>
                <div className="logo">
                    <p>
                          <FaVideo></FaVideo>
                    </p>
                </div>

                  <p className='desc'>
                  Gain real-world experience through hands-on internships. Work on live projects and build a strong portfolio. Prepare for a successful professional journey.


                  </p>

              
  </div>
           </div>

              {/* card 4 */}
              <div className="card bg-base-100 w-full shadow-sm">
  <div className="card-body">
    <h2 className="text-lg">class videos</h2>
                <div className="logo">
                    <p>
                     <GiSkills></GiSkills>

                    </p>
                </div>

                <p className='desc'>
                Access high-quality class recordings anytime. Revisit lessons, learn at your own pace, and strengthen your skills. Never miss a moment of learning.
                </p>
  
  
  </div>
           </div>

              </div>
            
        </div>
    );
};

export default ExclusiveSolution;