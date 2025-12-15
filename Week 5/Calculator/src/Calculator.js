import './App.css';

function Calculator () {
    function Sum() {
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let result = num1 + num2;
        document.getElementById('result').innerText = result;
    }

    return (
        <div className="App">
            <input type="number" id="num1"></input>
            <p>+</p>
            <input type="number" id="num2"></input>
            <p>=</p>
            <button id="button" onClick={Sum}>Sum</button>
            <p id="result"></p>
        </div>
    )
}

export default Calculator;