import React, { useState } from 'react';
import { Button, Dialog, DialogPanel } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { Rating } from '@mui/material';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import CircularProgress from '@mui/material/CircularProgress';
import Loading from '../../Common/Loading';

const FeedbackModal = ({ classData }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

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
          title: 'Feedback given successfully!',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
        reset();
        setRating(0);
        setIsOpen(false);
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again.',
        icon: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="rounded-md btn_secondary mt-4">
        Feedback
      </Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="feedback_modal flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
              <h1 className="text-xl font-bold mb-4 text-center capitalize">Teaching Evaluation</h1>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block font-semibold mb-1">Feedback Description</label>
                  <textarea
                    className="textarea textarea-bordered w-full h-24"
                    placeholder="Write your opinion"
                    {...register("description", { required: true })}
                  ></textarea>
                  {errors.description && <p className="text-red-500 mt-1">This field is required</p>}
                </div>

                <div>
                  <label className="block font-semibold mb-1">Rate this course</label>
                  <Rating name="rating" value={rating} onChange={handleRatingChange} />
                </div>

                <div className="flex justify-between gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2 rounded-md border border-[#39B8AD] hover:bg-accent "
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className=" w-full py-2 rounded-md flex justify-center items-center bg-accent"
                    disabled={loading}
                  >
                         {loading ? <CircularProgress size={20} color="inherit" /> : 'Send'}
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
