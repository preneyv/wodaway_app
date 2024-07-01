import {useCallback, useEffect, useState} from "react";
import {globalCallApi} from "../../utils/axios";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import Button from "../../utils/forms/Buttons/Button.tsx";
import {T_Validation, T_Validation_Response} from "../../types/auth.ts";
import {T_Generic_Response} from "../../types/generic.ts";
import Loader from "../Loader";


function ValidationComp(){

    const [loadingComp, setLoadingComp] = useState<boolean>(true)
    const [loadingValidate, setLoadingValidate] = useState(false)
    const [dataToken, setDataToken] = useState<T_Validation_Response | undefined>(undefined)
    const [errorToken, setErrorToken] = useState<T_Generic_Response | undefined>(undefined)

    const [searchParams,] = useSearchParams()
    const navigate = useNavigate()

    const checkValidityToken = useCallback(async () => {
        const uuid = searchParams.get("uuid")
        if(!uuid) {
            navigate("/404")
            return
        }
        const token : T_Validation_Response | T_Generic_Response | undefined = await globalCallApi<T_Validation, T_Validation_Response | T_Generic_Response>({method: 'auth/SIGN_UP_VALIDATION',  data: {uuid}})
        if (token && 'token' in token) {
            // Travailler avec T_Validation_Response
            setDataToken(token)
            setErrorToken(undefined)
        } else if (token && 'message' in token) {
            // Travailler avec T_Generic_Response
            setErrorToken(token)
            setDataToken(undefined)
        }
        setLoadingComp(false)

    },[navigate, searchParams])


    useEffect(() => {
        checkValidityToken()
    },[checkValidityToken])

    const confirmToken = async () => {
        setLoadingValidate(true)
        const uuid = searchParams.get("uuid")
        if(!uuid) {
            navigate("/404")
            return
        }
        await globalCallApi<T_Validation, T_Validation_Response | T_Generic_Response>({method: 'auth/SIGN_UP_CONFIRM_VALIDATION',  data: {uuid}})
        await checkValidityToken()
        setLoadingValidate(false)
    }


    return (
        <Loader loading={loadingComp}>
            <div className="auth_validation">
                <img alt="wodaway_logo" className="wodaway_logo" src="/src/assets/logo.png"/>
                <div className="auth_validation_hr"></div>
                <span className="title">Valider mon compte</span>
                <div className="auth_validation_main">
                    {
                        errorToken &&
                        <>
                            <div className="title">{errorToken.message}</div>
                            <div>{errorToken.description}</div>
                            <Link to="/auth/sign-in">Se connecter</Link>
                        </>
                    }
                    {
                        dataToken &&
                        <>
                            <div className="title">Veuillez confirmer votre inscription avec cette adresse :</div>
                            <div>{dataToken?.token.user.email} </div>
                            <Button text="Confirmer" name="confirm" loading={loadingValidate}
                                    onclickMethod={confirmToken}/>
                        </>
                    }

                </div>
            </div>
        </Loader>

    )
}


export default ValidationComp