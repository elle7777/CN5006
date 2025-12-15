import './App.css';

function Color() {
    function ChangeColor(color) {
        document.body.style.background = color.target.value;
        alert("Greetings, I am " + color.target.value + " today")
    }

    return (
        <div className="App">
            <div className="button-screen">
                <button type="button" value="red" onClick={ChangeColor} >Red</button>
                <button type="button" value="green" onClick={ChangeColor}>Green</button>
                <button type="button" value="blue" onClick={ChangeColor}>Blue</button>
            </div>
        </div>
    )
}

export default Color;