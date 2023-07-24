import './Player.css';
import FormatTime from '../Utils/FormatTime';

function Control (props) {
    return (
        <div className="PlayerControl__container">
            <button onClick={props.playCallback} className='PlayerControl__button'>Play</button>
            <button onClick={props.pauseCallback} className='PlayerControl__button'>Pause</button>
            <div className="PlayerControl__timer">{FormatTime(props.currentTime || null)}</div>
        </div>
    )
}

export default Control;