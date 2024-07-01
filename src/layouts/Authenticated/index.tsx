import {Navigate, Outlet} from "react-router-dom";
import Loader from "../../components/Loader";
import useAuthenticated from "../../hooks/useAuthenticated.tsx";


function AuthenticatedLayout(){

    const { isAuthenticated, loading } = useAuthenticated();

    if(loading)
        return <Loader />

    return isAuthenticated ?
        <Outlet /> :
        <Navigate to="/auth/sign-in" />
}

export default AuthenticatedLayout