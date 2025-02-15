import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {

   const user = 'admin'

    return (
        <div>
  
                <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
                    {/*dashboard content  */}
                     <Outlet></Outlet>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
     {/* admin */}
    <li> <NavLink to='teacherRequest'> teacher request </NavLink> </li>
            <li> <NavLink to='users'> Users </NavLink> </li>
            <li> <NavLink to='allClasses'> all classes </NavLink> </li>
            <li> <NavLink to='adminProfile'> profile </NavLink> </li>
            {/* teacher */}
            <li> <NavLink to='addClass'> add class </NavLink> </li>
            <li> <NavLink to='myClass'> my class </NavLink> </li>
             <div className='divider'></div>
             <li> <NavLink to='/'> home </NavLink> </li>
          
    </ul>
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;