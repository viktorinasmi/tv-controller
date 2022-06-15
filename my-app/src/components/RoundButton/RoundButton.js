import IconArrowLeft from '../../img/icons/arrow_left.png';
import IconSearch from '../../img/icons/search.png'
import IconSetting from '../../img/icons/setting.png'
import IconVolumeOff from '../../img/icons/volume_off.png'
import IconVolumeDown from '../../img/icons/volume_down.png'
import IconVolumeUp from '../../img/icons/volume_up.png'
import './RoundButton.css'

const RoundButton = (props) => {

    const {icon} = props;

    const IconImg = {
        back: IconArrowLeft,
        search: IconSearch,
        setting: IconSetting,
        volumeOff: IconVolumeOff,
        turnUp: IconVolumeUp,
        turnDown: IconVolumeDown,
    }

    return (
        <button id="btn-main-back" className="button">
            <img src={IconImg[icon]}/>
        </button>
    )
}

export default RoundButton;
