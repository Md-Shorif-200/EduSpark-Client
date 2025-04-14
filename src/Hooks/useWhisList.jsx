import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useWhisList = () => {

    const axiosPublic = useAxiosPublic();

    const {data : whislists = [],refetch,isLoading} = useQuery({
      queryKey : 'whislists',
      queryFn :  async () => {
           const res =  await axiosPublic.get('/api/whislists')

                 return res.data
                  
      }
    })


    return [whislists,refetch,isLoading] 
};

export default useWhisList;