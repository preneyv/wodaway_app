import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MouseEventHandler} from "react";
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";

type ButtonIconProps = {
    icon: IconProp,
    className: string,
    name: string,
    size: SizeProp,
    style: object,
    onclickMethod? : MouseEventHandler<HTMLButtonElement> | undefined
}

function ButtonIcon({icon, size, style,  name, className, onclickMethod} : ButtonIconProps){

    return (
        <button name={name} className={className} type="button" onClick={onclickMethod}>
            <FontAwesomeIcon size={size} icon={icon} style={style} />
        </button>
    )
}

export default ButtonIcon