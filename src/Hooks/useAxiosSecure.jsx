import axios from 'axios';
import React from 'react';

const useAxiosSecure = () => {

    const axiosSecure = axios.create({
        baseURL : 'https://edu-spark-server-lake.vercel.app/'
    })
    return  axiosSecure;
};

export default useAxiosSecure;