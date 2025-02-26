import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import TeacherMenu from './TeacherMenu';
import StudentMenu from './StudentMenu';
import useRole from '../../Hooks/useRole';
import Loading from '../../Common/Loading';

const DashboardSidebar = () => {

         const [data,isLoading] = useRole();
         const role = data?.role;

           if(isLoading){
             <Loading></Loading>
           }
    return (
      <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
     {role === 'admin' &&                 <AdminMenu></AdminMenu> }
     {role === 'teacher' &&                <TeacherMenu></TeacherMenu> }
      {role === 'student' &&      <StudentMenu></StudentMenu> }
   
    </div>
    );
};

export default DashboardSidebar;




              //   <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            
              //   <li><a>Sidebar Item 1</a></li>
              //   <li><a>Sidebar Item 2</a></li>
              // </ul>