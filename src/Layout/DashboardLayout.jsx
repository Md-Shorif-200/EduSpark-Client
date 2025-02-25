import React from 'react';

import DashboardSidebar from '../Pages/DashboradSidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {


    return (
      <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
  <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
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