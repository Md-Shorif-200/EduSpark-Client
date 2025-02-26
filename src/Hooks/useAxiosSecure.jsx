import axios from 'axios';
import React from 'react';

const useAxiosSecure = () => {

    const axiosSecure = axios.create({
        baseURL : 'https://academix-server-side.vercel.app'
    })
    return  axiosSecure;
};

export default useAxiosSecure;