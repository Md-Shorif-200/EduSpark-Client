import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ClassUpdateModal from './ClassUpdateModal';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyClassCard = ({ refetch, singleClass }) => {
  const { _id, title, name, email, price, description, image, status } = singleClass;
  const axiosSecure = useAxiosSecure();

  // Optimized Delete Function
  const handleDeleteButton = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axiosSecure.delete(`/classes/${_id}`);
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

  return (
    <div className="rounded-xl shadow-md bg-white border border-gray-100 overflow-hidden">
      <img
        src={image}
        alt="class"
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-1">Course Fee: <span className="font-medium text-gray-800">${price}</span></p>
        <p className="text-gray-600 text-sm mb-2">Status: <span className="font-medium text-blue-600">{status}</span></p>

        <div className="flex items-center justify-between gap-3 mb-4">
          <ClassUpdateModal
            refetch={refetch}
            id={_id}
            title={title}
            image={image}
            description={description}
            price={price}
          />

          <button
            onClick={handleDeleteButton}
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition duration-200 w-[100px]"
          >
            Delete
          </button>
        </div>

        {status === 'pending' || status === 'rejected' ? (
          <div className="tooltip w-full">
            <div className="tooltip-content">
              <p className="text-sm text-yellow-600">The button will open when the status is approved.</p>
            </div>
            <button className="btn bg-gray-200 text-gray-400 w-full cursor-not-allowed" disabled>
              See Details
            </button>
          </div>
        ) : (
          <Link
            to={`/dashboard/myClassDetails/${_id}`}
            className="btn bg-blue-600 hover:bg-blue-700 text-white w-full transition duration-200"
          >
            See Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default MyClassCard;