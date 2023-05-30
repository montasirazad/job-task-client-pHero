import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";



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
]);


export default router;