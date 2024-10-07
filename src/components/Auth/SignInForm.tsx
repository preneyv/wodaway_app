import AuthForm from "./AuthForm.tsx";
import {useState} from "react";
import {globalCallApi} from "../../utils/axios";
import {T_SignIn_Response, T_User} from "../../types/auth.ts";
import locals from "../../locals";
import {useLanguageStore} from "../../utils/context/LanguageContext.tsx";
import {Link} from "react-router-dom";
import Input from "../toolbox/forms/Input";


function SignInForm(){
    const {language} = useLanguageStore()

    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)
    const handleSubmit = async (values : T_User) => {
        setLoadingSubmit(true)
        const res : T_SignIn_Response  | undefined  =  await globalCallApi<T_User, T_SignIn_Response>({method: 'auth/SIGN_IN',  data: values})
        if(res && res.token){
            localStorage.setItem('token', res.token);
            window.location.href = "/app"
        }
        setLoadingSubmit(false)
    }

    return (
        <AuthForm
            titleForm={locals[language]["auth.form.sign_in.title"]}
            loading={loadingSubmit} handleSubmit={handleSubmit}
            bottomLink={<Link className="sign-in" to="/auth/sign-up">{locals[language]["auth.form.sign.no_account"]}</Link>}
        >
            <Input
                name="email"
                label={locals[language]["auth.form.email"]}
                type="email"
                rules={
                {
                    required: {
                        value: true,
                        message: `${locals[language]["form.rule.required.field"]}`,
                    }
                }}
            />
            <Input
                name="password"
                label={locals[language]["auth.form.password"]}
                type="password"
                rules={{
                    required: {
                        value: true,
                        message: `${locals[language]["form.rule.required.field"]}`,
                    },

                }}
            />
        </AuthForm>
    )
}

export default SignInForm