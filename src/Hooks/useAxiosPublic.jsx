import axios from 'axios';
import React from 'react';

const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL : 'https://edu-spark-server-lake.vercel.app/'
    })
    return  axiosPublic;
};

export default useAxiosPublic;