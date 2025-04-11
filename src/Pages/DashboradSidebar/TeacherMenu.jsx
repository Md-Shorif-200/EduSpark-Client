import React from 'react';
import { NavLink } from 'react-router-dom';

const TeacherMenu = () => {
    return (
        <div className='dashboard_menu'>
                      <ul className="menu bg-base-200 text-base-content min-h-full w-50 md:w-60 lg:80 p-4">
   
            {/* teacher */}
            <li> <NavLink to='addClass'> add class </NavLink> </li>
            <li> <NavLink to='myClass'> my class </NavLink> </li>
            {/* <li> <NavLink to='teacherProfile'>  my profile </NavLink> </li> */}

            {/* home  */}
             <div className='divider'></div>
             <li> <NavLink to='/'> home </NavLink> </li>
          
    </ul>
        </div>
    );
};

export default TeacherMenu;