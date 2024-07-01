import {MouseEventHandler} from 'react'
import "./style.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";

type ButtonProps = {
    text: string,
    name: string,
    loading : boolean,
    onclickMethod : MouseEventHandler<HTMLButtonElement> | undefined
}
function Submit({text, name, loading, onclickMethod} : ButtonProps){

    return (
        <button name={name} className="wodaway_button" type="button" onClick={onclickMethod}>
            {loading && <FontAwesomeIcon icon={faCircleNotch} spin />}{text}
        </button>
    )
}

export default Submit