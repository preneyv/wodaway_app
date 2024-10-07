import AuthForm from "./AuthForm.tsx";
import {globalCallApi} from "../../utils/axios";
import {useState} from "react";
import {T_Box} from "../../types/auth.ts";
import {T_Generic_Response} from "../../types/generic.ts";
import locals from "../../locals";
import {useLanguageStore} from "../../utils/context/LanguageContext.tsx";
import {Link} from "react-router-dom";
import Input from "../toolbox/forms/Input";


function SignUpBoxForm(){

    const {language} = useLanguageStore()
    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)

    const handleSubmit = async (values : T_Box ) => {
        setLoadingSubmit(true)
        await globalCallApi<T_Box, T_Generic_Response>({method: 'auth/ADD_BOX',  data: values})
        setLoadingSubmit(false)
    }

    return (
        <AuthForm
            titleForm={locals[language]["auth.form.sign_up.box.title"]}
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
                    name="name"
                    label={locals[language]["auth.form.sign_up.box.name"]}
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
                    name="company"
                    label={locals[language]["auth.form.sign_up.box.company"]}
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
                    name="SIREN"
                    label="SIREN"
                    type="number"
                    rules={
                        {
                            required: {
                                value: true,
                                message: `${locals[language]["form.rule.required.field"]}`,
                            },
                            pattern: {
                                value: /^\d{9}$/,
                                message: `${locals[language]["form.rule.SIREN"]}`
                            },
                            validate: async (value) => {
                                const exists = await globalCallApi<{SIREN:string}, {state: boolean}>({method: 'apis/CHECK_SIREN',  data: {SIREN : value}})
                                return exists?.state || locals[language]["form.rule.SIREN_not_exist"]
                            }
                        }}
                />
                <Input
                    name="SIRET"
                    label="SIRET"
                    type="text"
                    rules={
                        {
                            required: {
                                value: true,
                                message: `${locals[language]["form.rule.required.field"]}`,
                            },
                            pattern: {
                                value: /^\d{14}$/,
                                message: `${locals[language]["form.rule.SIRET"]}`
                            },
                            validate: async (value) => {
                                const exists = await globalCallApi<{SIRET:string}, {state: boolean}>({method: 'apis/CHECK_SIRET',  data: {SIRET : value}})
                                return exists?.state || locals[language]["form.rule.SIRET_not_exist"]
                            }
                        }}
                />
            </div>
            <div className="group_form_elts">
                <Input
                    name="address"
                    label={locals[language]["auth.form.sign_up.box.address"]}
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
                    name="code"
                    label={locals[language]["auth.form.sign_up.box.postal_code"]}
                    type="number"
                    rules={
                        {
                            required: {
                                value: true,
                                message: `${locals[language]["form.rule.required.field"]}`,
                            }
                        }}
                />
                <Input
                    name="city"
                    label={locals[language]["auth.form.sign_up.box.city"]}
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
            <Input
                name="created_at"
                label={locals[language]["auth.form.sign_up.box.created_at"]}
                type="date"
                rules={
                    {
                        required: {
                            value: true,
                            message: `${locals[language]["form.rule.required.field"]}`,
                        },
                        validate: (value: string) => {
                            if (new Date(value) > new Date()) return locals[language]["form.rule.created_date.sup_now"]
                        }
                    }}
            />
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

export default SignUpBoxForm