import React from 'react';
import useAuth from '../../Hooks/useAuth';
import usePayments from '../../Hooks/usePayments';
import EnrollmentCard from './EnrollmentCard';
import Loading from '../../Common/Loading';

const MyEnrollMent = () => {
  const { user } = useAuth();
  const [payments, , isLoading] = usePayments();

  if (isLoading) return <Loading />;

  const myPayments = payments?.filter(payment => payment?.studentEmail === user?.email) || [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            My Enrollments
          </h1>
          <p className="text-slate-500 mt-1">
            You have {myPayments.length} active courses in your library.
          </p>
        </div>
        {/* <div className="h-1 w-20 bg-indigo-600 rounded-full hidden md:block" /> */}
      </div>

      {/* Grid Section */}
      {myPayments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myPayments.map((myPayment) => (
            <EnrollmentCard key={myPayment._id} myPayment={myPayment} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
          <h3 className="text-xl font-medium text-slate-600">No courses found.</h3>
          <p className="text-slate-400">Time to start a new learning adventure!</p>
        </div>
      )}
    </div>
  );
};

export default MyEnrollMent;