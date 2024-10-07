
import "./style.scss"
import Flow from "./Flow";
import Stat from "./Stat";
import Graph from "./Graph";



function HomeComp(){

    return (
        <div className="home">
            <Flow />
            <Stat />
            <Graph />
        </div>
    )
}

export default HomeComp