import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import DesktopNavbar from "./DesktopNavbar";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const { user } = useAuth();
  const [data] = useRole();
  const [isActive, setIsActive] = useState(false);

  const handleMenuIcon = () => setIsActive(true);
  const closeSidebar = () => setIsActive(false);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
        <DesktopNavbar user={user} handleMenuIcon={handleMenuIcon} />
      </header>

      <MobileSidebar
        user={user}
        data={data}
        isActive={isActive}
        closeSidebar={closeSidebar}
        setIsActive={setIsActive}
      />
    </>
  );
};

export default Navbar;
