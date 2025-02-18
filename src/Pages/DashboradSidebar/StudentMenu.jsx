import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentMenu = () => {
    return (
        <div>
                      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
    

                      <li> <NavLink to='myEnrollMent'> my enrollment </NavLink> </li>
                      <li> <NavLink to='studentProfile'> my profile </NavLink> </li>
             <div className='divider'></div>
             <li> <NavLink to='/'> home </NavLink> </li>
          
    </ul>
        </div>
    );
};

export default StudentMenu;