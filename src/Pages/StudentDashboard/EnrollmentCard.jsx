import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2'; // Modern arrow icon

const EnrollmentCard = ({ myPayment }) => {
  const { _id, courseTitle, TeacherName, courseBanner } = myPayment;

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          src={courseBanner}
          alt={courseTitle} 
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-slate-800 leading-snug mb-2 group-hover:text-indigo-600 transition-colors">
            {courseTitle}
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            By <span className="text-slate-700 underline decoration-slate-200">{TeacherName}</span>
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-8 border-t border-slate-50 pt-4">
          <Link 
            to={`/dashboard/myEnrollMent/enrollmentDetails/${_id}`} 
            className="inline-flex items-center justify-end w-full group/btn"
          >
            <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider">
              Continue Learning
            </span>
            <div className="p-2  text-indigo-600   transition-all duration-300 ">
              <HiArrowRight className="text-lg" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentCard;