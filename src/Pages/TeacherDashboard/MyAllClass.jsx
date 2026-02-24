import React from 'react';
import useClass from '../../Hooks/useClass';
import useAuth from '../../Hooks/useAuth';
import MyAllClassDataTable from './MyAllClassDataTable';
import Loading from '../../Common/Loading';

const MyAllClass = () => {
  const { user } = useAuth();
  const [classes, refetch, isLoading] = useClass();

  const myClasses = classes.filter((data) => data?.email === user?.email);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">My All Classes</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage and track all your created courses
        </p>
      </div>

      <div className="flex items-center justify-between mb-5 px-1">
        <p className="text-sm text-gray-500">
          Total: <span className="font-semibold text-gray-700">{myClasses.length}</span> classes
        </p>
      </div>

      <MyAllClassDataTable myClasses={myClasses} refetch={refetch} />
    </div>
  );
};

export default MyAllClass;
