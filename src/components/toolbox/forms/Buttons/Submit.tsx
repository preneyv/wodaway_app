import "./style.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";

type ButtonProps = {
    text: string,
    name: string,
    loading : boolean
}
function Submit({text, name, loading} : ButtonProps){

    return (
        <button name={name} className="wodaway_submit_button" type="submit">
            {loading && <FontAwesomeIcon icon={faCircleNotch} spin />}{text}
        </button>
    )
}

export default Submit