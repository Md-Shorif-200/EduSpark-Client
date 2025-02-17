import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const ClassDetails = () => {
     const id = useParams();
      console.log(id);
      
      const axiosSecure = useAxiosSecure();

     const {data} = useQuery({
        queryKey : ['data'],
        queryFn()
     })





    return (
        <div>
            class details
        </div>
    );
};

export default ClassDetails;