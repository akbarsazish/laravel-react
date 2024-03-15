import { createBrowserRouter } from "react-router-dom";
import Login from "./view/Login";
import Signup from "./view/Signup";
import Users from "./view/Users";
import NotFound from "./view/NotFound";
import Dashboard from "./view/Dashboard";
import DefaultLayout from "./components/DefaultLayout";
import GeustLayout from "./components/GeustLayout";

const router =  createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children:[
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
        ],
    },

    {
        path: '/',
        element : <GeustLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },

    {
        path: '*',
        element: <NotFound />
    },
]);

export default router;
