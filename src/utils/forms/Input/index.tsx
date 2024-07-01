import {RegisterOptions, useFormContext} from "react-hook-form";
import "./style.scss"
import {findErrors} from "../ErrorsHandler/utils.ts";
import ErrorsHandler from "../ErrorsHandler";
type InputProps = {
    label: string,
    name: string,
    inline?: boolean,
    type? : string,
    rules? : RegisterOptions
}

function Input({label, name, inline, type, rules}:InputProps){

    const {
        register,
        formState: { errors }
    } = useFormContext()

    const inputError = findErrors(errors, name)
    return (
        <div className="wodaway_input" style={{display: "flex", flexDirection: inline ? "row" : "column"}}>
            <div style={{marginBottom: inline ? "" : "var(--form-label-margin-bottom)"}}>
                {rules && rules["required"] && <span className="form_field_required">*</span>}
                <label>{label}</label>
            </div>
            <input
                type={type}
                placeholder={label}
                {...register(name, rules )}
            />
            <ErrorsHandler error={inputError?.error?.message} />
        </div>
    )

}

export default Input