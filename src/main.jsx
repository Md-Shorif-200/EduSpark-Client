import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// react router 
import {
  RouterProvider,
} from "react-router-dom";


import AuthProvider from './Context/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Toaster } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import router from './Routes/Router.jsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>

            <AuthProvider>
          <QueryClientProvider client={queryClient}>
                    {/* react router dom */}
          <div>
          <RouterProvider router={router} />
          </div>
          {/* <Toaster></Toaster> */}
          <Toaster ></Toaster>
          </QueryClientProvider>
                 
            </AuthProvider>
  </StrictMode>
);

// remove loading spiner
// const loader = document.getElementById('initial-loader');
// if (loader) {
//   loader.remove();
// }
