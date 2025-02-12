import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true)

    // firebase  observer
    useEffect(() => {

        const unsbscribe = onAuthStateChanged(auth,currentUser => {
             setUser(currentUser);
              console.log(currentUser);
              
             setLoading(false)

           return () => {
            return unsbscribe()
           }

        })

    },[])

    // creat new user with signUp
    
    const creatUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // log out

const logOut = () => {
    return signOut(auth)
}






    const authInfo = {
            user,
            loading,
            creatUser,
            signIn,
            logOut,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;