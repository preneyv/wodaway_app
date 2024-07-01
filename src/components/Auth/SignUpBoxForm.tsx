import AuthForm from "./AuthForm.tsx";
import Input from "../../utils/forms/Input";
import {globalCallApi} from "../../utils/axios";
import {useState} from "react";
import {T_Box} from "../../types/auth.ts";
import {T_Generic_Response} from "../../types/generic.ts";


function SignUpBoxForm(){

    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)

    const handleSubmit = async (values : T_Box ) => {
        setLoadingSubmit(true)
        console.log(values)
        await globalCallApi<T_Box, T_Generic_Response>({method: 'auth/ADD_BOX',  data: values})
        setLoadingSubmit(false)
    }

    return (
        <AuthForm typeForm="sign-up" titleForm="Créer un compte box" handleSubmit={handleSubmit} loading={loadingSubmit}>
            <div className="group_form_elts">
                <Input
                    name="name"
                    label="Nom de la Box"
                    type="text"
                    rules={
                        {
                            required: {
                                value: true,
                                message: 'Champ requis !',
                            }
                        }}
                />
                <Input
                    name="company"
                    label="Nom de l'entreprise"
                    type="text"
                    rules={
                        {
                            required: {
                                value: true,
                                message: 'Champ requis !',
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
                                message: 'Champ requis !',
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
                                message: 'Champ requis !',
                            }
                        }}
                />
            </div>
            <div className="group_form_elts">
                <Input
                    name="address"
                    label="Addresse Postale"
                    type="text"
                    rules={
                        {
                            required: {
                                value: true,
                                message: 'Champ requis !',
                            }
                        }}
                />
                <Input
                    name="code"
                    label="Code Postal"
                    type="number"
                    rules={
                        {
                            required: {
                                value: true,
                                message: 'Champ requis !',
                            }
                        }}
                />
                <Input
                    name="city"
                    label="Ville"
                    type="text"
                    rules={
                        {
                            required: {
                                value: true,
                                message: 'Champ requis !',
                            }
                        }}
                />
            </div>
            <Input
                name="created_at"
                label="Date de création"
                type="date"
                rules={
                    {
                        required: {
                            value: true,
                            message: 'Champ requis !',
                        }
                    }}
            />
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
            <Input
                name="confirm-password"
                label="Confirmer le mot de passe"
                type="password"
                rules={{
                    required: {
                        value: true,
                        message: 'Champ requis !',
                    },
                    validate: (value: string, formValues) => {
                        if (value !== formValues["password"]) return "Le mot de passe ne correspond pas !"
                    }

                }}
            />
        </AuthForm>
    )
}

export default SignUpBoxForm