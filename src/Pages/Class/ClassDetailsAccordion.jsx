import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { RiPlayCircleLine } from "react-icons/ri";

const ClassDetailsAccordion = ({ accordionData }) => {
    return (
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all group cursor-pointer border border-transparent hover:border-slate-100">
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <RiPlayCircleLine className="text-xl" />
                </div>
                <p className="text-sm font-medium text-slate-700 group-hover:text-indigo-700 transition-colors">
                    {accordionData}
                </p>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">
                    12:40
                </span>
            </div>
        </div>
    );
};

export default ClassDetailsAccordion;