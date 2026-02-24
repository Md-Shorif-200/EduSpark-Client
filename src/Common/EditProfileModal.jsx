import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditProfileModal = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.photo || data.photo.length === 0) {
      toast.error('Please select a photo');
      return;
    }

    try {
      const res = await axiosPublic.post(
        image_hosting_api,
        { image: data.photo[0] },
        { headers: { 'content-type': 'multipart/form-data' } }
      );

      if (res.data.success) {
        const updatedData = {
          name: user?.displayName,
          email: user?.email,
          image: res.data.data.display_url,
          phoneNumber: data.phone,
          address: data.address,
        };

        const response = await axiosSecure.patch(
          `/api/user/update-profile/${user?.email}`,
          updatedData
        );

        if (response.data.modifiedCount > 0) {
          toast.success('Profile updated successfully');
        } else {
          toast.error('No changes detected. Please try again.');
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }

    onClose();
    reset();
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-2.5 rounded-lg border bg-white text-sm outline-none transition
     ${hasError ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'}
     focus:ring-2`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-md rounded-2xl shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Edit Profile</h2>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-gray-100 transition cursor-pointer"
              >
                <MdClose className="text-xl text-gray-500" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-5 space-y-4">
              {/* Name (read-only) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-500 cursor-not-allowed"
                />
              </div>

              {/* Email (read-only) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-500 cursor-not-allowed"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="e.g. 01712345678"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: { value: /^[0-9]{10,14}$/, message: 'Enter a valid phone number' },
                  })}
                  className={inputClass(errors.phone)}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Your address"
                  {...register('address', { required: 'Address is required' })}
                  className={inputClass(errors.address)}
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
              </div>

              {/* Photo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  {...register('photo', { required: 'Photo is required' })}
                  className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100 file:cursor-pointer cursor-pointer"
                />
                {errors.photo && <p className="text-red-500 text-xs mt-1">{errors.photo.message}</p>}
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? 'Updating...' : 'Update'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditProfileModal;
