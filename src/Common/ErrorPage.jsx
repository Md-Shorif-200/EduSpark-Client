import React from 'react';

const ErrorPage = () => {
    return (
        <div className=' w-full min-h-screen flex justify-center items-center '>
        <div className="card bg-base-100 w-[70%] h-[500px] mx-auto shadow-sm">
<div className="card-body flex justify-center  items-center">
<h1 className='text-xl md:text-2xl lg:text-7xl font-bold '> 404 </h1>
<h1 className='text-3xl font-bold my-8 capitalize text-red-700'> page not found </h1>
<h1 className='text-3xl font-bold '>  </h1>

</div>
</div>
</div>
    );
};

export default ErrorPage;