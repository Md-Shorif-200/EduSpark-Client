import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaUsers } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

const Users = () => {

            const axiosSecure = useAxiosSecure() 

            // get data from database using tanstak query
        const {data: users =[]} = useQuery({
            queryKey : ['users'],
            queryFn : async () => {
                    const  res = await axiosSecure.get('/users');
                    return res.data
            }
        })


    return (
        <div>

            <div className="my-4"> total users :{ users.length} </div>
      
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr >
        <th></th>
        <th>image</th>
        <th>name</th>
        <th>email</th>
        <th>make admin</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>

            {
                users.map((user ,index) => 

                    <tr key={index}>
                    <th> {index +1}</th>
                    <td>{user.images}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td> <FaUsers></FaUsers> </td>
                    <td><FaDeleteLeft></FaDeleteLeft></td>
                  </tr>
                )
            }
     
    
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Users;