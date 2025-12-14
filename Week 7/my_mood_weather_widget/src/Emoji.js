import { useState } from "react";
import "./App.css";

function Emoji(prop) {
    const [counter, setCounter] = useState(0);

    function Counter() {
        setCounter((counter) => (counter += 1));
    }

    return (
        <div className="emoji">
            <button onClick={Counter}>
                <img src={prop.img} alt={prop.alt}></img>
            </button>
            <p>{counter}</p>
        </div>
    );
}

export default Emoji;