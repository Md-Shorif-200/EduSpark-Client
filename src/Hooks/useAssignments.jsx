import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAssignments = () => {
    const axiosSecure = useAxiosSecure();

    const {data : assignments = [],refetch,isLoading} = useQuery({
                queryKey : ['assignments'],
                queryFn : async () => {
                      const response = await axiosSecure.get('/assignments');
                      return response.data;
                }
    })

    return [assignments,refetch,isLoading]
};

export default useAssignments;