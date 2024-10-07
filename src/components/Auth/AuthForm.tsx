import "./style.scss"
import {FieldValues, FormProvider, SubmitHandler, useForm} from "react-hook-form";
import React from "react";
import {useLanguageStore} from "../../utils/context/LanguageContext.tsx";
import locals from "../../locals";
import Submit from "../toolbox/forms/Buttons/Submit.tsx";

type AuthFormProps<T extends FieldValues> = {
    titleForm : string,
    children : React.ReactNode[],
    handleSubmit: SubmitHandler<T>,
    loading : boolean,
    bottomLink: React.ReactNode
}


function AuthForm<T extends FieldValues>({titleForm, children, handleSubmit, loading, bottomLink} : AuthFormProps<T>){

    const methods = useForm<T>()
    const {language} = useLanguageStore()

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
                        <Submit text={locals[language]["auth.form.submit"]} name="submit" loading={loading} />
                    </form>
                </FormProvider>

            </div>
            <div className="auth_form_bottom">
                {
                    bottomLink
                }
            </div>
        </div>
    )
}

export default AuthForm