import React, { useState } from 'react';

import profile_img from '../assets/InspireTeacher/teacher-6831688_640.webp'
import { MdEdit, MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import EditProfileModal from './EditProfileModal';


const Profile = () => {
          const {user} = useAuth();
          const [data,refetch,isLoading] = useRole();
          const [isModalOpen, setIsModalOpen] = useState(false); // modal state

  return (
    <div className='profile_section bg-[#39B8AD] px-16 py-8 mb-[200px] capitalize relative text-black'>

        <div className="profile_info ">

           <h6 className='my-1  font-semibold uppercase' >  {data?.role} </h6>
           <h1 className='text-3xl font-bold my-3' >  {user?.displayName}  </h1>
            {
              user?.email &&  <p className='my-2 text-black text-lg  lowercase  flex items-center gap-2' >  <MdEmail></MdEmail> {user.email} </p>
            }
              {
                user?.phoneNumber &&            <p className='my-2 text-black text-lg  capitalize  flex items-center gap-2' >  <IoLogoWhatsapp></IoLogoWhatsapp>  {user.phoneNumber} </p>

              }

              {
                user?.address &&    <p className='my-2 text-black text-lg  capitalize  flex items-center gap-2' >  <FaAddressBook></FaAddressBook> {user.address} </p>
              }
        
  

        </div>

        
        <div className="profile_img_card w-[350px] px-6  py-10 rounded-2xl absolute top-18 right-20">
                        <div className="mb-6">
                            <img src={profile_img} alt="profile image" className='w-[150px] h-[150px] mx-auto rounded-full border' />
                        </div>

                        <button   onClick={() => setIsModalOpen(true)}  className="flex items-center btn_primary w-full gap-2 text-lg">
                  <MdEdit /> Edit Profile
                </button>
            </div>

                 {/* Modal */}
      <EditProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                
      
    </div>
  );
};

export default Profile;