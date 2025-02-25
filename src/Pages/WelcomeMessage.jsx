import React from 'react';

const WelcomeMessage = () => {
    return (
           <div className=' w-full min-h-screen flex justify-center items-center '>
                    <div className="card bg-base-100 w-[70%] h-[200px] mx-auto shadow-sm">
  <div className="card-body flex justify-center  items-center">
    <h1 className='text-3xl font-bold '> welcome to academix dashboard</h1>
    <p className='text-3xl'>😍</p>
  </div>
</div>
           </div>
    );
};

export default WelcomeMessage;