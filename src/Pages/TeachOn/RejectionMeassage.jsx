import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { HiOutlineExclamationTriangle, HiOutlineArrowPath } from 'react-icons/hi2';
import toast from 'react-hot-toast';

const RejectionMessage = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleRequestButton = async () => {
    const email = user?.email;
    try {
      const result = await axiosSecure.patch(`/users/reject/${email}`);
      if (result.data.modifiedCount > 0) {
        toast.success('Re-application request sent successfully!');
      } else {
        toast.error('Unable to process request at this time.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-100 shadow-xl p-8 text-center">
        
        {/* Warning Icon */}
        <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
          <HiOutlineExclamationTriangle className="text-3xl text-red-500" />
        </div>

        {/* Text Content */}
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Application Update</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">
          We regret to inform you that your teacher application was not approved at this time. 
          Don't worry—you can update your profile and try again.
        </p>

        {/* Action Button */}
        <button 
          onClick={handleRequestButton}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer"
        >
          <HiOutlineArrowPath className="text-xl" />
          Request Re-application
        </button>

        <p className="mt-6 text-xs text-slate-400 italic">
          Our team usually reviews requests within 24-48 hours.
        </p>
      </div>
    </div>
  );
};

export default RejectionMessage;