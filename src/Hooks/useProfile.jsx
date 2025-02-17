// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import useAxiosSecure from './useAxiosSecure';
// import axios from 'axios';

// const useProfile = () => {
//     const  axiosSecure = useAxiosSecure();

//         const {data} = useQuery({
//             queryKey : ['data'],
//             queryFn : async () => {
//                  const res = await axiosSecure.get('/users');
//                  return res.data
//             }
//         })
//         return data
// };

// export default useProfile;