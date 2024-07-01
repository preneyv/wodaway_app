
export type T_User = {
    email : string,
    password : string
}

export type T_Athlete = {
    firstname : string,
    lastname : string,
    age : number,
    weight : number,
    height : number,
    email : string,
    password : string
}



export type T_Box = {
    name : string,
    company : string,
    address : string,
    code : number,
    city : string,
    SIRET : string,
    SIREN : string,
    height : number,
    email : string,
    password : string
}


export type T_Validation = {
    uuid: string
}

export type T_Validation_Response = {
    token : {
        is_validated : boolean,
        user: {
            athlete? : {
                lastname: string,
                firstname : string
            },
            box : {
                name : string
            },
            email :string
        }
    }
}

export type T_Check_Authentication = {
    is_authenticated : boolean
}

export type T_SignIn_Response = {
    token : string
}