import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAssignments from "../../Hooks/useAssignments";
// import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import FeedbackModal from "./FeedbackModal";

const EnrollmentDetails = () => {
    //   // react hook form
    //   const {
    //     register,
    //     handleSubmit, reset,
    //     formState: { errors },
    //   } = useForm()

  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  // get all assignments data from database
  const [assignments, refetch, isLoading] = useAssignments();

  // get  enrollments data for a specific id
  const { data } = useQuery({
    queryKey: ["data", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payments/${id}`);
      return data;
    },
  });



  const { paymentId } = data || {};
  // All assignment in this class has been filtered.
  const myClassAssignmets = assignments.filter(
    (assignment) => assignment.assignmentId === paymentId
  );

  
  //   handle assignment submission box
  
  const handleSubmitButton = (e) => {
         e.preventDefault();
        //  e.stopPropagation()
        const submissionLink = e.target.submissionLink.value;
         
       const submissionInfo = {
           name : user?.displayName,
           email : user?.email,
           submissionTime  : new Date(),
           submissionLink : submissionLink,
           submitedId : paymentId
       }

    
       

       try{
          axiosSecure.post('/submit-asignment', submissionInfo)
          .then(response => {
               if(response.data.insertedId){
                // clear the textarea value
                e.target.submissionLink.value = ''
                  toast.success('asignment succesfully submited');
                  
               }
          })
       }catch(error){
        console.log(error);
        
       }
      
}



  return (
    <div>

      <div className="lg:p-8">
          <div className="feedBackSection">
            <FeedbackModal classData ={data}></FeedbackModal>
          </div>
      <div className="assignment_list_title text-xl capitalize font-semibold  my-6 ">
        <h1>Your All Assignment for this class </h1>
      </div>
        <div className=" rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>title</th>
                <th>deadline</th>
                <th>description</th>
                <th>submission box</th>
        
              </tr>
            </thead>
            <tbody>
              {myClassAssignmets.map((myAssignment, index) => (
                <tr key={index}>
                  <th> {index + 1} </th>
                  <td> {myAssignment.title} </td>
                  <td> {myAssignment.dedline}</td>
                  <td> {myAssignment.description}</td>
                  <td>
                         <form  onSubmit={handleSubmitButton} className="flex items-center gap-x-4">

                         <fieldset className="fieldset">
                      <textarea 
                        className="textarea w-[150px] h-[0px]"
                        placeholder="Enter github link and project live link" name="submissionLink"
                      ></textarea>

                    </fieldset>

                    <div>
                    <button type="submit" className="btn">submit</button>
                    </div>
                         </form>
                  </td>

                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentDetails;
