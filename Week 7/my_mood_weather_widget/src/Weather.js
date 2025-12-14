import "./App.css";
import Emoji from "./Emoji";
import happy from "./happy.png";
import neutral from "./neutral.png";
import sad from "./sad.png";

function Weather(prop) {
    return (
        <div className="row">
            <div className="weather_img">
                <img src={prop.img} alt={prop.alt}></img>
            </div>
            <div className="selection">
                <Emoji img={happy} alt="happy"></Emoji>
                <Emoji img={neutral} alt="neutral"></Emoji>
                <Emoji img={sad} alt="sad"></Emoji>
            </div>
        </div>
    );
}

export default Weather;
