import "./style.scss"
import {FieldValues, FormProvider, SubmitHandler, useForm} from "react-hook-form";
import Submit from "../../utils/forms/Buttons/Submit.tsx";
import {Link} from "react-router-dom";
import React from "react";

type AuthFormProps<T extends FieldValues> = {
    typeForm : string,
    titleForm : string,
    children : React.ReactNode[],
    handleSubmit: SubmitHandler<T>,
    loading : boolean
}


function AuthForm<T extends FieldValues>({titleForm, typeForm, children, handleSubmit, loading} : AuthFormProps<T>){

    const methods = useForm<T>()

    return (
        <div className="auth_form">
            <img alt="wodaway_logo" className="wodaway_logo" src="/src/assets/logo.png" />
            <div className="auth_form_hr"></div>
            <span className="title">{titleForm}</span>
            <div className="auth_form_main">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleSubmit)}>
                        {
                            ...children
                        }
                        <Submit text="Valider" name="submit" loading={loading} />
                    </form>
                </FormProvider>

            </div>
            <div className="auth_form_bottom">
                {
                    typeForm === "sign-in" ?
                        <Link to="/auth/sign-up">Vous n'avez pas de compte ? Créez en un !</Link> :
                        <Link to="/auth/sign-in">Vous avez déjà un compte ? Se connecter</Link>
                }
            </div>
        </div>
    )
}

export default AuthForm