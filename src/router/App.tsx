import React, {JSX} from 'react'
import {Navigate, useRoutes} from "react-router-dom";
import AuthLayout from "../layouts/Auth/AuthLayout.tsx";
import SignIn from "../pages/Auth/SignIn.tsx";
import Page404 from "../pages/Errors/404.tsx";
import SignUp from "../pages/Auth/SignUp.tsx";
import Validation from "../pages/Auth/Validation.tsx";
import AuthenticatedLayout from "../layouts/Authenticated";
import {Bounce, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "../pages/Home";
import {LanguageStoreProvider} from "../utils/context/LanguageContext.tsx";
import SignUpAsAthlete from "../pages/Auth/SignUpAsAthlete.tsx";
import SignUpAsBox from "../pages/Auth/SignUpAsBox.tsx";


const App: React.FC = () :JSX.Element => {


    const authRoutes = {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            { path: "sign-in", element: <SignIn />},
            {
                path: "sign-up",
                children:[
                    { path: "", element: <SignUp />},
                    { path: "athlete", element: <SignUpAsAthlete />},
                    { path: "box", element: <SignUpAsBox />}
                ]
            },
            { path: "validation", element: <Validation />}

        ]
    }

    const authenticatedRoutes = {
        path: "app",
        element : <AuthenticatedLayout />,
        children : [
            { path: "", element: <Home />},
        ]
    }


    const routes = [
        {path: '/', element: <Navigate to='/app' />},
        authenticatedRoutes,
        authRoutes,
        {path: '*', element: <Navigate to='/404' />},
        {path: "404", element: <Page404 />}
    ]


    const routing = useRoutes(routes);
    return(
        <LanguageStoreProvider>
            {routing}
            <ToastContainer
                position={"top-right"}
                autoClose={false}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                theme={"light"}
                transition={Bounce}

            />
        </LanguageStoreProvider>
    )
}

export default App