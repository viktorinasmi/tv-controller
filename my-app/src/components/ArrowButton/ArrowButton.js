import './ArrowButton.css'


const ArrowButton = (props) => {

    const {direction} = props;

    const iconClassName = {
        top: 'button-arrow-icon-top',
        left: 'button-arrow-icon-left',
        right: 'button-arrow-icon-right',
        bottom: 'button-arrow-icon-bottom',
    }

    return(
        <button id="btn-arrow-top" className="button-arrow">
            <div className={iconClassName[direction]}></div>
        </button>
    )
}

export default ArrowButton;