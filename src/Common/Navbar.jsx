import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import nav_logo from '../assets/navLogo/academix_logo.png'

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
        <div className="navbar bg-base-100 shadow-sm py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {navLinks}
            </ul>
          </div>
        {/* nav logo  */}
           <div className="nav_logo">
                     <img src={nav_logo} className='w-28 h-20'  alt="" />
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
                             <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         <img src={user.photoURL} alt="" />
        </div>
      </div>
      <ul
        tabIndex={0}
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow">

        <li> {user.displayName} </li>

          <li>
                        <Link className='btn' to='dashboard'>Dashaboard</Link>
        </li> 
        <li>
            <Link className='btn' onClick={logOut}>Log Out</Link>
        </li>
      </ul>
    </div>
                        </> 
                        : 
                        <>
                        <Link className='btn' to='/signIn'>Sign In</Link>
                        </>
                    }

        </div>
      </div>
    );
};

export default Navbar;