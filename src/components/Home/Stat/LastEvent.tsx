import {T_Event} from "../../../types/wod.ts";
import {useCallback, useEffect, useState} from "react";
import {events} from "../../../utils/populate/wod.ts";
import dateFormatToString from "../../../utils/other/dateFormatToString.ts";




function ItemEvent({event}:{event:T_Event}) {

    return (
        <div className="wod">
            <span>{event.name}</span>
            <span>{`${event.score}/${event.max_athlete}`}</span>
            <span>{event.city}</span>
            <span>{event.date && dateFormatToString(event.date)}</span>
        </div>
    )
}


function LastEvent(){

    const [listEvents, setListEvents] = useState<T_Event[]>([]);

    const getListWods = useCallback(()  => {
        const listEventsCall : T_Event[] = events
        setListEvents(listEventsCall);
    },[])

    useEffect(() => {
        getListWods()
    },[getListWods])

    return(
        <div className="last_event">
            <div className="head"><span>Mes derniers events</span></div>
            <div className="list">
                {
                    listEvents.map((event: T_Event, index: number) =>
                        <div className="wod_list_iterate" key={index}>
                            <ItemEvent event={event} />
                            {index < listEvents.length - 1 && <hr className="separate"/>}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default LastEvent;