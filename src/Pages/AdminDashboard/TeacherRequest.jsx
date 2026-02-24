import { useState, useEffect } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Common/Loading';
import { HiDotsVertical } from 'react-icons/hi';
import { FiCheck, FiX } from 'react-icons/fi';

const TeacherRequest = () => {
  const axiosSecure = useAxiosSecure();
  const [openMenu, setOpenMenu] = useState(null);

  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  useEffect(() => {
    const close = () => setOpenMenu(null);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  if (isLoading) return <Loading />;

  const teachers = users.filter(
    (user) => user.status === 'pending' || user.status === 'accepted' || user.status === 'rejected'
  );

  const confirmAction = (message, onConfirm) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="font-medium text-gray-800">{message}</p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1.5 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                onConfirm();
              }}
              className="px-3 py-1.5 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      { duration: 8000 }
    );
  };

  const handleApprove = (teacher) => {
    setOpenMenu(null);
    confirmAction(`Approve ${teacher.name} as a teacher?`, () => {
      axiosSecure
        .patch(`/users/teacher/confirm/${teacher.email}`)
        .then((result) => {
          if (result.data.modifiedCount > 0) {
            toast.success(`${teacher.name} is a teacher now!`);
            refetch();
          } else if (result.data.modifiedCount === 0 && result.data.matchedCount > 0) {
            toast.error('Already approved');
          }
        })
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const handleReject = (teacher) => {
    setOpenMenu(null);
    confirmAction(`Reject ${teacher.name}'s request?`, () => {
      axiosSecure
        .patch(`/users/teacher/reject/${teacher.email}`)
        .then((result) => {
          if (result.data.modifiedCount > 0) {
            toast.success('Rejected successfully');
            refetch();
          } else {
            toast.error('Something went wrong');
          }
        })
        .catch((err) => console.error(err));
    });
  };

  const statusColor = {
    pending: 'bg-amber-50 text-amber-700',
    accepted: 'bg-emerald-50 text-emerald-700',
    rejected: 'bg-red-50 text-red-700',
  };

  return (
    <div className="p-4 md:p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Teacher Requests</h2>
            <p className="text-sm text-gray-500 mt-1">Manage teacher application requests</p>
          </div>
          <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700">
            {teachers.length} requests
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  #
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Teacher
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Title
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Experience
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Status
                </th>
                <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {teachers.map((teacher, index) => (
                <tr key={teacher._id || index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={teacher.image}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-100"
                        alt=""
                      />
                      <span className="text-sm font-medium text-gray-900 capitalize">{teacher.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 capitalize">{teacher?.skills?.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 capitalize">{teacher?.skills?.experience}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColor[teacher.status] || ''}`}
                    >
                      {teacher.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="relative inline-block">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenu(openMenu === index ? null : index);
                        }}
                        className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-400 hover:text-gray-600 cursor-pointer"
                      >
                        <HiDotsVertical className="text-lg" />
                      </button>

                      {openMenu === index && (
                        <div className="absolute right-0 mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                          <button
                            onClick={() => handleApprove(teacher)}
                            disabled={teacher.status === 'rejected'}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                          >
                            <FiCheck className="text-base" /> Approve
                          </button>
                          <button
                            onClick={() => handleReject(teacher)}
                            disabled={teacher.status === 'rejected'}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                          >
                            <FiX className="text-base" /> Reject
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {teachers.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm">No teacher requests found</div>
        )}
      </div>
    </div>
  );
};

export default TeacherRequest;
