import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Heading from '../Common/Heading';
import Loading from '../Common/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css'; // aos css import

const MainLayout = () => {


    // const [initialLoading, setInitialLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setInitialLoading(false);
    //     }, 2000); // এখানে 1 সেকেন্ড (তুমি চাইলে সময় বাড়াতে পারো)
    
    //     return () => clearTimeout(timer);
    //   }, []);

    //   if(initialLoading) {
    //     return <Loading></Loading>
    //   }

    // App.jsx বা main.jsx


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);


    return (
        <>
                        {/* <Heading></Heading> */}
                <Navbar></Navbar>
              
           

            <Outlet></Outlet>

            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default MainLayout;