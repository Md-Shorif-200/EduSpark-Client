import React from 'react';

import DashboardSidebar from '../Pages/DashboradSidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';

import { MdMenuOpen } from "react-icons/md";
import { FiMenu } from 'react-icons/fi'; // More modern and clean icon


const DashboardLayout = () => {


    return (
      <div className="drawer md:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">


         
                  
  <div className="flex justify-end items-center p-4 md:hidden">
  <label htmlFor="my-drawer-2" className="drawer-button text-2xl text-gray-700 hover:text-primary transition-all duration-200 cursor-pointer">
    <FiMenu />
  </label>
</div>
               

                 <Outlet></Outlet>
  </div>
             {/* <div className="dashboard_sidebar">
     
             </div> */}


          <DashboardSidebar></DashboardSidebar>
</div>
    );
};

export default DashboardLayout;