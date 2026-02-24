import React from "react";
import AdminMenu from "./AdminMenu";
import TeacherMenu from "./TeacherMenu";
import StudentMenu from "./StudentMenu";
import useRole from "../../Hooks/useRole";
import Loading from "../../Common/Loading";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import nav__logo from "../../assets/navLogo/Nav_logo.png";

const DashboardSidebar = ({ onClose }) => {
  const [data, isLoading] = useRole();
  const role = data?.role;

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-full w-72 bg-white">
  //       <Loading />
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <Link to="/" className="flex items-center gap-3">
          <img src={nav__logo} alt="EduSpark" className="w-10 h-10" />
          <span className="text-xl font-bold text-indigo-600 tracking-tight">
            EduSpark
          </span>
        </Link>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors md:hidden"
        >
          <FiX size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {role === "admin" && <AdminMenu />}
        {role === "teacher" && <TeacherMenu />}
        {role === "student" && <StudentMenu />}
      </div>
    </div>
  );
};

export default DashboardSidebar;
