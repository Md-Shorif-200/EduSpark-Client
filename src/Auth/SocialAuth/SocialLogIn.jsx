import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const SocialLogIn = () => {
    const {googleSignIn} = useAuth()
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // userAxiosSecure hook to post data
    const axiosSecure = useAxiosSecure()

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {

            const userInfo = {
                name : result.user?.displayName,
                email : result.user?.email,
                image : result.user?.photoURL,
                role : 'student'
            }

            axiosSecure.post('/users',userInfo)
            .then(res => {
                  toast.success('log in successfully')
                 
                })
                .catch(err => {
                    console.log(err);
                    
                })
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