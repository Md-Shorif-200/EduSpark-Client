import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
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