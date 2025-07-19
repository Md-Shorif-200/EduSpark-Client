import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useClass = (filter='') => {
    const axiosSecure = useAxiosSecure();

    const {data : classes = [],refetch,isLoading}  = useQuery({
         queryKey : ['classes',filter],
         queryFn : async () => {
            const res = await axiosSecure.get( `/classes?filter=${filter}`);

             return res.data
         }
    })

     

     return [classes,refetch,isLoading]
};

export default useClass;