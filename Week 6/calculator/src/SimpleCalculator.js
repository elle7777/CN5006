import './App.css';
import './Calculator.css';

function Calculator ()
{
    function Calculate()
    {
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let operator = document.getElementById('operator').value;
        let result = 0;
        switch(operator)
        {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if(num2 !== 0){result = num1 / num2;}
                else(result = 'impossible')
                break;
            default:
                result = 'invalid operator'
                break;
        }
        document.getElementById('result').innerText = result;
    }
    return(
        <div className = 'App'>
            <div className = 'title'>
                <h2>Simple Calculator</h2>
            </div>
            <input type="number" id="num1" placeholder="First Number"/>
            <select id="operator">
            <option value="+">Add</option>
            <option value="-">Subtract</option>
            <option value="*">Multiply</option>
            <option value="/">Divide</option>
            </select>
            <input type="number" id="num2" placeholder="Second Number"/>
            <button id="button" onClick={Calculate}> = </button>
            <p id="result">?</p>
        </div>
    )
}

export default Calculator;