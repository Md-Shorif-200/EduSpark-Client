import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const MainLayout = () => {
    return (
        <div>
              
            <header>
                <Navbar></Navbar>
            </header>

            <Outlet></Outlet>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;