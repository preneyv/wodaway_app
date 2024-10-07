import {useCallback, useEffect, useState} from "react";
import {globalCallApi} from "../../utils/axios";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {T_Validation, T_Validation_Response} from "../../types/auth.ts";
import {T_Generic_Response} from "../../types/generic.ts";
import Loader from "../Loader";
import {useLanguageStore} from "../../utils/context/LanguageContext.tsx";
import locals from "../../locals";
import Button from "../toolbox/forms/Buttons/Button.tsx";


function ValidationComp(){

    const {language} = useLanguageStore()
    const [loadingComp, setLoadingComp] = useState<boolean>(false)
    const [loadingValidate, setLoadingValidate] = useState(false)
    const [dataToken, setDataToken] = useState<T_Validation_Response | undefined>(undefined)
    const [errorToken, setErrorToken] = useState<T_Generic_Response | undefined>(undefined)

    const [searchParams,] = useSearchParams()
    const navigate = useNavigate()

    const checkValidityToken = useCallback(async () => {

        setLoadingComp(true)
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

    if(loadingComp) return <Loader />

    return (
        <div className="auth_validation">
            <img alt="wodaway_logo" className="wodaway_logo" src="/src/assets/logo.png"/>
            <div className="auth_validation_hr"></div>
            <span className="title">{locals[language]["auth.form.validation_account.title"]}</span>
            <div className="auth_validation_main">
                {
                    errorToken &&
                    <>
                        <div className="title">{locals[language][errorToken.message]}</div>
                        <Link to="/auth/sign-in">{locals[language]["auth.form.sign_in.title"]}</Link>
                    </>
                }
                {
                    dataToken &&
                    <>
                        <div className="title">{locals[language]["auth.form.validation_account.need_confirmation"]}</div>
                        <div>{dataToken?.token.user.email} </div>
                        <Button text={locals[language]["auth.form.confirm"]} name="confirm" loading={loadingValidate} onclickMethod={confirmToken}/>
                    </>
                }

            </div>
        </div>

    )
}


export default ValidationComp