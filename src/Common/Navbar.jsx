import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import nav_logo from '../assets/navLogo/logo__1-removebg-preview.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import Heading from './Heading';
import useRole from '../Hooks/useRole';



const Navbar = () => {
    const {user,logOut} = useAuth();
    const    [data,refetch,isLoading] = useRole()

     

    const navLinks = <>
                <li>
                    <NavLink className='hover:bg-white hover:text-[#39B8AD]  transition duration-300 ease-in-out ' to='/' > home </NavLink>
                </li>
                <li>
                    <NavLink className='hover:bg-white hover:text-[#39B8AD]  transition duration-300 ease-in-out ' to='allClass'> all classes </NavLink>
                </li>

           
                {data?.role !== 'teacher' || !user && (
  <li>
    <NavLink
      className="hover:bg-white hover:text-[#39B8AD] transition duration-300 ease-in-out"
      to="/TeachOn"
    >
      Teach on Academix
    </NavLink>
  </li>
)}
       

                  <li>
                  <NavLink className='hover:bg-white hover:text-[#39B8AD]  transition duration-300 ease-in-out ' to='contact'> Contact </NavLink>
                  </li>
             

    </>
    
    return (
              <div className='web_header '>
                      <Heading></Heading>
                     <div className="navbar  shadow-sm px-1">
        <div className="navbar-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              class="  .nav_links menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {navLinks}
            </ul>
          </div>
        {/* nav logo  */}
           <div className="nav_logo ">
                     <img src={nav_logo} className='w-[40px] md:w-[80px] '  alt="" />
                     {/* <h1 className='text-white text-lg font-semibold '>academi<span className='text-4xl text-pink-300'>x</span>      </h1> */}
           </div>
        </div>
        {/* nav links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                    {navLinks}
          </ul>
        </div>
        {/* user profile */}
        <div className="navbar-end ">

                    {
                        user ? 
                        <>
                             <div className=" relative group">
      <div tabIndex={0} role="button" className="avatar flex items-center ">
        
            <div className=''>
            <img className='rounded-full  border relative' src={user?.photoURL} alt="" />
            </div>
          {/* <RiArrowDropDownLine className='text-4xl text-black font-semibold absolute top-0 left-6'></RiArrowDropDownLine> */}
         

      </div>

      <div
        tabIndex={0}
        class="dropdown_cnt absolute -right-4 top-12  rounded-box bg-white shadow-lg 
               opacity-0 invisible transform scale-95 translate-y-[-15px] 
               transition-all duration-500 ease-out
               group-hover:opacity-100 group-hover:visible 
               group-hover:translate-y-0 group-hover:scale-100">

 
             <div className='h-full'>
             <div className=' flex gap-1 items-center p-3'>  
                     
                       <img src={user?.photoURL} className='w-[60px] h-[60px] rounded-full border' alt="" />
                          <div>
                          <h1 className=' text-justify text-[18px] font-bold capitalize '> {user.displayName} </h1>
                            <p className='text-[12px]'>  {user?.email.slice(0,23)}.. </p>
                            <p className='capitalize'> {data?.role} </p>
                          </div>
          </div>

          <div className="divider my-3"></div>

          <div className=' h-full  px-1'>
                    {  data?.role == 'user' &&   <></>}

                    {data?.role == 'student' && <div className='hover_effect_1'> <Link className='  ' to='dashboard/myEnrollMent'>Dashaboard</Link> </div>}

                    {data?.role == 'admin' && <div className='hover_effect_1'> <Link className='  ' to='dashboard/teacherRequest'>Dashaboard</Link>
                      </div>}

                      {data?.role == 'teacher' && <div className='hover_effect_1'> <Link className='  ' to='dashboard'>Dashaboard</Link>
                        </div>}

<div className='hover_effect_1'>
                   <Link className='' >Profile</Link>
                   </div>

                   <div className='hover_effect_1'>
                   <Link className='' onClick={logOut}>Log Out</Link>
                   </div>
        </div> 
        
             </div>


      </div>
    </div>
                        </> 
                        : 
                        <>
                        <Link className=' btn_primary  ' to='/signIn'>Log In</Link>
                        <Link className=' btn_secondary  ml-2' to='/signUp'>Sign Up</Link>
                        </>
                    }

        </div>
      </div>
              </div>
    );
};

export default Navbar;