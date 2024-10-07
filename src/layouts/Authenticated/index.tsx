import {Navigate, Outlet} from "react-router-dom";
import Loader from "../../components/Loader";
import useAuthenticated from "../../utils/hooks/useAuthenticated.tsx";
import Menu from "../../components/Menu";
import "./style.scss"


function AuthenticatedLayout(){

    const { isAuthenticated, loading } = useAuthenticated();

    if(loading)
        return <Loader />

    return isAuthenticated ?

        <div className="protected_pages_display">
            <Menu />
            <div className="content"><Outlet /></div>
        </div> :
        <Navigate to="/auth/sign-in" />
}

export default AuthenticatedLayout