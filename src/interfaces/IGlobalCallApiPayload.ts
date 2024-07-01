export interface ApiResponse<T = any> {
    status: number;
    data: T;
}
export interface IGlobalCallApi<T = any> {
    method: string;
    data?: T;
    params?: Record<string, any>;
}

// Interface pour le dispatcher
export interface T_DispatcherAxios {
    [key: string]: DispatcherFunction;
}


export type DispatcherFunction<T = any, R = any> = (opts: IGlobalCallApi<T>) => Promise<ApiResponse<R>>;

