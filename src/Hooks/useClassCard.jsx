import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useClassCard = () => {
                const axiosPublic = useAxiosPublic()
                
            const {data : classes = [],refetch} = useQuery({
                queryKey : ['classes'],
                queryFn : async () => {
                      const res = await axiosPublic.get('/classes');
                      return res.data;
                }
            })
            return [classes,refetch]
};

export default useClassCard;