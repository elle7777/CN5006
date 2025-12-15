import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeting from './myGreetingApp';
import GreetingProp from './myGreetingProp';
import Color from './ColorApp';
import Calculator from './Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Greeting></Greeting>
    {/*<GreetingProp message="Monday"></GreetingProp>
    <GreetingProp message="Tuesday"></GreetingProp>
    <GreetingProp message="Wednesday"></GreetingProp>
    <GreetingProp message="Thursday"></GreetingProp>
    <GreetingProp message="Fryday"></GreetingProp>
    <GreetingProp message="Saturday"></GreetingProp>
    <GreetingProp message="Sunday"></GreetingProp>*/}
    <Calculator></Calculator>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
