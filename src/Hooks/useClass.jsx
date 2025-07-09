import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useClass = (search='',filter='') => {
    const axiosSecure = useAxiosSecure();

    const {data : classes = [],refetch,isLoading}  = useQuery({
         queryKey : ['classes',search,filter],
         queryFn : async () => {
            const res = await axiosSecure.get( `/classes?search=${search}&filter=${filter}`);

             return res.data
         }
    })

     

     return [classes,refetch,isLoading]
};

export default useClass;