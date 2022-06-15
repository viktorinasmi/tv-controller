import './MainTop.css'
import TextButton from "../../components/TextButton/TextButton";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import PowerButton from "../../components/PowerButton/PowerButton";


const MainTop = () =>{
    return(
        <div className="main-top">
            <PowerButton/>
            <div className="main-top-control">
                <div className="main-top-row main-top-row--center">
                    <ArrowButton direction='top'/>
                </div>
                <div className="main-top-row">
                    <ArrowButton direction='left'/>
                    <TextButton text="ОК"/>
                    <ArrowButton direction='right'/>
                </div>
                <div className="main-top-row main-top-row--center">
                    <ArrowButton direction='bottom'/>
                </div>
            </div>
        </div>
    )
}

export default MainTop;