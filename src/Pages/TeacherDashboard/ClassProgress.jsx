import React from "react";
import Loading from "../../Common/Loading";
import usePayments from "../../Hooks/usePayments";
import { FaUsers, FaTasks, FaCheckCircle } from "react-icons/fa";

const ClassProgress = ({ myClassDetails, totalAssignments, totalSubmissions }) => {
  const [payments, refetch, isLoading] = usePayments();

  if (isLoading) return <Loading />;

  const totalEnrollments = payments.filter(
    (payment) => payment.paymentId === myClassDetails?._id
  );

  const cardClasses =
    "bg-white shadow-md rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition duration-300 flex flex-col items-center text-center";

  const headingClasses = "text-lg text-gray-600 mb-2";
  const numberClasses = "text-3xl font-bold";

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className={cardClasses}>
          <FaUsers className="text-4xl text-indigo-500 mb-3" />
          <h2 className={headingClasses}>Total Enrollment</h2>
          <p className={`${numberClasses} text-indigo-600`}>
            {totalEnrollments.length}
          </p>
        </div>

        {/* Card 2 */}
        <div className={cardClasses}>
          <FaTasks className="text-4xl text-yellow-500 mb-3" />
          <h2 className={headingClasses}>Total Assignments</h2>
          <p className={`${numberClasses} text-yellow-600`}>
            {totalAssignments.length}
          </p>
        </div>

        {/* Card 3 */}
        <div className={cardClasses}>
          <FaCheckCircle className="text-4xl text-green-500 mb-3" />
          <h2 className={headingClasses}>Submissions</h2>
          <p className={`${numberClasses} text-green-600`}>{totalSubmissions}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassProgress;
