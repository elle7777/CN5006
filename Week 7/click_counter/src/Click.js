import { useState } from "react";
import "./Click.css";

function ClickCounter() {
  const [counter, setCounter] = useState(0);

  function IncreaseCounter() {
    setCounter((counter) => (counter += 1));
    return 0;
  }

  return (
    <div className="App">
      <div className="title">
        <div cassName="title" id="title2">
            <h3>You Clicked me <h3 id="count"> {counter} </h3> times</h3>
        </div>
        <button id="button" onClick={IncreaseCounter}>
          {" "}
          Click me{" "}
        </button>
      </div>
    </div>
  );
}

export default ClickCounter;
