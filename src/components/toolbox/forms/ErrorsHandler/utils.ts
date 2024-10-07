import {FieldErrors} from "react-hook-form";

type ErrorFormat = {
    error? : {
        message : string
    }
}
export function findErrors(errors : FieldErrors, name :string) : ErrorFormat{
    return  Object.keys(errors)
        .filter(key => key.includes(name))
        .reduce((cur, key) => {
            return Object.assign(cur, {error : errors[key]})
        }, {})

}

export function passwordValidation(pass : string){
    console.log(pass)
}