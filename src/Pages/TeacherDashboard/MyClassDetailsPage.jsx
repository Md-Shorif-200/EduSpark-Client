import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ClassProgress from './ClassProgress';
import ClassAssignment from './AddAsignment';
import useAssignments from '../../Hooks/useAssignments';
import Loading from '../../Common/Loading';
import AddAsignment from './AddAsignment';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useClass from '../../Hooks/useClass';

const MyClassDetailsPage = () => {

  // const myClassDetails = useLoaderData();
  const {id} = useParams()



  const [classes] = useClass();

  

  const myClassDetails = classes.find(data => data._id == id)

  console.log(myClassDetails);
  
   
  
     const [assignments,refetch,isLoading]  = useAssignments();
     
     const myAssignmets = assignments.filter(assignment => assignment.assignmentId === myClassDetails?._id);
     
     const axiosSecure = useAxiosSecure();
     const [submitedAssignments , setSubmitedAssignments] = useState([])
     
     const filterdSubmissions = submitedAssignments.filter(submission => submission.submitedId === myClassDetails?._id);
     useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axiosSecure.get('/submit-asignment');
          setSubmitedAssignments(response.data);
          refetch();
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [myClassDetails?._id]); // তোমার dependency ঠিকমতো দেওয়া উচিত
    
    
      // if(isLoading){
      //      return <Loading></Loading>
      // }
      
 
      
    return (
        <div className='px-12 py-10'>

                  <div className="class_Prgress">
             <ClassProgress myClassDetails={myClassDetails} totalAssignments= {myAssignmets} totalSubmissions={filterdSubmissions.length}></ClassProgress>

                  </div>

                 <div className="creat_assignment">
            <AddAsignment myClassDetails={myClassDetails} refetch={refetch}></AddAsignment> 
               </div>

               <div className="assignmet_list mt-8">



               <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table">
                              {/* head */}
                              <thead>
                                <tr>
                                  <th></th>
                                  <th>Assignment Title</th>
                                  <th>dedline</th>
                                  <th>description</th>
                                </tr>
                              </thead>
                              <tbody>
                           {
                        myAssignmets.map((myAssignment,index) =>   

                                <tr>
                                  <th> {index + 1} </th>
                                  <td> {myAssignment.title} </td>
                                  <td> {myAssignment.dedline} </td>
                                  <td> {myAssignment.description} </td>
                                
                                </tr>
                                        )
                    }

                          
                              </tbody>
                            </table>
                          </div>

               </div>
            
        </div>
    );
};

export default MyClassDetailsPage;












