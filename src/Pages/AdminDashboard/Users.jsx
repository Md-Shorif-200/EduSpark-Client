import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useState } from "react";

const Users = () => {
   
  const axiosSecure = useAxiosSecure();

  // get data from database using tanstak query
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

  return (
    <div>
      <div className="my-4"> total users :{users.length} </div>

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
                <td>{user.email}</td>

                 <td>  { user.role ? <>  <p>{user.role}</p> </> : <><FaUsers></FaUsers></>} </td>
            
                <td>
                   {
                    user?.role == 'admin' ? <>
                        <button className="btn bg-gray-500 text-gray-400">make admin</button>
                    </>
                    : 
                    <>
                      {" "}
                  <button className='btn' onClick={() =>handleAdminButton(user)}>
                    make admin
                  </button>{" "}
                    </>

                   }
                </td>
                <td>
                  {" "}
                  <button className="btn">
                    <FaDeleteLeft></FaDeleteLeft>
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
