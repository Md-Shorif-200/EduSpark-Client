import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import DesktopNavbar from "./DesktopNavbar";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const { user } = useAuth();
  const [data] = useRole();
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMenuIcon = () => setIsActive(true);
  const handleThemeToggle = () => setIsDarkMode(!isDarkMode);
  const closeSidebar = () => setIsActive(false);

  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-300">
      <DesktopNavbar
        user={user}
        isDarkMode={isDarkMode}
        handleThemeToggle={handleThemeToggle}
        handleMenuIcon={handleMenuIcon}
      />
      
      <MobileSidebar
        user={user}
        data={data}
        isActive={isActive}
        isDarkMode={isDarkMode}
        handleThemeToggle={handleThemeToggle}
        closeSidebar={closeSidebar}
        setIsActive={setIsActive}
      />
    </div>
  );
};

export default Navbar;