import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineSparkles, HiOutlineArrowRight } from 'react-icons/hi2';
import Confetti from 'react-confetti'; // Optional: npm install react-confetti

const TeacherConfirmation = () => {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center bg-slate-50 overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full px-6">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10 text-center">
          {/* Animated Icon Container */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-50 rounded-2xl mb-8 animate-bounce">
            <HiOutlineSparkles className="text-4xl text-indigo-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Welcome to the <br /> 
            <span className="text-indigo-600">Teaching Team!</span>
          </h1>

          <p className="text-lg text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">
            Your application has been approved. You now have access to the teacher dashboard to create and manage your classes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/dashboard/teacher" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-100"
            >
              Create Your First Class
              <HiOutlineArrowRight className="text-xl" />
            </Link>
            
            <Link 
              to="/dashboard/teacher" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl hover:bg-slate-50 transition-all"
            >
              View Dashboard
            </Link>
          </div>

          <p className="mt-8 text-3xl">🎉</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherConfirmation;