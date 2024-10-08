import axios, {AxiosInstance} from "axios";
import {
    DispatcherFunction,
    IGlobalCallApi,
    T_DispatcherAxios
} from "../../interfaces/IGlobalCallApiPayload.ts";
import {
    addNewAthlete,
    addNewBox,
    checkSignUpValidation,
    confirmSignUpValidation,
    isAuthenticated,
    signIn
} from "./auth";
import {T_Athlete, T_Box, T_User, T_Validation} from "../../types/auth.ts";
import {T_Generic_Response} from "../../types/generic.ts";
import {toast} from "react-toastify";
import locals from "../../locals";
import {getLocalState} from "../context/LanguageContext.tsx";
import {checkSIREN, checkSIRET} from "./apis";

const getToken = () => {
    return localStorage.getItem('token');
};

const apiClient: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BACK_URL}/${import.meta.env.VITE_VERSION_API}`,
    timeout: 10000,
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const dispatcher:T_DispatcherAxios = {
    'auth/ADD_ATHLETE': (opts: IGlobalCallApi<T_Athlete>) => addNewAthlete(opts),
    'auth/ADD_BOX': (opts: IGlobalCallApi<T_Box>) => addNewBox(opts),
    'auth/SIGN_UP_VALIDATION' : (opts: IGlobalCallApi<T_Validation>) => checkSignUpValidation(opts),
    'auth/SIGN_UP_CONFIRM_VALIDATION': (opts : IGlobalCallApi<T_Validation>) => confirmSignUpValidation(opts),
    'auth/SIGN_IN' : (opts : IGlobalCallApi<T_User>) => signIn(opts),
    'auth/CHECK_AUTHENTICATION' : () => isAuthenticated(),
    'apis/CHECK_SIREN': (opts: IGlobalCallApi<{SIREN: string}>) => checkSIREN(opts),
    'apis/CHECK_SIRET': (opts: IGlobalCallApi<{SIRET: string}>) => checkSIRET(opts)
}

apiClient.interceptors.response.use((response) => {

    statusResponseHandler({status: response.status, data: {message:response.data.message as string}})
    return response
}, (error) => {
    console.log("erreur", error)
    // Errors handling
    const { response } = error
    return statusResponseHandler(response)
})

function statusResponseHandler(response: { status: number, data: T_Generic_Response}){

    switch (response.status) {
        case 450 : window.location.href = "/404"
            break;
        case 510 :
            toast.error(locals[getLocalState()][response.data.message])
            break;
        case 210 :
            toast.success(locals[getLocalState()][response.data.message])
            break;
        case 500:
            return response
        case 350 :
            return response
        case 200 :
            return
        default: return;
    }
}

export async function globalCallApi<T,R>(opts: IGlobalCallApi<T>): Promise<R | undefined> {

    try{
        const signatureMethod = dispatcher[opts.method] as DispatcherFunction<T,R>
        const response =  await signatureMethod(opts)

        console.log(response)
        if(response && response.data)
            return response.data

    }catch (e) {
       console.log(e)
        return undefined
    }

}

export default apiClient