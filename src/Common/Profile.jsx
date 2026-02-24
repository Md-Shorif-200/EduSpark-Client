import { useState } from 'react';
import { MdEdit, MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaAddressBook } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import EditProfileModal from './EditProfileModal';

const Profile = () => {
  const { user } = useAuth();
  const [data, refetch, isLoading] = useRole();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const infoItems = [
    { icon: <MdEmail className="text-indigo-500" />, value: user?.email, lowercase: true },
    { icon: <IoLogoWhatsapp className="text-green-500" />, value: user?.phoneNumber },
    { icon: <FaAddressBook className="text-indigo-400" />, value: user?.address },
  ].filter((item) => item.value);

  return (
    <section className="relative mb-20">
      {/* Cover */}
      <div className="h-48 md:h-56 bg-linear-to-r from-indigo-600 via-indigo-500 to-purple-500" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start">
          {/* Avatar */}
          <div className="shrink-0 -mt-20 sm:-mt-24">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-md overflow-hidden bg-indigo-100 flex items-center justify-center">
              {user?.photoURL ? (
                <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
              ) : (
                <FiUser className="text-indigo-400 text-5xl" />
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div>
                {data?.role && (
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-2">
                    {data.role}
                  </span>
                )}
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 capitalize">
                  {user?.displayName}
                </h1>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
              >
                <MdEdit className="text-base" />
                Edit Profile
              </button>
            </div>

            {infoItems.length > 0 && (
              <div className="space-y-2">
                {infoItems.map((item, i) => (
                  <p
                    key={i}
                    className={`flex items-center gap-2 text-gray-600 ${item.lowercase ? 'lowercase' : 'capitalize'} justify-center sm:justify-start`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.value}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <EditProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Profile;
