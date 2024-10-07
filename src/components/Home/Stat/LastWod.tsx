import {useCallback, useEffect, useState} from "react";
import {T_Wod} from "../../../types/wod.ts";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../../toolbox/ButtonIcon.tsx";
import {wods} from "../../../utils/populate/wod.ts";
import dateFormatToString from "../../../utils/other/dateFormatToString.ts";


function ItemWod({wod}:{wod:T_Wod}) {

    return (
        <div className="wod">
            <span>{wod.name}</span>
            <span>{wod.type}</span>
            <span>{`${wod.result.value} ${wod.result.result_unit}`}</span>
            <span>{`${wod.result.time_cap} ${wod.result.time_cap_unit} TC`}</span>
            <span>{wod.date && dateFormatToString(wod.date)}</span>
            <ButtonIcon
                icon={faEllipsis}
                size="2xl"
                className="button_detail"
                name="button_detail"
                style={{color: "#7F8488"}}
            />
        </div>
    )
}

function LastWod(){

    const [listWods, setListWods] = useState<T_Wod[]>([]);

    const getListWods = useCallback(()  => {
        const listWodsCall : T_Wod[] = wods
       setListWods(listWodsCall);
    },[])

    useEffect(() => {
       getListWods()
    },[getListWods])

    return(
        <div className="last_wod">
            <div className="head"><span>Mes derniers wods</span></div>
            <div className="list">
                {
                    listWods.map((wod:T_Wod, index: number) =>
                        <div className="wod_list_iterate" key={index}>
                            <ItemWod wod={wod} />
                            {index < listWods.length - 1 && <hr className="separate"/>}
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default LastWod;