import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentMenu = () => {
    return (
        <div className='dashboard_menu'>
                      <ul className="menu bg-base-200 text-base-content min-h-screen w-50 md:w-60 lg:80 p-4">
    

                      <li> <NavLink to='myEnrollMent'> my enrollment </NavLink> </li>
                      <li> <NavLink to='studentProfile'> my profile </NavLink> </li>
             <div className='divider'></div>
             <li> <NavLink to='/'> home </NavLink> </li>
          
    </ul>
        </div>
    );
};

export default StudentMenu;