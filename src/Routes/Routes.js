import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Gallery from "../pages/Gallery/Gallery";
import UploadPic from "../pages/UploadPic/UploadPic";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/login',
        element: <LogIn />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
    ,
    {
        path: '/gallery',
        element: <Gallery />
    }, {
        path: '/share-a-image',
        element: <PrivateRoute><UploadPic /></PrivateRoute>,


    }
]);


export default router;