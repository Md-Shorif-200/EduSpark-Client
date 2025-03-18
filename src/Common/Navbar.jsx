import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import nav_logo from '../assets/navLogo/academix_logo.png'
import { RiArrowDropDownLine } from "react-icons/ri";



const Navbar = () => {
    const {user,logOut} = useAuth();

    const navLinks = <>
                <li>
                    <NavLink to='/'> home </NavLink>
                </li>
                <li>
                    <NavLink to='allClass'> all classes </NavLink>
                </li>
                <li>
                    <NavLink to='/TeachOn'> teach on academix </NavLink>
                </li>
                {/* <li>
                    <NavLink to='/signUp'> sign up </NavLink>
                </li> */}
           
            {/* <button onClick={logOut}>
                  log out
            </button> */}

    </>
    
    return (
        <div className="navbar  shadow-sm px-16 py-4">
        <div className="navbar-start">
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
           <div className="nav_logo">
                     {/* <img src={nav_logo} className='w-[80px] h-[50px] rounded-sm'  alt="" /> */}
                     <h1 className='text-white text-lg font-semibold '>academi<span className='text-4xl text-pink-300'>x</span>      </h1>
           </div>
        </div>
        {/* nav links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                    {navLinks}
          </ul>
        </div>
        {/* user profile */}
        <div className="navbar-end">

                    {
                        user ? 
                        <>
                             <div className=" relative group">
      <div tabIndex={0} role="button" className="avatar flex items-center ">
        
            <div className=''>
            <img className='rounded-full  border relative' src={user?.photoURL} alt="" />
            </div>
          <RiArrowDropDownLine className='text-4xl text-white font-bold absolute top-0 left-6'></RiArrowDropDownLine>
         

      </div>

      <div
        tabIndex={0}
        class=" dropdown_cnt absolute -right-4 top-12 p-3 rounded-box   bg-white shadow-lg 
                  opacity-0 invisible transition-all duration-300 
                  group-hover:opacity-100 group-hover:visible   ">

 
             <div className='h-full'>
             <div className=' flex gap-1 items-center'>  
                     
                       <img src={user?.photoURL} className='w-[60px] h-[60px] rounded-full border' alt="" />
                          <div>
                          <h1 className=' text-justify text-[18px] font-bold capitalize '> {user.displayName} </h1>
                            <p className='text-[12px]'>  {user?.email.slice(0,23)}.. </p>
                          </div>
          </div>

          <div className="divider"></div>

          <div className=' h-full  px-1'>
            <Link className=' w-full block bg-white capitalize px-1 py-2 hover:bg-[#6a0dad25] hover:text-[#6A0DAD]  ' to='dashboard'>Dashaboard</Link>
            <Link className=' w-full block bg-white capitalize px-1 py-2 hover:bg-[#6a0dad25] hover:text-[#6A0DAD] ' onClick={logOut}>Log Out</Link>
        </div> 
        
             </div>


      </div>
    </div>
                        </> 
                        : 
                        <>
                        <Link className='btn btn-sm actionable_primary_btn   font-semibold  ' to='/signIn'>Sign In</Link>
                        <Link className='btn btn-sm actionable_secondary_btn   font-semibold ml-2' to='/signUp'>Sign Up</Link>
                        </>
                    }

        </div>
      </div>
    );
};

export default Navbar;