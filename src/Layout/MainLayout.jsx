import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Heading from '../Common/Heading';
import Loading from '../Common/Loading';

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