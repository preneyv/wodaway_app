import AuthForm from "./AuthForm.tsx";
import {globalCallApi} from "../../utils/axios";
import {useState} from "react";
import {T_Athlete} from "../../types/auth.ts";
import {T_Generic_Response} from "../../types/generic.ts";
import {useLanguageStore} from "../../utils/context/LanguageContext.tsx";
import locals from "../../locals";
import {Link} from "react-router-dom";
import Input from "../toolbox/forms/Input";

function SignUpAthleteForm(){

    const {language} = useLanguageStore()
    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)

    const handleSubmit = async (values : T_Athlete) => {
        setLoadingSubmit(true)
        await globalCallApi<T_Athlete, T_Generic_Response>({method: 'auth/ADD_ATHLETE',  data: values})
        setLoadingSubmit(false)
    }


    return (
        <AuthForm
            titleForm={locals[language]["auth.form.sign_up.athlete.title"]}
            handleSubmit={handleSubmit} loading={loadingSubmit}
            bottomLink={
                <>
                    <Link className="sign-in" to="/auth/sign-in">{locals[language]["auth.form.sign.already_account"]}</Link>
                    {` ${locals[language]["or"]} `}
                    <Link className="sign-up" to="/auth/sign-up/box">{locals[language]["auth.form.sign_up.choose_box"]}</Link>
                </>
            }
        >
            <div className="group_form_elts">
                <Input
                    name="firstname"
                    label={locals[language]["auth.form.sign_up.athlete.firstname"]}
                    type="text"
                    rules={
                        {
                            required: {
                                value: true,
                                message: `${locals[language]["form.rule.required.field"]}`,
                            }
                        }}
                />
                <Input
                    name="lastname"
                    label={locals[language]["auth.form.sign_up.athlete.lastname"]}
                    type="text"
                    rules={
                        {
                            required: {
                                value: true,
                                message: `${locals[language]["form.rule.required.field"]}`,
                            }
                        }}
                />
            </div>
            <div className="group_form_elts">
                <Input
                    name="age"
                    label={locals[language]["auth.form.sign_up.athlete.age"]}
                    type="number"
                    rules={{
                        required: {
                            value: true,
                            message: `${locals[language]["form.rule.required.field"]}`,
                        },
                        min: {
                            value: 0,
                            message: `${locals[language]["form.rule.min_zero"]}`
                        }
                    }}
                />
                <Input
                    name="weight"
                    label={locals[language]["auth.form.sign_up.athlete.weight"]}
                    type="number"
                    rules={{
                        required: {
                            value: true,
                            message: `${locals[language]["form.rule.required.field"]}`,
                        },
                        min: {
                            value: 0,
                            message: `${locals[language]["form.rule.min_zero"]}`
                        }
                    }}
                />
                <Input
                    name="height"
                    label={locals[language]["auth.form.sign_up.athlete.height"]}
                    type="number"
                    rules={{
                        required: {
                            value: true,
                            message: `${locals[language]["form.rule.required.field"]}`,
                        },
                        min: {
                            value: 0,
                            message: `${locals[language]["form.rule.min_zero"]}`
                        }
                    }}
                />
            </div>
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
                    minLength : {
                        value : 10,
                        message: `${locals[language]["form.rule.min_ten_char"]}`
                    }

                }}
            />
            <Input
                name="confirm-password"
                label={locals[language]["auth.form.sign_up.confirm_password"]}
                type="password"
                rules={{
                    required: {
                        value: true,
                        message: `${locals[language]["form.rule.required.field"]}`,
                    },
                    validate: (value: string, formValues) => {
                        if (value !== formValues["password"]) return locals[language]["form.rule.no_matching_password"]
                    }

                }}
            />
        </AuthForm>
    )
}

export default SignUpAthleteForm