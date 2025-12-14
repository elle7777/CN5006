import './App.css';
import cat from './nyancat.jpg';

function Popup() {
    return(
        <div className="popup">
            <div className="imageBox">
                <h1>Nyan Cat</h1>
                <img src={cat} alt="Me"></img>
                <button>Close</button>
            </div>
        </div>
    )
}

export default Popup