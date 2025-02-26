import React from 'react';

import DashboardSidebar from '../Pages/DashboradSidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';

import { MdMenuOpen } from "react-icons/md";


const DashboardLayout = () => {


    return (
      <div className="drawer md:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">


         
         <label htmlFor="my-drawer-2" className="drawer-button text-3xl  md:hidden  ">
                   <div className='ml-60 sm:ml-65 my-6' >
                   <MdMenuOpen></MdMenuOpen>
                   </div>
        </label>
        


              

                 <Outlet></Outlet>
  </div>
             {/* <div className="dashboard_sidebar">
     
             </div> */}


          <DashboardSidebar></DashboardSidebar>
</div>
    );
};

export default DashboardLayout;