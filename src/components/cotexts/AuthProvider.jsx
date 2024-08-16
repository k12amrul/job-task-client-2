import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
// import app from '../firebase/firebase.config';
// import axios from 'axios';






export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // console.log(children , '11')


    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)
    const [error, setError] = useState('')

    // const [courseDetails,setcourseDetails]= useState()

    const googleLogin = () => {
        setloading(true)
        return signInWithPopup(auth, googleProvider)

    }
    const githubLogin = () => {
        //   setloading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }
    const createUser = (email, password) => {
        // setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const logIn = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, img) => {
        // setloading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
        })

    }

    useEffect(() => {

       
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }

            setUser(currentUser)
            setloading(false)


            // if (currentUser){
            //     axios.post('http://localhost:5000/jwt', loggedUser, {
            //         withCredentials: true
            //     })
            //         .then(res => {
            //             console.log(res.data, 'context')
            //         })
            //         .catch(err => {
            //             console.log(err)
            //         })

            // }
            // else {
            //     axios.post('http://localhost:5000/logout', loggedUser, {
            //         withCredentials: true
            //     })
            //     .then( res => {
            //         console.log( res.data )
            //     })
            // }
            console.log(currentUser, 'currentUser')



        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authinfo = {
        user,
        loading,
        setloading,
        updateUserProfile,
        googleLogin,
        logIn,
        githubLogin,
        logOut,
        createUser,
        error,
        setError
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;