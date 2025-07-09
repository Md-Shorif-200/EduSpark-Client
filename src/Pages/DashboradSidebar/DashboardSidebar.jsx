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
      <div className="drawer-side w-full">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
     {role === 'admin' &&                 <AdminMenu></AdminMenu> }
     {role === 'teacher' &&                <TeacherMenu></TeacherMenu> }
      {role === 'student' &&      <StudentMenu></StudentMenu> }
   
    </div>
    );
};

export default DashboardSidebar;




           