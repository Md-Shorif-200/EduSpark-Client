import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ClassProgress from './ClassProgress';
import ClassAssignment from './AddAsignment';
import useAssignments from '../../Hooks/useAssignments';
import Loading from '../../Common/Loading';
import AddAsignment from './AddAsignment';

const MyClassDetailsPage = () => {
     const classData = useLoaderData();

     const [assignments,refetch,isLoading]  = useAssignments();

      const myAssignmets = assignments.filter(assignment => assignment.assignmentId === classData._id)
    
      if(isLoading){
           return <Loading></Loading>
      }
      
 
      
    return (
        <div className='px-12 py-10'>

                  <div className="class_Prgress">
             <ClassProgress classData={classData} totalAssignments= {myAssignmets.length} ></ClassProgress>

                  </div>

                 <div className="creat_assignment">
            <AddAsignment classData={classData} refetch={refetch}></AddAsignment> 
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












