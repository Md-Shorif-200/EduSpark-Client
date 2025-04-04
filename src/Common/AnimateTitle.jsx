import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
// react icons
import { BsFillLightningChargeFill } from "react-icons/bs";

const AnimateTitle = ({animateTtile}) => {
    return (
        <div className=" animate_title w-[250px] capitalize flex gap-x-2 items-center bg-white ml-2 px-2 py-1 rounded-3xl">
                                   <p className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#39b8ae67] text-[#39B8AD]'><BsFillLightningChargeFill></BsFillLightningChargeFill>
                                   </p>
                                  

                                
                                    <Typewriter
                                       words={[`${animateTtile}`]}
                                       loop = {0}
                                        cursor
                                        cursorStyle='__'
                                        typeSpeed={100}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    ></Typewriter>
                               </div>
    );
};

export default AnimateTitle;