import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaRegClock, FaTwitter } from 'react-icons/fa';
import { FaLinkedin, FaLocationDot } from 'react-icons/fa6';
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';


const Heading = () => {
    return (
        <div className=' hidden lg:flex gap-x-3 bg-black text-white justify-between items-center px-16 py-3.5 text-[15px]  capitalize'>
            <div className="contact flex gap-x-9">
                        <div className="phone_number flex gap-x-3 justify-between items-center">
                            <p> <FaPhone></FaPhone> </p>
                            <p>+88 018964444</p>
                        </div>

                        <div className="location flex gap-x-3 justify-between items-center">
                             <p> <FaLocationDot></FaLocationDot> </p>
                             <p>chattogram,bangladesh</p>
                        </div>

                        <div className="time flex gap-x-3 justify-between items-center">
                             <p>  <FaRegClock></FaRegClock> </p>
                             <p>sat - thus : 8.00 -6.00</p>
                        </div>
            </div>

              <div className="">
                        {/* <div className="signIn_signUp flex  items-center">
                             <IoMdContact></IoMdContact>
                              <div className="div">
                                   <Link>Log in </Link> /
                                   <Link>sign up</Link>
                              </div>
                        </div> */}

                        <div className="social flex  items-center gap-x-6">
                                    <p>follow us : </p>
                                     <div className='flex gap-x-2'>
                                     <Link><FaFacebook></FaFacebook> </Link>
                                     <Link> <FaTwitter></FaTwitter> </Link>
                                     <Link> <FaInstagram></FaInstagram> </Link>
                                     <Link> <FaLinkedin></FaLinkedin> </Link>
                                     </div>
                  </div>

              </div>

        
        </div>
    );
};

export default Heading;