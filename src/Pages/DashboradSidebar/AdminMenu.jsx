import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChalkboardTeacher, FaUsers, FaClipboardList, FaHome } from 'react-icons/fa';

const AdminMenu = () => {
    return (
        <div className='dashboard_menu bg-base-200 min-h-screen w-70 md:w-80 p-4'>
            <h2 className="text-xl font-bold mb-6 text-center text-primary">Admin Panel</h2>
            <ul className="bg-base-200 shadow-md rounded-xl min-h-full w-full md:w-60 lg:w-72 p-4 space-y-2 text-base-content">
                <li>
                    <NavLink
                        to="teacherRequest"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-primary hover:text-white ${
                                isActive ? 'bg-primary text-white font-semibold' : ''
                            }`
                        }
                    >
                        <FaChalkboardTeacher size={18} />
                        Teacher Request
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="users"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-primary hover:text-white ${
                                isActive ? 'bg-primary text-white font-semibold' : ''
                            }`
                        }
                    >
                        <FaUsers size={18} />
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="RequestedClass"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-primary hover:text-white ${
                                isActive ? 'bg-primary text-white font-semibold' : ''
                            }`
                        }
                    >
                        <FaClipboardList size={18} />
                        All Classes
                    </NavLink>
                </li>

                <div className="divider my-3"></div>

                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-primary hover:text-white ${
                                isActive ? 'bg-primary text-white font-semibold' : ''
                            }`
                        }
                    >
                        <FaHome size={18} />
                        Home
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default AdminMenu;
