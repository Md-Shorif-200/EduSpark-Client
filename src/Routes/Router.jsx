import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Common/ErrorPage';
import Loading from '../Common/Loading';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('../Pages/Home/Home'));
const SignUp = lazy(() => import('../Auth/SignUp'));
const SignIn = lazy(() => import('../Auth/SignIn'));
const AllClass = lazy(() => import('../Pages/Class/AllClass'));
const ClassDetails = lazy(() => import('../Pages/Class/ClassDetails'));
const TeachOnPage = lazy(() => import('../Pages/TeachOn/TeachOnPage'));
const Payment = lazy(() => import('../Pages/Payment/Payment'));
const Profile = lazy(() => import('../Common/Profile'));
const WhisLists = lazy(() => import('../Componets/WhisLists'));
const Contact = lazy(() => import('../Pages/Contact'));

const DashboardLayout = lazy(() => import('../Layout/DashboardLayout'));
const DashboardRedirect = lazy(() => import('../Layout/DashboardRedirect'));
const DashboardAnalytics = lazy(() => import('../Pages/AdminDashboard/DashboardAnalytics'));
const Users = lazy(() => import('../Pages/AdminDashboard/Users'));
const RequestedClass = lazy(() => import('../Pages/AdminDashboard/RequestedClass'));
const AdminProfile = lazy(() => import('../Pages/AdminDashboard/AdminProfile'));
const AdminClassProgress = lazy(() => import('../Pages/AdminDashboard/AdminClassProgress'));
const TeacherRequest = lazy(() => import('../Pages/AdminDashboard/TeacherRequest'));
const AddClass = lazy(() => import('../Pages/TeacherDashboard/AddClass'));
const MyAllClass = lazy(() => import('../Pages/TeacherDashboard/MyAllClass'));
const TeacherProfile = lazy(() => import('../Pages/TeacherDashboard/TeacherProfile'));
const MyClassDetailsPage = lazy(() => import('../Pages/TeacherDashboard/MyClassDetailsPage'));
const StudentProfile = lazy(() => import('../Pages/StudentDashboard/StudentProfile'));
const MyEnrollMent = lazy(() => import('../Pages/StudentDashboard/MyEnrollMent'));
const EnrollmentDetails = lazy(() => import('../Pages/StudentDashboard/EnrollmentDetails'));
const MyOrders = lazy(() => import('../Pages/StudentDashboard/MyOrders'));

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <SuspenseWrapper><Home /></SuspenseWrapper>,
      },
      {
        path: 'signUp',
        element: <SuspenseWrapper><SignUp /></SuspenseWrapper>,
      },
      {
        path: 'signIn',
        element: <SuspenseWrapper><SignIn /></SuspenseWrapper>,
      },
      {
        path: 'TeachOn',
        element: <PrivateRoute><SuspenseWrapper><TeachOnPage /></SuspenseWrapper></PrivateRoute>,
      },
      {
        path: 'allClass',
        element: <SuspenseWrapper><AllClass /></SuspenseWrapper>,
      },
      {
        path: 'allClass/classDetails/:id',
        element: <PrivateRoute><SuspenseWrapper><ClassDetails /></SuspenseWrapper></PrivateRoute>,
      },
      {
        path: '/payment/:id',
        element: <PrivateRoute><SuspenseWrapper><Payment /></SuspenseWrapper></PrivateRoute>,
        loader: ({ params }) => fetch(`https://edu-spark-server-lake.vercel.app/classes/${params.id}`),
      },
      {
        path: '/profile',
        element: <PrivateRoute><SuspenseWrapper><Profile /></SuspenseWrapper></PrivateRoute>,
      },
      {
        path: '/whisLists',
        element: <SuspenseWrapper><WhisLists /></SuspenseWrapper>,
      },
      {
        path: '/contact',
        element: <SuspenseWrapper><Contact /></SuspenseWrapper>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <SuspenseWrapper><DashboardLayout /></SuspenseWrapper>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard',
        element: <SuspenseWrapper><DashboardRedirect /></SuspenseWrapper>,
      },
      {
        path: '/dashboard/admin',
        element: <SuspenseWrapper><DashboardAnalytics /></SuspenseWrapper>,
      },
      {
        path: '/dashboard/student',
        element: <SuspenseWrapper><MyEnrollMent /></SuspenseWrapper>,
      },
      {
        path: '/dashboard/teacher',
        element: <SuspenseWrapper><AddClass /></SuspenseWrapper>,
      },
      {
        path: 'teacherRequest',
        element: <PrivateRoute><SuspenseWrapper><TeacherRequest /></SuspenseWrapper></PrivateRoute>,
      },
      {
        path: 'users',
        element: <PrivateRoute><SuspenseWrapper><Users /></SuspenseWrapper></PrivateRoute>,
      },
      {
        path: 'RequestedClass',
        element: <PrivateRoute><SuspenseWrapper><RequestedClass /></SuspenseWrapper></PrivateRoute>,
      },
      {
        path: '/dashboard/class-progress/:id',
        element: <PrivateRoute><SuspenseWrapper><AdminClassProgress /></SuspenseWrapper></PrivateRoute>,
      },
      {
        path: 'adminProfile',
        element: <SuspenseWrapper><AdminProfile /></SuspenseWrapper>,
      },
      {
        path: 'addClass',
        element: <PrivateRoute><SuspenseWrapper><AddClass /></SuspenseWrapper></PrivateRoute>,
      },
      {
        path: 'teacherProfile',
        element: <SuspenseWrapper><TeacherProfile /></SuspenseWrapper>,
      },
      {
        path: 'myClass',
        element: <PrivateRoute><SuspenseWrapper><MyAllClass /></SuspenseWrapper></PrivateRoute>,
      },
      {
        path: '/dashboard/myClassDetails/:id',
        element: <PrivateRoute><SuspenseWrapper><MyClassDetailsPage /></SuspenseWrapper></PrivateRoute>,
      },
      {
        path: 'studentProfile',
        element: <SuspenseWrapper><StudentProfile /></SuspenseWrapper>,
      },
      {
        path: 'myEnrollMent',
        element: <PrivateRoute><SuspenseWrapper><MyEnrollMent /></SuspenseWrapper></PrivateRoute>,
      },
      {
        path: '/dashboard/myEnrollMent/enrollmentDetails/:id',
        element: <PrivateRoute><SuspenseWrapper><EnrollmentDetails /></SuspenseWrapper></PrivateRoute>,
      },
      {
        path: 'myOrders',
        element: <PrivateRoute><SuspenseWrapper><MyOrders /></SuspenseWrapper></PrivateRoute>,
      },
    ],
  },
]);

export default router;
