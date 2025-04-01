import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUser, FaUsers } from "react-icons/fa";


import toast from 'react-hot-toast';

import { useState } from "react";
import useRole from "../../Hooks/useRole";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import Loading from "../../Common/Loading";
import { MdDelete } from "react-icons/md";

const Users = () => {
   
  const axiosSecure = useAxiosSecure();
  const [role, isLoading] = useRole();


  
  // get user data from database userCollection 
  const { data: users = [] , refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  

//   

const handleAdminButton = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(result => {
            console.log(result.data);
             if(result.data.modifiedCount > 0){

                toast.success(`${user.name} is an admin now!`);

                refetch()
             }
        })
        .catch(err => console.log(err))
}

const handleUserDelete = (user) => {

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

      axiosSecure.delete(`/users/${user?._id}`)
      .then(result => {
             
           const deleteSuccess = result.data.deletedCount > 0;

           if(deleteSuccess){
             Swal.fire({
               title: "Deleted!",
               text: "Your file has been deleted.",
               icon: "success"
             });
           refetch()

           }
              
      })
      .catch(err => console.log(err))


    }
  });
}

  return (
    <div className="mx-4 my-8 border border-amber-200 capitalize">
    

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>image</th>
              <th>name</th>
              <th>email</th>
                <th>role</th>
              <th>action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th> {index + 1}</th>
                <td> 
                    <img className="w-[50px] h-[50px] rounded-full" src={user.image} alt="" />
                </td>
                <td>{user.name}</td>
                <td className="lowercase">{user.email}</td>

                 <td > 
                   {
                    user?.role === 'user' ? <>  <FaUsers></FaUsers> </>  
                             
                    : 
                        <> 
                         <span  className={
                     `
                     ${user.role === 'admin' ? 'bg-green-300 px-2 py-1 rounded-md' : ''}
                     ${user.role === 'teacher' ? 'bg-red-200 px-2 py-1 rounded-md' : ''}
                     ${user.role === 'student' ? 'bg-orange-200 px-2 py-1 rounded-md' : ''}

                     `
                 } >
                  {user.role}
                  </span> 
                        </>
                   }
                 
                 </td>
            
                <td>
                   {
                    user?.role == 'admin' ? <>
                        <button className="btn btn-sm opacity-50 cursor-not-allowed" disabled>make admin</button>
                    </>
                    : 
                    <>
                      {" "}
                  <button className='btn btn-sm capitalize btn-neutral btn-outline' onClick={() =>handleAdminButton(user)}>
                    make admin
                  </button>{" "}
                    </>

                   }
                </td>
                <td>
                  {" "}
                  <button className="btn btn-sm" onClick={() =>  handleUserDelete(user)}>
                    <MdDelete className="text-xl text-red-500"></MdDelete>
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
