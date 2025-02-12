import React from 'react';
import useAuth from '../../Hooks/useAuth';

const SocialLogIn = () => {
    const {googleSignIn} = useAuth()
    return (
        <div>

            <button className='btn' onClick={googleSignIn}>google Log In</button>
            
        </div>
    );
};

export default SocialLogIn;