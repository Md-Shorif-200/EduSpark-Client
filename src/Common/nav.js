// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FaMoon, FaSun, FaBars, FaTimes,
//   FaUserCircle, FaSignOutAlt, FaUser, FaCog
// } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
// import useRole from "../Hooks/useRole";
// import { MdDashboard } from "react-icons/md";
// import { AiFillHeart } from "react-icons/ai";
// import nav__logo from '../assets/navLogo/academix_footer_logo-removebg-preview.png';

// import Loading from "./Loading";
// import useWhisList from "../Hooks/useWhisList";

// const Navbar = () => {
//   const { user, logOut } = useAuth();
//   const [data] = useRole();
//   const navigate = useNavigate();

//   const [darkMode, setDarkMode] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // Loading state
//   const   [whislists,refetch] = useWhisList()

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   // Loading handler with route navigation
//   const handleNavigation = (path) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       navigate(path);
//       setIsLoading(false);
//     }, 1000); // Adjust duration as needed
//   };

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "All Classes", path: "/allClass" },

//     // shows teach on academex when role !== teacher
//       ...(
//         data?.role !== 'teacher' ?  [
//           { name: "Teach On EduSpark", path: "/TeachOn" },

//         ]  : []
//       ),
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md sticky top-0 z-50 py-2">
//       {isLoading && <Loading />} {/* Show loader */}

//       <div className=" px-4 sm:px-6 md:px-16 2xl:px-22 py-3 flex justify-between items-center">
//                <div className="flex items-center  gap-x-3">
//                   <motion.img
//           initial={{ x: -30, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           className=" w-[50px] cursor-pointer"
//           src={nav__logo}
//           alt="Logo"
//           onClick={() => handleNavigation("/")}
//         />
//               <p className="font-semibold text-xl md:text-2xl">EduSpark</p>
//                </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {navItems.map((item, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleNavigation(item.path)}
//               className="hover:text-[#39B8AD] transition duration-200"
//             >
//               {item.name}
//             </button>
//           ))}


//             {/* favourite badge */}

//             <Link to='whisLists' className="relative flex items-center gap-2 px-4 py-2 transition-all duration-200">
//       <AiFillHeart className="text-[#39B8AD] text-3xl" />

//       {/* Badge */}
//       <span className="absolute -top-1 -right-2 bg-[#39B8AD] text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-lg animate-bounce">
//         {whislists?.length}
//       </span>
//     </Link>


//             {/* darkmode/light mode  */}
//           {/* <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="text-xl hover:text-yellow-400 transition duration-200"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button> */}

//           {user ? (
//             <div className="relative group cursor-pointer">
//               <div className="avatar flex items-center gap-2">
//                 <div className="w-10 rounded-full ring ring-primary ring-offset-2">
//                   <img src={user?.photoURL} alt={user?.displayName} />
//                 </div>
//                 {/* <span className="hidden lg:block font-semibold">{user.displayName}</span> */}
//               </div>
//               <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 opacity-0 group-hover:opacity-100 transition duration-200 z-20">
//                 {/* User Info and Role-Based Dashboard */}
//                 <Link to="/profile" className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <FaUser /> Profile
//                 </Link>
//                 {data?.role === 'admin' && (
//                   <button onClick={() => handleNavigation("/dashboard/teacherRequest")} className="w-full text-left flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
//                     <MdDashboard /> Dashboard
//                   </button>
//                 )}
//                 {data?.role === 'teacher' && (
//                   <button onClick={() => handleNavigation("/dashboard/addClass")} className="w-full text-left flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
//                     <MdDashboard /> Dashboard
//                   </button>
//                 )}
//                 {data?.role === 'student' && (
//                   <button onClick={() => handleNavigation("/dashboard/myEnrollMent")} className="w-full text-left flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
//                     <MdDashboard /> Dashboard
//                   </button>
//                 )}
//                 <button onClick={logOut} className="w-full flex items-center gap-2 text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <FaSignOutAlt /> Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <button onClick={() => handleNavigation("/signIn")} className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
//                 log In
//               </button>
//               <button onClick={() => handleNavigation("/signUp")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
//                 Sign Up
//               </button>
//             </>
//           )}
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       {menuOpen && (
//         <motion.div
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="md:hidden bg-white dark:bg-gray-900 px-4 py-3 space-y-3 border-t border-gray-200 dark:border-gray-700"
//         >
//           {navItems.map((item, idx) => (
//             <button
//               key={idx}
//               onClick={() => {
//                 setMenuOpen(false);
//                 handleNavigation(item.path);
//               }}
//               className="block text-lg hover:text-[#39B8AD] transition"
//             >
//               {item.name}
//             </button>
//           ))}

//           {user ? (
//             <>
//               <div className="flex items-center gap-3 mt-4">
//                 <img src={user.photoURL} className="w-10 h-10 rounded-full" alt="User" />
//                 <div>
//                   <p className="font-semibold">{user.displayName}</p>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">{data?.role || 'User'}</p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
//                 </div>
//               </div>
//               <div className="mt-3">
//                 <button onClick={() => handleNavigation("/profile")} className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <FaUser /> Profile
//                 </button>
//                 <button onClick={() => handleNavigation("/dashboard")} className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <MdDashboard /> Dashboard
//                 </button>
//                 <button onClick={() => { logOut(); setMenuOpen(false); }} className="flex items-center gap-2 w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <FaSignOutAlt /> Logout
//                 </button>
//               </div>
//             </>
//           ) : (
//             <div className="flex flex-col gap-2">
//               <button onClick={() => handleNavigation("/signIn")} className="btn_primary transition">log In</button>
//               <button onClick={() => handleNavigation("/signUp")} className="btn_secondary transition">Sign Up</button>
//             </div>
//           )}

//             <div className="flex gap-x-8">

//  {/* responsive darkmode/light mode */}

//  <button onClick={() => setDarkMode(!darkMode)} className=" my-6 flex items-center px-4  text-2xl">
//             {darkMode ? <FaSun /> : <FaMoon />} 
//           </button>


//             {/* responsive favourite badge */}

//             <Link to='whisLists' className="relative flex items-center gap-2 px-4 py-2 transition-all duration-200">
//       <AiFillHeart className="text-[#39B8AD] text-3xl" />

//       {/* Badge */}
//       <span className="absolute -top-1 -right-2 bg-[#39B8AD] text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow-lg animate-bounce">
//         +99
//       </span>
//     </Link>


//             </div>
 
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
