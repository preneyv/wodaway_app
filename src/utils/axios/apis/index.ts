import {ApiResponse, IGlobalCallApi} from "../../../interfaces/IGlobalCallApiPayload.ts";
import {T_Generic_Response} from "../../../types/generic.ts";
import apiClient from "../index.ts";


export async function checkSIREN(opts:IGlobalCallApi<{SIREN:string}>):Promise<ApiResponse<{state: boolean} | T_Generic_Response>>{
    return await apiClient.get(`/apis/insee/SIREN/${opts.data?.SIREN}`)
}

export async function checkSIRET(opts:IGlobalCallApi<{SIRET:string}>):Promise<ApiResponse<{state: boolean}>>{
    return await apiClient.get(`/apis/insee/SIREN/${opts.data?.SIRET}`)
}