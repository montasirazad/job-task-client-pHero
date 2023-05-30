import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../Firebase/Firebase.config'
import React, { createContext } from 'react';


const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

   
 


    const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    const authInfo = {
        handleGoogleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;