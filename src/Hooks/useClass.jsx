import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useClass = () => {
    const axiosSecure = useAxiosSecure();

    const {data : classes = [],refetch}  = useQuery({
         queryKey : ['classes'],
         queryFn : async () => {
            const res = await axiosSecure.get('/classes');
             return res.data
         }
    })

     return [classes,refetch]
};

export default useClass;