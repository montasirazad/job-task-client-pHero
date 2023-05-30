import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config'
import React, { createContext, useEffect, useState } from 'react';


const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [signedInUser, setSignedInUser] = useState({});



    const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                setSignedInUser(user)

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage);

            });
    }
    console.log('from state', signedInUser);
    const handleGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setSignedInUser({})

        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const auth = getAuth();

        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setSignedInUser(user)
            } else {
                setSignedInUser({})
            }
        });
        return () => unSubscribe;
    }, [])


    const authInfo = {
        signedInUser,
        handleGoogleSignIn,
        handleGoogleSignOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;