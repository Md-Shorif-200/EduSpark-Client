import React, { useState } from 'react';
import { Button, Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { Rating, CircularProgress } from '@mui/material';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const FeedbackModal = ({ classData }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    setLoading(true);
    const feedbackInfo = {
      studentName: user?.displayName,
      studentEmail: user?.email,
      studentImage: user?.photoURL,
      courseTitle: classData.courseTitle,
      teacherName: classData.TeacherName,
      date: new Date(),
      feedbackDescription: data.description,
      feedbackStar: rating,
    };

    try {
      const response = await axiosSecure.post('/feedback', feedbackInfo);
      if (response.data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Your feedback makes us better.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
        reset();
        setRating(0);
        setIsOpen(false);
      }
    } catch (error) {
      Swal.fire({ title: 'Error!', text: 'Failed to send feedback.', icon: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)} 
        className="mt-4 flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-md shadow-indigo-100 cursor-pointer"
      >
        <HiOutlineChatBubbleLeftRight className="text-xl" />
        Feedback
      </Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* Modern Blur Overlay */}
        <DialogBackdrop className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-all">
              
              <div className="text-center mb-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 mb-4">
                  <HiOutlineChatBubbleLeftRight className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Teaching Evaluation</h3>
                <p className="text-sm text-slate-500 mt-1">How was your experience with {classData.TeacherName}?</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Rating Section */}
                <div className="flex flex-col items-center py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Overall Rating</label>
                  <Rating 
                    size="large"
                    value={rating} 
                    onChange={(e, val) => setRating(val)} 
                  />
                </div>

                {/* Description Section */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Thoughts</label>
                  <textarea
                    className={`w-full h-32 p-4 rounded-xl border bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all resize-none ${
                      errors.description ? 'border-red-300' : 'border-slate-200 focus:border-indigo-500'
                    }`}
                    placeholder="Tell us what you liked or what could be improved..."
                    {...register("description", { required: true })}
                  ></textarea>
                  {errors.description && <p className="text-red-500 text-xs mt-1 font-medium">Please write a short review.</p>}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3 px-4 rounded-xl text-slate-600 font-semibold hover:bg-slate-100 transition-colors"
                  >
                    Not now
                  </button>

                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all flex justify-center items-center shadow-lg shadow-indigo-100 disabled:opacity-70"
                    disabled={loading || !rating}
                  >
                    {loading ? <CircularProgress size={20} color="inherit" /> : 'Submit Review'}
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default FeedbackModal;