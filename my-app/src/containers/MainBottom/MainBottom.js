import './MainBottom.css'
import RoundButton from "../../components/RoundButton/RoundButton";

const MainBottom = () => {
    return (
        <div class="main-bottom">
            <div class="main-bottom-column main-bottom-column--left">
                <RoundButton icon= "back"/>
                <RoundButton icon= "search"/>
                <RoundButton icon= "setting"/>
            </div>
            <div class="main-bottom-column main-bottom-column--right">
                <RoundButton icon= 'volumeOff'/>
                <div class="button-double">
                    <RoundButton icon= 'turnUp'/>
                    <RoundButton icon= 'turnDown'/>
                </div>
            </div>
        </div>
    )
}

export default MainBottom;