import React from 'react';
import { NavLink } from 'react-router-dom';

const TeacherMenu = () => {
    return (
        <div>
                      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
   
            {/* teacher */}
            <li> <NavLink to='addClass'> add class </NavLink> </li>
            <li> <NavLink to='myClass'> my class </NavLink> </li>

            {/* home  */}
             <div className='divider'></div>
             <li> <NavLink to='/'> home </NavLink> </li>
          
    </ul>
        </div>
    );
};

export default TeacherMenu;