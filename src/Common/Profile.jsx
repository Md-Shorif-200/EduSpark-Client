import React from 'react';

const Profile = ({userName, email,phone, image, role}) => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"> {userName} </h1>
      <h1 className="text-5xl font-bold"> {email} </h1>
      <h1 className="text-5xl font-bold"> {phone} </h1>
      <h1 className="text-5xl font-bold"> {role} </h1>

    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;