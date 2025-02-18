import React from 'react';

import DashboardSidebar from '../Pages/DashboradSidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {

  //  const user = 'admin'

    return (
        <div>
  
                <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
                    {/*dashboard content  */}
                     <Outlet></Outlet>
  </div>


  {/* sidebar */}
        <DashboardSidebar></DashboardSidebar>
</div>
        </div>
    );
};

export default DashboardLayout;