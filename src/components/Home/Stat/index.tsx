import "./index.scss"
import LastWod from "./LastWod.tsx";
import LastEvent from "./LastEvent.tsx";

function Stat(){

    return (
        <div className="stats">
            <LastWod />
            <LastEvent />
        </div>
    )
}

export default Stat