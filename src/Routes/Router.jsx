import React from 'react';
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
import RequestedClass from "../Pages/AdminDashboard/RequestedClass";
// import AllClasses from "../Pages/AdminDashboard/AllClasses";
import AdminProfile from "../Pages/AdminDashboard/AdminProfile";

import TeacherRequest from "../Pages/AdminDashboard/TeacherRequest";
import AddClass from "../Pages/TeacherDashboard/AddClass";
import MyClass from "../Pages/TeacherDashboard/MyClass";
import AllClass from "../Pages/Class/AllClass";
import ClassDetails from "../Pages/Class/ClassDetails";
import StudentProfile from "../Pages/StudentDashboard/StudentProfile";
import MyEnrollMent from "../Pages/StudentDashboard/MyEnrollMent";
import TeachOnPage from "../Pages/TeachOn/TeachOnPage";
import PrivateRoute from "./PrivateRoute";
import TeacherProfile from "../Pages/TeacherDashboard/TeacherProfile";
import Payment from "../Pages/Payment/Payment";
import EnrollmentDetails from "../Pages/StudentDashboard/EnrollmentDetails";
import WelcomeMessage from "../Pages/WelcomeMessage";
import AdminClassProgress from "../Pages/AdminDashboard/AdminClassProgress";
import MyOrders from "../Pages/StudentDashboard/MyOrders";
import Profile from '../Common/Profile';
import MyClassDetailsPage from '../Pages/TeacherDashboard/MyClassDetailsPage';




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
          element : <PrivateRoute>
             <TeachOnPage></TeachOnPage>
          </PrivateRoute>
         },
         {
          path : 'allClass',
          element : <AllClass></AllClass>
         },
         {
          path : 'allClass/classDetails/:id',
          element : <PrivateRoute>
            <ClassDetails></ClassDetails>
          </PrivateRoute>,
          // loader : ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)
         },
         {
          path : '/payment/:id',
          element :   <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>,
          loader : ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)

         },
         {
          path : '/profile',
          element : <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
         }
      ]
    },

    // ! dashboard routers 
    {
      path : 'dashboard',
      element : <DashboardLayout></DashboardLayout>,
      errorElement : <ErrorPage></ErrorPage>,
      children  : [
          {
            path : '/dashboard',
            element : <MyEnrollMent></MyEnrollMent>
          },
        {
            path : 'teacherRequest',
            element : <PrivateRoute>
               <TeacherRequest></TeacherRequest>
            </PrivateRoute>
        },
  
        {
          path : 'users',
          element : <PrivateRoute>
             <Users></Users>
          </PrivateRoute>
        },
        {
          path : 'RequestedClass',
          element : <PrivateRoute>
            <RequestedClass></RequestedClass>
          </PrivateRoute>
        },
        {
          path : '/dashboard/class-progress/:id',
          element : <PrivateRoute>
             <AdminClassProgress></AdminClassProgress>
          </PrivateRoute>
        },
        {
          path : 'adminProfile',
          element :  <AdminProfile></AdminProfile>
        },
        {
          path : 'addClass',
          element : <PrivateRoute><AddClass></AddClass></PrivateRoute>
        },
        {
           path : 'teacherProfile',
           element : <TeacherProfile></TeacherProfile>
        },
        {
          path : 'myClass',
          element : <PrivateRoute><MyClass></MyClass></PrivateRoute>
        },
        {
          path : '/dashboard/myClassDetails/:id',
          element :<PrivateRoute> <MyClassDetailsPage></MyClassDetailsPage></PrivateRoute>,
          // loader : ({params}) => fetch(`http://localhost:5000//classes/${params.id}`)
        },
        {
          path : 'studentProfile',
          element : <StudentProfile></StudentProfile>
        },
        {
          path : 'myEnrollMent',
          element : <PrivateRoute>
                <MyEnrollMent></MyEnrollMent>
          </PrivateRoute>
        },
        {
          path : '/dashboard/myEnrollMent/enrollmentDetails/:id',
          element :<PrivateRoute> <EnrollmentDetails></EnrollmentDetails></PrivateRoute>
        },
        {
          path  : 'myOrders',
          element : <PrivateRoute>
                 <MyOrders></MyOrders>
          </PrivateRoute>
        }
      ]
  
    }
  ]);


  export default router