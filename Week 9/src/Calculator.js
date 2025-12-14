import "./App.css";
import "./Calculator.css";
import React from "react";
import { Button } from "./Button.js";
import { VerticalButton } from "./Button.js";
import { HorizontalButton } from "./Button.js";
import { ShowMeButton } from "./Button.js";
import { SquareButton } from "./Button.js";
import { useState } from "react";
import { useRef } from "react";
import cat from "./nyancat.jpg";

function KeyPadComponent(props) {
    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);

    const EvaluateOperation = (text) => {
        let sum = eval(text);
        console.log("sum: " + sum);
        return sum;
    };
    const EvaluatePower = (text) => {
        let num = Number(text);
        let sum = Math.pow(num, 2);
        console.log("pow sum: " + sum);
        return sum;
    };

    const DeleteOne = (text) => {
        try {
            if (text.length > 1) {
                let finalText = text.slice(0, text.length - 1);
                return finalText;
            } else {
                let finalText = "";
                return finalText;
            }
        } catch (err) {
            console.log("DeleteOne Error: " + err.message);
        }
    };

    const ClickHandle = (element) => {
        try {
            let sign = element.target.value;
            if (
                sign !== "=" &&
                sign !== "^2" &&
                sign !== "<==" &&
                sign !== "C"
            ) {
                setText((text) => (text += sign));
            } else if (sign === "^2") {
                setText(EvaluatePower(text));
                console.log("pow eval: " + text);
            } else if (sign === "=") {
                setText(EvaluateOperation(text));
                console.log("eval: " + text);
            } else if (sign === "<==") {
                setText(DeleteOne(text));
            } else if (sign === "C") {
                setText("");
            }
        } catch {
            setText("err");
        }
    };

    const ShowMe = () => {
        setOpen(true);
    };

    const CloseMe = () => {
        setOpen(false); 
    }

    if (open) {
        return (
            <div id="popup">
                <div className="imageBox">
                    <h1>Nyan Cat</h1>
                    <img src={cat} alt="Me"></img>
                    <button onClick={CloseMe}>Close</button>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div className="Calculator">
                    <div className="grid">
                        <div className="screen-row">
                            <input type="text" readOnly value={text} />
                        </div>
                        <div id="b1">
                            <Button label="(" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b2">
                            <Button label=")" ClickHandle={ClickHandle} />
                        </div>
                        <div id="hb">
                            <HorizontalButton
                                label="<=="
                                ClickHandle={ClickHandle}
                            />
                        </div>
                        <div id="b3">
                            <Button label="/" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b4">
                            <Button label="*" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b5">
                            <SquareButton label="Square" value="^2" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b6">
                            <Button label="C" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b7">
                            <Button label="7" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b8">
                            <Button label="8" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b9">
                            <Button label="9" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b10">
                            <Button label="+" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b11">
                            <Button label="4" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b12">
                            <Button label="5" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b13">
                            <Button label="6" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b14">
                            <Button label="-" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b15">
                            <Button label="1" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b16">
                            <Button label="2" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b17">
                            <Button label="3" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b18">
                            <Button label="." ClickHandle={ClickHandle} />
                        </div>
                        <div id="b19">
                            <Button label="0" ClickHandle={ClickHandle} />
                        </div>
                        <div id="b20">
                            <Button label="00" ClickHandle={ClickHandle} />
                        </div>
                        <div id="vb">
                            <VerticalButton
                                label="="
                                ClickHandle={ClickHandle}
                            />
                        </div>
                        <div id="sb">
                            <ShowMeButton
                                label="Show Me"
                                ClickHandle={ShowMe}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function Popup(prop) {
    return (
        <div id="popup">
            <div className="imageBox">
                <h1>Nyan Cat</h1>
                <img src={cat} alt="Me"></img>
                <button>Close</button>
            </div>
        </div>
    );
}

export { KeyPadComponent, Popup };
