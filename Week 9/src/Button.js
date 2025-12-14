import './App.css'
import './Calculator.css'
import React from "react";
// Create our Button component as a functional component.
const Button = (props) => {
    
    return (
        
        <button className="ButtonStyle" value={props.label}  onClick={props.ClickHandle} > {props.label}  </button>
      
    );
  }

const SquareButton = (props) => {
    return (
        <button className="SquareButton" value={props.value} onClick={props.ClickHandle} > {props.label} </button>
    )
}

const VerticalButton = (props) => {
    return (
        <button className="VerticalButton" value={props.label} onClick={props.ClickHandle} > {props.label} </button>
    )
}

const HorizontalButton = (props => {
    return (
        <button className="HorizontalButoon" value={props.label} onClick={props.ClickHandle} > {props.label} </button>
    )
})

const ShowMeButton = (props) => {
    return (
        <button className="ShowMeButton" onClick={props.ClickHandle}> {props.label}</button>
    )
}
  // Export our button component.
  export {Button, VerticalButton, HorizontalButton, ShowMeButton, SquareButton};
