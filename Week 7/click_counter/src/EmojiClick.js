import { useState } from "react";
import "./EmojiCounter.css";

function Click(prop) {
  const [counter, setCounter] = useState(0);

  function clickCounter() {
    setCounter((counter) => (counter += 1));
  }

  return (
    <div className="square">
      <button id="button" onClick={clickCounter}>
        <img src={prop.img} alt={prop.alt} width={46} height={47}></img>
      </button>
      <p>{prop.alt} counter <p id="count"> {counter} </p></p>
    </div>
  );
}

export default Click;
