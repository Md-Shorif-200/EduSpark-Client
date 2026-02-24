import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
