import { initializeApp } from "firebase/app";


const firebaseConfig = {
    REACT_APP_apiKey: process.env.apiKey,
    REACT_APP_authDomain: process.env.authDomain,
    REACT_APP_projectId: process.env.projectId,
    REACT_APP_storageBucket: process.env.storageBucket,
    REACT_APP_messagingSenderId: process.env.messagingSenderId,
    REACT_APP_appId: process.env.appId
};

const app = initializeApp(firebaseConfig);

export default app;