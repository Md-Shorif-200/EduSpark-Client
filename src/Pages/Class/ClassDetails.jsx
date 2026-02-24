import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useClass from '../../Hooks/useClass';

// Material UI
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Icons
import { RiHome2Line, RiTimeLine, RiUser3Line } from "react-icons/ri";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { GoProjectSymlink } from 'react-icons/go';
import { LiaCircleNotchSolid } from "react-icons/lia";
import { HiOutlineFolderOpen } from "react-icons/hi";

import ClassDetailsAccordion from './ClassDetailsAccordion';
import img from '../../assets/InspireTeacher/teacher-6831688_640.webp';

const ClassDetails = () => {
    const { id } = useParams();
    const [classes] = useClass();
    const classDetails = classes.find(cls => cls._id === id);

    const gettingStarted = classDetails?.courseCurriculam?.slice(0, 5);

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header Section */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                  

                    <div className="lg:w-2/3">
                        <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                            {classDetails?.category}
                        </span>
                        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                            {classDetails?.title}
                        </h1>

                        <div className="flex flex-wrap gap-6 items-center text-slate-600">
                            <div className="flex items-center gap-3">
                                <img src={img} alt="Teacher" className="w-10 h-10 rounded-full ring-2 ring-white shadow-sm" />
                                <div>
                                    <p className="text-xs text-slate-400 uppercase font-bold">Instructor</p>
                                    <p className="text-sm font-semibold text-slate-800">{classDetails?.name}</p>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-slate-200 hidden md:block"></div>

                            <div>
                                <p className="text-xs text-slate-400 uppercase font-bold text-center md:text-left">Rating</p>
                                <div className="flex items-center gap-1 text-amber-400 text-sm">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                    <span className="text-slate-800 font-bold ml-1">4.5</span>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-slate-200 hidden md:block"></div>

                            <div>
                                <p className="text-xs text-slate-400 uppercase font-bold">Last Updated</p>
                                <p className="text-sm font-semibold text-slate-800">{classDetails?.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-10">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Left Side: Info */}
                    <div className="lg:w-2/3 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
                                About this course
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-lg italic">
                                "{classDetails?.description}"
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Curriculum</h2>
                            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                                <Accordion defaultExpanded elevation={0} square className="border-b border-slate-100">
                                    <AccordionSummary expandIcon={<ExpandMoreIcon className="text-indigo-600" />}>
                                        <div className="flex items-center gap-3 font-bold text-slate-800">
                                            <HiOutlineFolderOpen className="text-xl text-indigo-500" />
                                            Getting Started
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails className="bg-slate-50/50">
                                        <div className="space-y-1">
                                            {gettingStarted?.map((data, index) => (
                                                <ClassDetailsAccordion key={index} accordionData={data} />
                                            ))}
                                        </div>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion elevation={0} square>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon className="text-indigo-600" />}>
                                        <div className="flex items-center gap-3 font-bold text-slate-800">
                                            <HiOutlineFolderOpen className="text-xl text-indigo-500" />
                                            Advanced Concepts
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p className="text-slate-500 text-sm">Technical deep dive into current modules.</p>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </section>
                    </div>

                    {/* Right Side: Enroll Card */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-8 border border-slate-200 rounded-2xl bg-white shadow-xl shadow-slate-100 overflow-hidden">
                            <img src={classDetails?.image} alt="Course cover" className="w-full aspect-video object-cover" />
                            
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-3xl font-black text-slate-900">${classDetails?.price}</span>
                                    <span className="text-sm text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-md">Bestseller</span>
                                </div>

                                <Link to={`/payment/${classDetails?._id}`} className="block">
                                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-100 active:scale-95">
                                        Enroll Now
                                    </button>
                                </Link>

                                <div className="mt-8 space-y-4">
                                    <h3 className="font-bold text-slate-900 text-sm uppercase tracking-widest">This course includes:</h3>
                                    
                                    <div className="flex items-center justify-between text-slate-600">
                                        <div className="flex items-center gap-3">
                                            <MdOutlineSlowMotionVideo className="text-indigo-500 text-xl" />
                                            <span className="text-sm font-medium">Video Lectures</span>
                                        </div>
                                        <span className="font-bold">{classDetails?.totalLectures}</span>
                                    </div>

                                    <div className="flex items-center justify-between text-slate-600">
                                        <div className="flex items-center gap-3">
                                            <GoProjectSymlink className="text-indigo-500 text-xl" />
                                            <span className="text-sm font-medium">Hands-on Projects</span>
                                        </div>
                                        <span className="font-bold">{classDetails?.totalProjects}</span>
                                    </div>

                                    <div className="flex items-center justify-between text-slate-600">
                                        <div className="flex items-center gap-3">
                                            <LiaCircleNotchSolid className="text-indigo-500 text-xl" />
                                            <span className="text-sm font-medium">Certificate</span>
                                        </div>
                                        <span className="font-bold text-indigo-600">Yes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ClassDetails;