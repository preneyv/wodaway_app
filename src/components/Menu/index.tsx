import "./style.scss"
import {Link} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faChartColumn, faTrophy, faEllipsis, faPlus} from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../toolbox/ButtonIcon.tsx";

type Box = {
    icon : string,
    name : string,
    uuid : string
}

function Menu(){

    const [listBox, setListBox] = useState<Box[] | []>()
    const [showMoreBoxes, setShowMoreBoxes] = useState<boolean>(false)

    const getListOfBox = useCallback(() => {
        const list: Box[] = [
            {
                icon: "/src/assets/kanaka.png",
                name: "Crossfit Kanaka",
                uuid: "111-222"
            },
            {
                icon: "/src/assets/elephas.png",
                name: "Crossfit Elephas",
                uuid: "111-333"
            }
        ]
        setListBox(list)

    },[])

    useEffect(() => {
        getListOfBox()
    },[getListOfBox])


    return (
        <div className="menu">
            <div className="wodaway_icon">
                <Link to="/app"><img alt="wodaway_icon" src="/src/assets/icon.png"/></Link>
            </div>
            <hr className="separate" />
            <div className="main">
                <div className="icon">
                    <Link to="/app">
                        <FontAwesomeIcon icon={faUser} size="2xl" style={{ color:"#7F8488"}} />
                    </Link>
                </div>
                <div className="icon">
                    <Link to="/app">
                        <FontAwesomeIcon icon={faChartColumn} size="2xl" style={{ color:"#7F8488"}} />
                    </Link>
                </div>
                <div className="icon">
                    <Link to="/app">
                        <FontAwesomeIcon icon={faTrophy} size="2xl" style={{ color:"#7F8488"}} />
                    </Link>
                </div>
            </div>
            <hr className="separate" />
            <div className="boxes">
                {
                    listBox && listBox?.length > 0 &&
                    listBox.map((box) => {
                        return (
                            <div className="box" key={box.uuid}>
                                <Link to=""><img alt={box.name} src={box.icon}/></Link>
                            </div>
                        )
                    })
                }
                <div className={`more ${showMoreBoxes ? "show" : "hide"}`}>
                    <ButtonIcon
                        icon={faEllipsis}
                        size="2xl"
                        className="button_more"
                        name="button_more"
                        onclickMethod={() => setShowMoreBoxes(!showMoreBoxes)}
                        style={{color: "#7F8488"}}
                    />
                    {
                        showMoreBoxes &&
                        <div className="list_boxes">
                            {
                                listBox && listBox?.length > 0 &&
                                listBox.map((box) => {
                                    return (
                                        <div className="box" key={box.uuid}>
                                            <Link to=""><img alt={box.name} src={box.icon}/></Link>
                                        </div>
                                    )
                                })

                            }
                            <div className="add" key="add">
                                <Link to=""><FontAwesomeIcon icon={faPlus} size="2xl" style={{ color:"#7F8488"}} /></Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu