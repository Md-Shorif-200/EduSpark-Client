import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePayments = () => {

          const axiosSecure = useAxiosSecure();

          const {data : payments = [],refetch,isLoading } = useQuery({
            queryKey : ['payments'],
            queryFn : async () => {
                    const res = await axiosSecure.get('/payments');
                    return res.data;
            }
          })

          return [payments,refetch,isLoading]

  
};

export default usePayments;