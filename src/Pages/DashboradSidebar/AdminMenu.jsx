import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <div className='dashboard_menu'>
            
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li> <NavLink to='teacherRequest'> teacher request </NavLink> </li>
            <li> <NavLink to='users'> Users </NavLink> </li>
            <li> <NavLink to='RequestedClass'> all classes </NavLink> </li>
            <li> <NavLink to='adminProfile'> profile </NavLink> </li>

            {/* home  */}
             <div className='divider'></div>
             <li> <NavLink to='/'> home </NavLink> </li>
          
    </ul>
        </div>
    );
};

export default AdminMenu;