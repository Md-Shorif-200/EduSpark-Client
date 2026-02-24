import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { useState, Fragment } from 'react';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { HiOutlinePencilAlt, HiOutlineX } from 'react-icons/hi'; // Ensure react-icons is installed

const ClassUpdateModal = ({ refetch, id, title, image, description, price, renderTrigger }) => {
  let [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  // Local State
  const [Title, setTitle] = useState(title);
  const [coursePhoto, setCoursePhoto] = useState(image);
  const [courseFee, setCourseFee] = useState(price);
  const [courseDescription, setCourseDescription] = useState(description);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const classUpdateData = {
      title: Title,
      image: coursePhoto,
      price: parseFloat(courseFee),
      description: courseDescription
    };

    try {
      const result = await axiosSecure.patch(`/classes/update/${id}`, classUpdateData);
      if (result.data.modifiedCount > 0) {
        toast.success('Class updated successfully!');
        refetch();
        close();
      } else {
        toast.info("No changes were made.");
        close();
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to update class.');
    }
  };

  return (
    <>
      {/* Trigger Logic */}
      {renderTrigger ? (
        renderTrigger(open)
      ) : (
        <button
          onClick={open}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-200 font-medium shadow-md shadow-indigo-200"
        >
          <HiOutlinePencilAlt className="w-4 h-4" />
          Update
        </button>
      )}

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={close}>
          {/* Backdrop blur for modern glass effect */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-2xl transition-all border border-slate-100">
                  
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <DialogTitle as="h3" className="text-2xl font-bold text-slate-800">
                      Update Class Details
                    </DialogTitle>
                    <button onClick={close} className="text-slate-400 hover:text-slate-600 transition-colors">
                      <HiOutlineX className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleUpdate} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Class Title</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                        placeholder="e.g. Advanced React Architecture"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Price ($)</label>
                        <input
                          type="number"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                          placeholder="99.99"
                          value={courseFee}
                          onChange={(e) => setCourseFee(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Photo URL</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
                          placeholder="https://image-link.com"
                          value={coursePhoto}
                          onChange={(e) => setCoursePhoto(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Description</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all resize-none"
                        placeholder="Describe the course content..."
                        value={courseDescription}
                        onChange={(e) => setCourseDescription(e.target.value)}
                        required
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={close}
                        className="flex-1 px-4 py-3 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ClassUpdateModal;