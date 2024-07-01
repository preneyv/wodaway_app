import {ApiResponse, IGlobalCallApi} from "../../../interfaces/IGlobalCallApiPayload.ts";
import apiClient from "../index.ts";
import {T_Athlete, T_Box, T_User, T_Validation, T_Validation_Response} from "../../../types/auth.ts";
import {T_Generic_Response} from "../../../types/generic.ts";


export async function addNewAthlete(payload: IGlobalCallApi<T_Athlete> ) : Promise<ApiResponse<T_Generic_Response>>{

    return await apiClient.post("/auth/sign-up/athlete", payload.data)
}

export async function addNewBox(payload: IGlobalCallApi<T_Box> ): Promise<ApiResponse<T_Generic_Response>>{

    return await apiClient.post("/auth/sign-up/box", payload.data)
}

export async function checkSignUpValidation(opts:IGlobalCallApi<T_Validation>):Promise<ApiResponse<T_Validation_Response | T_Generic_Response>>{
    return await apiClient.get(`/auth/validation/${opts.data?.uuid}`)
}

export async function confirmSignUpValidation(opts:IGlobalCallApi<T_Validation>){
    return await apiClient.post(`/auth/validation/${opts.data?.uuid}/confirm`)
}

export async function signIn(opts:IGlobalCallApi<T_User>){
    return await apiClient.post(`/auth/sign-in`, opts.data)
}

export async function isAuthenticated(){
    return await apiClient.get(`/auth/check-authentication`)
}