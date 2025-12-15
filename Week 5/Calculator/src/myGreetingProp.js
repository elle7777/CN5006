import './App.css';

function GreetingProp (prop) {
    return (
        <div className="App">
            <h1>Good Morning, is {prop.message} today </h1>
        </div>
    )
}

export default GreetingProp;
