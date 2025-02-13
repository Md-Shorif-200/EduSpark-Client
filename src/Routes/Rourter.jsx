import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home/Home";




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
  ]);


  export default router