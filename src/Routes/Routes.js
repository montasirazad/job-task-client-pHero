import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <>about</>
    }
]);


export default router;