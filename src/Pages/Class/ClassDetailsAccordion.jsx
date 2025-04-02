import React from 'react';

import { FaYoutube } from "react-icons/fa";


const ClassDetailsAccordion = ({accordionData}) => {
    return (
        <div className='flex gap-x-4 items-center justify-between'>
              <div className="vedio_icon flex gap-x-6 items-center">
                        <FaYoutube></FaYoutube>
            <p> {accordionData}</p>
              </div>

              <div className="time">
                    <p>00</p>
              </div>
        </div>
    );
};

export default ClassDetailsAccordion;