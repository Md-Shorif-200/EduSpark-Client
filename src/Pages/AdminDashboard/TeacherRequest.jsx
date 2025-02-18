import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const TeacherRequest = () => {

    const axiosSecure = useAxiosSecure();

    const {data : users = [], refetch} = useQuery({
        queryKey : ['users'],
        queryFn :  async () => {
             const res = await axiosSecure.get('/users')
              return res.data
        }
    })



    const teachers = users.filter(user => user.status === 'pending')
     console.log(teachers);
     
    

    // manage  teacher request

    const handleApproveButton = (teacher) => {
                axiosSecure.patch(`/teacher/${teacher._id}`)
                .then(result => {
                      const  data = result.data;
                        console.log(data);
                        if(data.modifiedCount > 1) {
                                   Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: `${teacher.name} is a teacher now!`,
                                        showConfirmButton: false,
                                        timer: 1500
                                      });
                                      
                                    //   refetch api 
                                    refetch()
                        }
                     
                })

                axiosSecure.patch(`/users/:${teacher._email}`)
                .then(result => {
                  console.log(result.data);
                  
                })
    }

    return (
           <div>
             <div className="my-4"> total request {teachers.length} :</div>
       
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
                        <td>  {teacher.status} </td>
                        <td>  
                            <button className='btn' onClick={() => handleApproveButton(teacher)}> approve </button> 
                        </td>
                        <td>  
                            <button className='btn'> reject </button> 
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