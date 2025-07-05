import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { FaHome, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { MdClose, MdDashboard } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';
import useRole from '../Hooks/useRole';

const Navbar = () => {
             const {user,logOut} = useAuth() // context api
               const [data] = useRole(); // tanstack query
               const [isActive,setIsActive] = useState(false)
              // nav Links
           const navLinks = <>
                    <li className='text-lg lg:font-semibold  capitalize py-1 lg:py-0 cursor-pointer'> <Link to='/'>Home</Link> </li>
                    <li className='text-lg lg:font-semibold  capitalize py-1 lg:py-0 cursor-pointer'> <Link to='/allClass'>All Class</Link> </li>
                    <li className='text-lg lg:font-semibold  capitalize py-1 lg:py-0 cursor-pointer'> <Link to='/TeachOn'>Teach On EduSpark </Link> </li>
                    <li className='text-lg lg:font-semibold  capitalize py-1 lg:py-0 cursor-pointer'> <Link to='/contact'>Contact</Link> </li>
            </>

            // avater links
            const avaterLinks = <>
           
                        <Link to='/profile' className='text-lg  lg:font-semibold capitalize flex items-center gap-x-3 px-2 pt-6 pb-2 hover:bg-gray-100'> <FaUser></FaUser>  Profile</Link>
                        <Link to='/dashboard' className='text-lg  lg:font-semibold capitalize flex items-center gap-x-3 p-2 hover:bg-gray-100'> <MdDashboard></MdDashboard>  dashboard</Link>
                        <Link onClick={logOut} className='text-lg  lg:font-semibold capitalize flex items-center gap-x-3 px-2 pb-6 pt-2 hover:bg-gray-100'>  <FaSignOutAlt></FaSignOutAlt>  Logout</Link>
              </>

              // responsove menu icon functionality
              const handleMenuIcon = () => {
                      setIsActive(true)
              }
          


  return (
<div className=" bg-base-100 shadow-sm sticky top-0 z-50">
 <div className='navbar px-4 sm:px-6 md:px-16 2xl:px-22   py-3 relative'>
   <div className="navbar-start">
    <a className="btn btn-ghost text-xl">EduSpark</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
             {/* nav links */}
              {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
        <div className="">
                  {/*responsive menu icon */}
      <div tabIndex={0} role="button" className={`lg:hidden text-4xl cursor-pointer ${isActive ? 'hidden' : 'block'}`}  onClick={handleMenuIcon}>
                   <IoMenu></IoMenu>
      </div>
                {/* responsive nav menu */}
      <div
        tabIndex={0}
        className={`responsive_nav_links  h-[100vh] bg-black/30  absolute left-0 top-0 transition-all duration-300 ease-in-out ${isActive ? 'w-full ' : 'w-0 overflow-hidden'} `} onClick={() => setIsActive(false)} >
              <div className={`h-full bg-white transition-all duration-500 ease-in-out  ${isActive ? 'w-[80%]' : 'w-0 overflow-hidden'}`} >
                  <div className='flex justify-between items-center pt-2 mb-6 '>
                      <a className="btn btn-ghost text-xl ">EduSpark</a>
                
                           <MdClose className='text-5xl pr-4 cursor-pointer' onClick={() => setIsActive(false)}></MdClose>
                   
                  </div>

                    <ul>    {navLinks} </ul>

                    <div className="divider"></div>
       
              {/*  responsive user avater */}
              <div className="responsive_user_avater pl-4">
                   <div className="img flex items-center gap-x-3">
                    <img src={user?.photoURL} className='w-[50px] h-[50px] rounded-full border border-gray-200' alt="image" />
                            <div>
                                   <p className='capitalize'>  {user?.displayName} </p>
                                    <p className=' text-sm'>  {data?.role} </p>
                            </div>
                   </div>
                   <div className="avater_link">
                       {avaterLinks}
                   </div>
              </div>
              </div>
      </div>
    </div>
      
      {/* user avater */}
        <div className='hidden lg:block'>
            {
               user ? 
               <>
                    {/* user avater */}
                  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className=" ">
        <div className="">
          <img
            alt=""
            src={user.photoURL}
            className=' w-[50px] h-[50px] rounded-full border border-gray-300'
            />
        </div>
      </div>
      <div
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-0 shadow">
                         {/* avater links */}
                           {avaterLinks}
      </div>
                  </div>
               </>
                :
                <></>

            }
        </div>
  </div>
 </div>
</div>
  );
};

export default Navbar;


//   tabIndex={0}
//   className={`responsive_nav_links bg-black/30 absolute left-0 top-0 h-screen transition-all duration-500 ease-in-out
//     ${isActive ? 'w-full' : 'w-0 overflow-hidden'}`}
//   onClick={() => setIsActive(false)}
// >
//   <div
//     className="w-[80%] h-full bg-white"
//     onClick={(e) => e.stopPropagation()} // prevent click bubble to close menu
//   >
//     {/* content goes here */}
//   </div>
// </div>



