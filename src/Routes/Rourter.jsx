import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";
import ErrorPage from "../Common/ErrorPage";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";

import Users from "../Pages/AdminDashboard/Users";
import AllClasses from "../Pages/AdminDashboard/AllClasses";
import AdminProfile from "../Pages/AdminDashboard/AdminProfile";

import TeacherRequest from "../Pages/AdminDashboard/TeacherRequest";
import AddClass from "../Pages/TeacherDashboard/AddClass";
import MyClass from "../Pages/TeacherDashboard/MyClass";
import MyClassDetailsPage from "../Pages/TeacherDashboard/MyClassDetailsPage";
import AllClass from "../Pages/Class/AllClass";
import ClassDetails from "../Pages/Class/ClassDetails";
import StudentProfile from "../Pages/StudentDashboard/StudentProfile";
import MyEnrollMent from "../Pages/StudentDashboard/MyEnrollMent";
import TeachOnPage from "../Pages/TeachOn/TeachOnPage";





const router = createBrowserRouter([
  // main layout routers
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
         },
         {
          path : 'TeachOn',
          element : <TeachOnPage></TeachOnPage>
         },
         {
          path : 'allClasses',
          element : <AllClass></AllClass>
         },
         {
          path : 'classDetails/:id',
          element : <ClassDetails></ClassDetails>
         }
      ]
    },

    // dashboard routers 
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
        },
        {
          path : 'addClass',
          element : <AddClass></AddClass>
        },
        {
          path : 'myClass',
          element : <MyClass></MyClass>
        },
        {
          path : '/dashboard/myClassDetails/:id',
          element : <MyClassDetailsPage></MyClassDetailsPage>,
          loader : ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)
        },
        {
          path : 'studentProfile',
          element : <StudentProfile></StudentProfile>
        },
        {
          path : 'myEnrollMent',
          element : <MyEnrollMent></MyEnrollMent>
        }
      ]
  
    }
  ]);


  export default router