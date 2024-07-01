import SignInForm from "../../components/Auth/SignInForm.tsx";
import useAuthenticated from "../../hooks/useAuthenticated.tsx";
import {Navigate} from "react-router-dom";



export default function SignIn(){

    const {isAuthenticated} = useAuthenticated()

    return isAuthenticated ? <Navigate to="/app" /> :  <SignInForm />

}