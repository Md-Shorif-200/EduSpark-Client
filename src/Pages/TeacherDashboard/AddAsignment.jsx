import React, { useState } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { HiPlus } from "react-icons/hi";
// Import a spinner icon if you want, or just use text
import { ImSpinner2 } from "react-icons/im"; 

const AddAsignment = ({ myClassDetails, refetch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false); // Local loading state
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setLoading(true); // Start loading
        const assignmentInfo = {
            title: data.title,
            dedline: data.dedline,
            description: data.description,
            teacherName: myClassDetails?.name,
            assignmentId: myClassDetails?._id,
        };

        axiosSecure.post("/assignments", assignmentInfo)
            .then((res) => {
                if (res.data.insertedId) {
                    toast.success("Assignment published!");
                    reset();
                    refetch();
                    setIsOpen(false);
                }
            })
            .catch(() => toast.error("Failed to add assignment"))
            .finally(() => setLoading(false)); // Stop loading regardless of success/fail
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-md shadow-indigo-200 cursor-pointer active:scale-95"
            >
                <HiPlus className="text-xl" />
                <span>Create Assignment</span>
            </button>

            <Transition show={isOpen} as={React.Fragment}>
                <Dialog onClose={() => !loading && setIsOpen(false)} className="relative z-50">
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" />
                    </TransitionChild>

                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl">
                                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                                    New Assignment
                                </h2>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                    {/* ... Input fields remain the same ... */}
                                    <div className="form-control">
                                        <label className="text-sm font-semibold text-slate-600 mb-2 block">Title</label>
                                        <input
                                            type="text"
                                            disabled={loading}
                                            placeholder="e.g. Project Proposal"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-slate-700 disabled:bg-slate-50"
                                            {...register("title", { required: true })}
                                        />
                                        {errors.title && <span className="text-xs text-rose-500 mt-1 ml-1">Title is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="text-sm font-semibold text-slate-600 mb-2 block">Deadline</label>
                                        <input
                                            type="date"
                                            disabled={loading}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-slate-700 disabled:bg-slate-50"
                                            {...register("dedline", { required: true })}
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="text-sm font-semibold text-slate-600 mb-2 block">Description</label>
                                        <textarea
                                            rows={3}
                                            disabled={loading}
                                            placeholder="Describe the tasks..."
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all text-slate-700 disabled:bg-slate-50"
                                            {...register("description", { required: true })}
                                        />
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <button
                                            type="button"
                                            disabled={loading}
                                            onClick={() => setIsOpen(false)}
                                            className="flex-1 px-4 py-3 rounded-xl bg-slate-100 text-slate-600 font-semibold hover:bg-slate-200 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Cancel
                                        </button>
                                        
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 cursor-pointer disabled:bg-indigo-400 disabled:cursor-not-allowed"
                                        >
                                            {loading ? (
                                                <>
                                                    <ImSpinner2 className="animate-spin text-lg" />
                                                    <span>Processing...</span>
                                                </>
                                            ) : (
                                                "Publish"
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default AddAsignment;