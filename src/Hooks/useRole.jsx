
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';


const useRole = () => {
     const axiosSecure = useAxiosSecure();
     const {user} = useAuth();

     
     const {data,refetch,isLoading} = useQuery({
        queryKey : ['role',user?.email],
        enabled : !!user?.email,
        queryFn : async () => {
             const {data} = await axiosSecure.get(`/users/role/${user.email}`);
              
              return data
              
          }
     })

 
       
     return [data,refetch,isLoading]

};

export default useRole;