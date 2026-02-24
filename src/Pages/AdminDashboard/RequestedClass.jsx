import { useState, useEffect } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useClass from '../../Hooks/useClass';
import toast from 'react-hot-toast';
import Loading from '../../Common/Loading';
import { HiDotsVertical } from 'react-icons/hi';
import { FiCheck, FiX, FiTrash2 } from 'react-icons/fi';

const RequestedClass = () => {
  const axiosSecure = useAxiosSecure();
  const [classes, refetch, isLoading] = useClass();
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const close = () => setOpenMenu(null);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  if (isLoading) return <Loading />;

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

  const handleApprove = (id) => {
    setOpenMenu(null);
    confirmAction('Approve this class?', () => {
      axiosSecure
        .patch(`/classes/approve/${id}`)
        .then((result) => {
          if (result.data.modifiedCount > 0) {
            toast.success('Class approved!');
            refetch();
          } else if (result.data.modifiedCount === 0 && result.data.matchedCount === 1) {
            toast.error('This class is already approved');
          }
        })
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const handleReject = (id) => {
    setOpenMenu(null);
    confirmAction('Reject this class?', () => {
      axiosSecure
        .patch(`/classes/reject/${id}`)
        .then((result) => {
          if (result.data.modifiedCount > 0) {
            toast.success('Class rejected successfully');
            refetch();
          } else if (result.data.modifiedCount === 0 && result.data.matchedCount > 0) {
            toast.error('This class is already rejected');
          }
        })
        .catch((err) => console.error(err));
    });
  };

  const handleDelete = (id) => {
    setOpenMenu(null);
    confirmAction('Delete this class? This cannot be undone.', () => {
      const deleteToast = toast.loading('Deleting class...');
      axiosSecure
        .delete(`/classes/${id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            toast.success('Class deleted successfully', { id: deleteToast });
            refetch();
          } else {
            toast.error('Failed to delete class', { id: deleteToast });
          }
        })
        .catch(() => toast.error('An error occurred while deleting', { id: deleteToast }));
    });
  };

  const statusColor = {
    pending: 'bg-amber-50 text-amber-700',
    approved: 'bg-emerald-50 text-emerald-700',
    rejected: 'bg-red-50 text-red-700',
  };

  return (
    <div className="p-4 md:p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Requested Classes</h2>
            <p className="text-sm text-gray-500 mt-1">Review and manage class submissions</p>
          </div>
          <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700">
            {classes.length} classes
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
                  Class
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Teacher
                </th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">
                  Email
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
              {classes.map((singleClass, index) => (
                <tr key={singleClass._id || index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={singleClass?.image}
                        className="w-9 h-9 rounded-lg object-cover ring-2 ring-gray-100"
                        alt=""
                      />
                      <span className="text-sm font-medium text-gray-900 capitalize">
                        {singleClass?.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 capitalize">{singleClass?.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 lowercase">{singleClass?.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColor[singleClass.status] || ''}`}
                    >
                      {singleClass?.status}
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
                            onClick={() => handleApprove(singleClass._id)}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition cursor-pointer"
                          >
                            <FiCheck className="text-base" /> Approve
                          </button>
                          <button
                            onClick={() => handleReject(singleClass._id)}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition cursor-pointer"
                          >
                            <FiX className="text-base" /> Reject
                          </button>
                          <div className="border-t border-gray-100 my-1"></div>
                          <button
                            onClick={() => handleDelete(singleClass._id)}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition cursor-pointer"
                          >
                            <FiTrash2 className="text-base" /> Delete
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

        {classes.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm">No class requests found</div>
        )}
      </div>
    </div>
  );
};

export default RequestedClass;
