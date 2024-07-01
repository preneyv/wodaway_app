import AuthForm from "./AuthForm.tsx";
import Input from "../../utils/forms/Input";
import {useState} from "react";
import {globalCallApi} from "../../utils/axios";
import {T_SignIn_Response, T_User} from "../../types/auth.ts";


function SignInForm(){

    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)
    const handleSubmit = async (values : T_User) => {
        setLoadingSubmit(true)
        const res : T_SignIn_Response  | undefined  =  await globalCallApi<T_User, T_SignIn_Response>({method: 'auth/SIGN_IN',  data: values})
        console.log(res)
        if(res && res.token){
            localStorage.setItem('token', res.token);
            window.location.href = "/app"
        }
        setLoadingSubmit(false)
    }

    return (
        <AuthForm typeForm="sign-in" titleForm="Se connecter" loading={loadingSubmit} handleSubmit={handleSubmit}>
            <Input
                name="email"
                label="Email"
                type="email"
                rules={
                {
                    required: {
                        value: true,
                        message: 'Champ requis !',
                    }
                }}
            />
            <Input
                name="password"
                label="Mot de passe"
                type="password"
                rules={{
                    required: {
                        value: true,
                        message: 'Champ requis !',
                    },

                }}
            />
        </AuthForm>
    )
}

export default SignInForm