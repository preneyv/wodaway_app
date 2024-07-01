import React, {JSX} from 'react'
import {Navigate, useRoutes} from "react-router-dom";
import AuthLayout from "../layouts/Auth/AuthLayout.tsx";
import SignIn from "../pages/Auth/SignIn.tsx";
import Page404 from "../pages/Errors/404.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import SignUp from "../pages/Auth/SignUp.tsx";
import Validation from "../pages/Auth/Validation.tsx";
import AuthenticatedLayout from "../layouts/Authenticated";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "../pages/Home";


const App: React.FC = () :JSX.Element => {

    const authRoutes = {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            { path: "sign-in", element: <SignIn />},
            { path: "sign-up", element: <SignUp />},
            { path: "validation", element: <Validation />}

        ]
    }

    const authenticatedRoutes = {
        path: "/app",
        element : <AuthenticatedLayout />,
        children : [
            { path: "", element: <Home />},
        ]
    }


    const essentialRoutes = {
        element: <MainLayout />,
        children: [
            authenticatedRoutes,
            authRoutes,
            {path: '*', element: <Navigate to='/404' />},
            {path: "/404", element: <Page404 />}
        ]
    }


    const routing = useRoutes([essentialRoutes]);
    return(
        <>
            {routing}
            <ToastContainer />
        </>
    )
}

export default App