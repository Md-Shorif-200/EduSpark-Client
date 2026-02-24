import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';
import ClassUpdateModal from './ClassUpdateModal';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const statusConfig = {
  approved: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  pending: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
  rejected: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
};

const MyAllClassDataTable = ({ myClasses, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleDeleteButton = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axiosSecure.delete(`/classes/${id}`);
        if (data?.deletedCount > 0) {
          Swal.fire('Deleted!', 'Your class has been deleted.', 'success');
          refetch();
        }
      } catch (err) {
        Swal.fire('Error!', 'Something went wrong.', 'error');
        console.error(err);
      }
    }
  };

  if (myClasses.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-lg font-medium">No classes found</p>
        <p className="text-sm mt-1">Start by adding a new class.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-linear-to-r from-indigo-600 to-indigo-700 text-white">
            <th className="px-5 py-4 font-semibold tracking-wide rounded-tl-xl">#</th>
            <th className="px-5 py-4 font-semibold tracking-wide">Image</th>
            <th className="px-5 py-4 font-semibold tracking-wide">Course Title</th>
            <th className="px-5 py-4 font-semibold tracking-wide">Price</th>
            <th className="px-5 py-4 font-semibold tracking-wide">Status</th>
            <th className="px-5 py-4 font-semibold tracking-wide text-center rounded-tr-xl">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {myClasses.map((singleClass, index) => {
            const { _id, title, price, description, image, status } = singleClass;
            const style = statusConfig[status] || statusConfig.pending;

            return (
              <tr
                key={_id || index}
                className="hover:bg-indigo-50/40 transition-colors duration-150"
              >
                <td className="px-5 py-4 font-medium text-gray-500">{index + 1}</td>

                <td className="px-5 py-4">
                  <img
                    src={image}
                    alt={title}
                    className="w-12 h-12 rounded-lg object-cover ring-1 ring-gray-200"
                  />
                </td>

                <td className="px-5 py-4">
                  <p className="font-semibold text-gray-800 truncate max-w-[220px]">{title}</p>
                  <p className="text-xs text-gray-400 mt-0.5 truncate max-w-[220px]">{description}</p>
                </td>

                <td className="px-5 py-4 font-semibold text-gray-800">${price}</td>

                <td className="px-5 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                    {status?.charAt(0).toUpperCase() + status?.slice(1)}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center justify-center gap-1">
                    {/* Update */}
                    <ClassUpdateModal
                      refetch={refetch}
                      id={_id}
                      title={title}
                      image={image}
                      description={description}
                      price={price}
                      renderTrigger={(open) => (
                        <div className="relative group">
                          <button
                            onClick={open}
                            className="p-2 rounded-lg text-indigo-600 hover:bg-indigo-100 transition-colors duration-150 cursor-pointer"
                          >
                            <FiEdit2 size={16} />
                          </button>
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-xs font-medium text-white bg-gray-800 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            Update Course
                            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                          </span>
                        </div>
                      )}
                    />

                    {/* Delete */}
                    <div className="relative group">
                      <button
                        onClick={() => handleDeleteButton(_id)}
                        className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors duration-150 cursor-pointer"
                      >
                        <FiTrash2 size={16} />
                      </button>
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-xs font-medium text-white bg-gray-800 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        Delete Course
                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                      </span>
                    </div>

                    {/* See Details */}
                    <div className="relative group">
                      {status === 'pending' || status === 'rejected' ? (
                        <>
                          <button
                            disabled
                            className="p-2 rounded-lg text-gray-300 cursor-not-allowed"
                          >
                            <FiEye size={16} />
                          </button>
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-xs font-medium text-white bg-gray-800 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            Awaiting Approval
                            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                          </span>
                        </>
                      ) : (
                        <>
                          <Link
                            to={`/dashboard/myClassDetails/${_id}`}
                            className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors duration-150 inline-flex"
                          >
                            <FiEye size={16} />
                          </Link>
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-xs font-medium text-white bg-gray-800 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            See Details
                            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyAllClassDataTable;
