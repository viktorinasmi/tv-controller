import './TextButton.css'

const TextButton =(props) => {

    const {text} =props;


    return(
        <button id="btn-center" className="button-text">{text}</button>
    )
}

export default TextButton;