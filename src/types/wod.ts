export type T_Wod = {
    type: string,
    name? : string,
    date? : Date,
    result: any
}

export type T_Event = {
    city: string,
    name : string,
    date? : Date,
    score: number
    max_athlete: number,
}