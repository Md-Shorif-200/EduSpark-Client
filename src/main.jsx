import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// react router 
import {
  RouterProvider,
} from "react-router-dom";

import router from './Routes/Rourter.jsx';
import AuthProvider from './Context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
            {/* authProvider */}
            <AuthProvider>
                {/* react router dom */}
          <div className='max-w-6xl mx-auto'>
          <RouterProvider router={router} />
          </div>
            </AuthProvider>
  </StrictMode>,
)
