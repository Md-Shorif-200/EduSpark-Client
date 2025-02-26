import React, { useEffect, useState } from "react";
import Loading from "../../Common/Loading";
import usePayments from "../../Hooks/usePayments";

const ClassProgress = ({classData,totalAssignments}) => {

          // const [totalEnrollments , setTotalEnrollments] = useState(0)
          // const [totalAssignment , setTotalAssignment] = useState(0)
          // const [totalAssignmentSubmission , setTotalAssignmentSubmission] = useState(0)

          
          // fetch total class from the database
            const [payments,refetch,isLoading] = usePayments();
            
            if(isLoading){
               return <Loading></Loading>
            }

            const totalEnrollments = payments.filter( (payment) => payment.paymentId === classData._id);
             
        

  return (
    <div className="p-8">
      <div className="class_progress_cards grid grid-cols-1 gap-y-6 sm:grid-cols-3 md:gap-8 ">
    

        <div className="card w-full bg-base-100 card-sm shadow-sm p-8  capitalize ">
          <div className="card-body">
            <h2 className=" text-xl font-semibold text-center">total enrollment</h2>
             <p className="text-2xl font-semibold text-center">    {totalEnrollments.length} </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 card-sm shadow-sm p-8 capitalize">
          <div className="card-body">
            <h2 className=" text-xl font-semibold text-center">total assignment</h2>
            <p className="text-x2l font-semibold text-center"> </p>
          </div>
        </div>


        <div className="card w-full bg-base-100 card-sm shadow-sm p-8 capitalize">
          <div className="card-body">
            <h2 className=" text-xl font-semibold text-center"></h2>
            <p className="text-x2l font-semibold text-center"></p>
          </div>
        </div>

   

      </div>
    </div>
  );
};

export default ClassProgress;
