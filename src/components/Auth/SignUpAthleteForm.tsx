import AuthForm from "./AuthForm.tsx";
import Input from "../../utils/forms/Input";
import {globalCallApi} from "../../utils/axios";
import {useState} from "react";
import {T_Athlete} from "../../types/auth.ts";
import {T_Generic_Response} from "../../types/generic.ts";

function SignUpAthleteForm(){

    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)

    const handleSubmit = async (values : T_Athlete) => {
        setLoadingSubmit(true)
        console.log(values)
        await globalCallApi<T_Athlete, T_Generic_Response>({method: 'auth/ADD_ATHLETE',  data: values})
        setLoadingSubmit(false)
    }


    return (
        <AuthForm typeForm="sign-up" titleForm="Créer un compte athlete" handleSubmit={handleSubmit} loading={loadingSubmit}>
            <div className="group_form_elts">
                <Input
                    name="firstname"
                    label="Prénom"
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
                    name="lastname"
                    label="Nom"
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
                    name="age"
                    label="Age"
                    type="number"
                    rules={{
                        required: {
                            value: true,
                            message: 'Champ requis !',
                        },
                        min: {
                            value: 0,
                            message: "Doit être supérieur à 0"
                        }
                    }}
                />
                <Input
                    name="weight"
                    label="Poids (en kg)"
                    type="number"
                    rules={{
                        required: {
                            value: true,
                            message: 'Champ requis !',
                        },
                        min: {
                            value: 0,
                            message: "Doit être supérieur à 0"
                        }
                    }}
                />
                <Input
                    name="height"
                    label="Taille (en cm)"
                    type="number"
                    rules={{
                        required: {
                            value: true,
                            message: 'Champ requis !',
                        },
                        min: {
                            value: 0,
                            message: "Doit être supérieur à 0"
                        }
                    }}
                />
            </div>
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
                    minLength : {
                        value : 10,
                        message : "Taille minimum de 10 caractères !"
                    }

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
                        if (value !== formValues["password"]) return "Les mots de passe ne correspondent pas !"
                    }

                }}
            />
        </AuthForm>
    )
}

export default SignUpAthleteForm