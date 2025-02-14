import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const TeacherRequest = () => {

    const axiosSecure = useAxiosSecure();

    const {data : teachers = []} = useQuery({
        queryKey : ['users'],
        queryFn :  async () => {
             const res = await axiosSecure.get('/teachers')
              return res.data
        }
    })

    // approve button functionality

    const handleApproveButton = (teacher) => {
                axiosSecure.patch(`/teachers/${teacher._id}`)
                .then(result => {
                      const  data = result.data;
                        console.log(data);
                        
                     
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
                        <td>  {teacher.title} </td>
                        <td>  {teacher.catagory} </td>
                        <td>  {teacher.experience} </td>
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