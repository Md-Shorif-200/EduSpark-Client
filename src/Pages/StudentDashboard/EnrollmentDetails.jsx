import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineBookOpen, HiOutlineClipboardCheck, HiOutlineExternalLink } from "react-icons/hi";
import toast from 'react-hot-toast';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAssignments from "../../Hooks/useAssignments";
import useAuth from "../../Hooks/useAuth";
import FeedbackModal from "./FeedbackModal";
import Loading from "../../Common/Loading";
import emptyImg from '../../assets/assignment/8767132.jpg';

const EnrollmentDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [assignments, , isAssignmentsLoading] = useAssignments();

  const { data, isLoading: isPaymentLoading } = useQuery({
    queryKey: ["payment-details", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payments/${id}`);
      return data;
    },
  });

  if (isPaymentLoading || isAssignmentsLoading) return <Loading />;

  const paymentId = data?.paymentId;
  const myClassAssignments = assignments.filter(
    (assignment) => assignment.assignmentId === paymentId
  );

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    const submissionLink = e.target.submissionLink.value;
    
    const submissionInfo = {
      name: user?.displayName,
      email: user?.email,
      submissionTime: new Date(),
      submissionLink: submissionLink,
      submitedId: paymentId
    };

    try {
      const response = await axiosSecure.post('/submit-asignment', submissionInfo);
      if (response.data.insertedId) {
        e.target.reset();
        toast.success('Assignment submitted successfully!');
      }
    } catch (error) {
      toast.error('Failed to submit assignment');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mb-10 gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-800">{data?.courseTitle}</h1>
          <p className="text-slate-500 mt-1">Manage your course progress and assignments</p>
        </div>
        <div className="flex items-center gap-3">
           <FeedbackModal classData={data} />
        </div>
      </div>

      {myClassAssignments.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
          <img src={emptyImg} alt="No assignments" className="w-64 mx-auto opacity-80" />
          <h2 className="text-2xl font-bold text-slate-700 mt-6">No Assignments Found</h2>
          <p className="text-slate-500">Your instructor hasn't posted any tasks for this class yet.</p>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-2 mb-8">
            <HiOutlineBookOpen className="text-2xl text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-800">Class Assignments</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {myClassAssignments.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-6 md:flex justify-between items-start gap-8">
                  
                  {/* Info Column */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full">TASK {index + 1}</span>
                      <span className="text-sm text-red-500 font-semibold italic">Deadline: {item.dedline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Submission Column */}
                  <div className="mt-6 md:mt-0 w-full md:w-80">
                    <form onSubmit={handleSubmitButton} className="space-y-3">
                      <div className="relative">
                        <textarea 
                          name="submissionLink"
                          required
                          placeholder="Paste Github/Live link here..."
                          className="w-full h-24 p-4 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none transition-all resize-none"
                        />
                      </div>
                      <button 
                        type="submit" 
                        className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-100"
                      >
                        <HiOutlineClipboardCheck className="text-lg" />
                        Submit Work
                      </button>
                    </form>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollmentDetails;