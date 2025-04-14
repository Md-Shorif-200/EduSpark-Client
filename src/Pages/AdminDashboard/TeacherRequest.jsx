

import React, { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
 import toast  from 'react-hot-toast';
import Loading from '../../Common/Loading';
import useRole from '../../Hooks/useRole';

// react icons 
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel, MdDelete } from "react-icons/md";
import { FcDisapprove } from 'react-icons/fc';


const TeacherRequest = () => {

    const axiosSecure = useAxiosSecure();


     

    const {data : users = [], isLoading, refetch} = useQuery({
        queryKey : ['users'],
        queryFn :  async () => {
             const res = await axiosSecure.get('/users')
              return res.data
        }
    })

    
    if(isLoading){
      return <Loading></Loading>
    }
  

// filter teachers by status
    const teachers = users.filter(user => user.status === 'pending' || user.status === 'accepted' || user.status ===  'rejected')
     console.log(teachers);
     
    

    // manage  teacher request

    const handleApproveButton = (teacher) => {
      axiosSecure.patch(`/users/teacher/confirm/${teacher.email}`)
        .then(result => {
          console.log(result.data);
          if (result.data.modifiedCount > 0) {
            toast.success(`${teacher.name} is a teacher now!`);
            refetch();
          } else if (result.data.modifiedCount === 0 && result.data.matchedCount > 0) {
             console.log('hlw');
             
            toast.error("Class is already approved"); 
          }
        })
        .catch(error => {
          console.error(error);
          toast.error("Something went wrong while approving the teacher!"); 
        });
    };
    
    // reject techer request 
    const handleRejectButton = (teacher) => {
      try{
        axiosSecure.patch(`/users/teacher/reject/${teacher.email}`)
        .then(result => {
           
          console.log(result.data);
          if(result.data.modifiedCount > 0){
            toast.success(`reject succesfully`)
              refetch();

          }else{
            toast.error(`something is wrong`)
          }
          
        })

      }catch(error) {
          console.log(error);
          
      }
    }

    // // manage reject button

    const rejectionMessage = () => {
      toast.error(  ` teacher was rejected `)
    }
    return (
           <div className='mx-4 my-8 border border-gray-300 capitalize'>
         <h1 className="text-2xl font-semibold mx-16 mt-14 mb-6"> Total Requests :  {teachers.length} </h1>
       
<div className="overflow-x-auto">
<table className="table">
  {/* head */}
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th>name</th>
      <th>title</th>

      <th>experience</th>
      <th>status</th>

      <th></th>
      <th> action</th>
    

   
    </tr>
  </thead>
  <tbody>
    {teachers.map((teacher, index) => (
      <tr key={index}>
        <th> {index + 1}</th>
         <td>  
             <img src={teacher.image} className='w-[50px] h-[50px] rounded-full' alt="teacher image" />
         </td>
         <td>  {teacher.name} </td>
         <td>  {teacher?.skills?.title} </td>

         <td>  {teacher?.skills?.experience} </td>
         <td  >       <span  className={
            `
            ${teacher.status === 'pending' ? 'bg-orange-300 px-2 py-1 rounded-md ' : ''}
            ${teacher.status === 'accepted' ? 'bg-green-200 px-2 py-1 rounded-md ' : ''}
            ${teacher.status === 'rejected' ? 'bg-red-300 px-2 py-1 rounded-md ' : ''}
            `
         }>  {teacher.status}  </span>  </td>
         {/* approve button */}
         <td>  

           {
             teacher.status === 'rejected' 
             ?
              // <><button  className=' btn btn-sm opacity-40 cursor-not-allowed' > </button></> 

              <div className="tooltip">
  <div className="tooltip-content">
    <div className=" text-orange-400 text-sm font-black">  The button will be active when the teacher requests again. </div>
  </div>
  <button className="btn btn-sm opacity-60 cursor-not-allowed"><FaCheckCircle className='text-xl text-green-300'></FaCheckCircle></button>
</div>
             :
             <> <button className = 'btn btn-sm  btn-outline btn-success ' title='approve btn' onClick={() => handleApproveButton(teacher)}> <FaCheckCircle className='text-xl text-green-300'></FaCheckCircle> </button>  </>
           }

         </td>
            {/* reject button */}
<td>
{
teacher?.status === 'rejected' ?

<>
<div className="tooltip">
  <div className="tooltip-content">
    <div className=" text-orange-400 text-sm font-black">The button will be active when the teacher requests again.</div>
  </div>
  <button className="btn btn-sm opacity-60 cursor-not-allowed"><MdCancel className='text-xl text-red-400'></MdCancel></button>
</div>
</>

: 

<button className='btn btn-sm btn-outline btn-error  ' title='reject btn' onClick={() => handleRejectButton(teacher)}> <MdCancel className='text-xl'></MdCancel>  </button> 
}
</td>



        
      
        

    
     
      </tr>
    ))}
  </tbody>
</table>
</div>
    
           </div>
    );
};

export default TeacherRequest;















