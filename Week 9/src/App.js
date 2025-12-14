import logo from './logo.svg';
import './App.css';
import {KeyPadComponent} from './Calculator';
import { Popup } from './Calculator';


function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="title">
            <h1>React Calculator</h1>
          </div>
          <div className="content">
            <KeyPadComponent/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
