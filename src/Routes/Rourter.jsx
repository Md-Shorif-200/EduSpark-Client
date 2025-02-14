import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import TeacherRequest from "../Pages/AdminDashboard/TeacherRequest";
import Users from "../Pages/AdminDashboard/Users";
import AllClasses from "../Pages/AdminDashboard/AllClasses";
import AdminProfile from "../Pages/AdminDashboard/AdminProfile";





const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path: 'signUp',
          element : <SignUp></SignUp>
        },
         {
          path : 'signIn',
          element : <SignIn></SignIn>
         }
      ]
    },
    {
      path : 'dashboard',
      element : <DashboardLayout></DashboardLayout>,
      errorElement : <ErrorPage></ErrorPage>,
      children  : [
        {
          path : 'teacherRequest',
          element : <TeacherRequest></TeacherRequest>
        },
        {
          path : 'users',
          element : <Users></Users>
        },
        {
          path : 'allClasses',
          element : <AllClasses></AllClasses>
        },
        {
          path : 'adminProfile',
          element :  <AdminProfile></AdminProfile>
        }
      ]
  
    }
  ]);


  export default router