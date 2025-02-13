import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
    const {googleSignIn} = useAuth()
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            navigate(from , {replace : true})
        })
    }

    return (
        <div>

            <button className=' w-full border p-2 rounded-md hover:bg-[#292865] duration-150 hover:text-white ease-in' onClick={handleGoogleSignIn}>google Log In</button>
            
        </div>
    );
};

export default SocialLogIn;