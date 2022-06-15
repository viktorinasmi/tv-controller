import './ViewCircle.css'
import MainTop from "../MainTop/MainTop";
import MainBottom from "../MainBottom/MainBottom";

const ViewCircle =() => {
    return(
        <div id="view-circle" className="view-circle">
            <div className="main">
                <MainTop/>
                <MainBottom/>
                {/*<div className="main-top">*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default ViewCircle;