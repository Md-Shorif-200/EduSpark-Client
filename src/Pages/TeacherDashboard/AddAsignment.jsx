import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Button } from "@headlessui/react";

const AddAsignment = ({ myClassDetails, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const onSubmit = (data) => {
    const assignmentInfo = {
      title: data.title,
      dedline: data.dedline,
      description: data.description,
      teacherName: myClassDetails?.name,
      assignmentId: myClassDetails?._id,
    };

    axiosSecure
      .post("/assignments", assignmentInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Assignment added successfully!");
          reset();
          refetch();
          close();
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.error(err);
      });
  };

  return (
    <>
      <button
        onClick={open}
        className="px-6 py-2 rounded-lg bg-[#121212] hover:bg-[#333] text-white font-semibold transition duration-200"
      >
        + Create Assignment
      </button>

      <Dialog
        open={isOpen}
        onClose={close}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <DialogPanel className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8 space-y-6 relative">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Add New Assignment
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Assignment Title
                </label>
                <input
                  type="text"
                  placeholder="Enter title"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required.
                  </p>
                )}
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Deadline
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("dedline", { required: true })}
                />
                {errors.dedline && (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required.
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Write assignment details..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    This field is required.
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-6">
                <button
                  type="button"
                  onClick={close}
                  className="w-1/2 mr-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Add Assignment
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default AddAsignment;
