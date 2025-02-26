import React, { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import Loading from '../../Common/Loading';
import useRole from '../../Hooks/useRole';


const TeacherRequest = () => {

    const axiosSecure = useAxiosSecure();
    const [disabled , setDisabled] = useState(false)

     

    const {data : users = [], isLoading, refetch} = useQuery({
        queryKey : ['users'],
        queryFn :  async () => {
             const res = await axiosSecure.get('/users')
              return res.data
        }
    })

  

// filter teachers by status
    const teachers = users.filter(user => user.status === 'pending' || user.status === 'accepted' || user.status ===  'rejected')
     console.log(teachers);
     
    

    // manage  teacher request

    const handleApproveButton = (teacher) => {
              
  
        

                try{
                  axiosSecure.patch(`/users/teacher/confirm/${teacher.email}`)
                  .then(result => {
                     
                    console.log(result.data);
                    if(result.data.modifiedCount > 0){
                      toast.success(`${teacher.name} is a teacher now!`)
                        refetch()
                    }else{
                      toast.warning(`${teacher.name} is already a teacher`)
                    }
                    
                  })

                }catch(error) {
                    console.log(error);
                    
                }

    }

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
            toast.warning(`something is wrong`)
          }
          
        })

      }catch(error) {
          console.log(error);
          
      }
    }

    // // manage reject button

    // const rejectionMessage = () => {
    //   toast.error(  ` teacher was rejected `)
    // }
    return (
           <div>
         
       
             <div className="overflow-x-auto">
               <table className="table">
                 {/* head */}
                 <thead>
                   <tr>
                     <th></th>
                     <th>image</th>
                     <th>name</th>
                     <th>title</th>
                     <th>catagory</th>
                     <th>experience</th>
                     <th>status</th>
            
                     <th>action</th>
                     <th></th>
            
                  
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
                        <td>  {teacher.skills.title} </td>
                        <td>  {teacher.skills.catagory} </td>
                        <td>  {teacher.skills.experience} </td>
                        <td className='text-blue-950'>  {teacher.status} </td>
                        {/* approve button */}
                        <td>  

                          {
                            teacher.status === 'rejected' 
                            ?
                             <><button  className='btn bg-gray-400' disabled>approve</button></> 
                            :
                            <> <button className = 'btn' onClick={() => handleApproveButton(teacher)}> approve </button>  </>
                          }

                        </td>

   <td>
       {
         teacher?.status === 'rejected' ?
         
         <>
           <button className='btn' disabled>reject</button>
         </>

          : 

   <button className='btn' onClick={() => handleRejectButton(teacher)}> reject </button> 
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