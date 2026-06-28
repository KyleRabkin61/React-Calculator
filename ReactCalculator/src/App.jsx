import { useDebugValue, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");
  
  const calculatorButtons = [
    {
      text: "⌫",
      value: 0,
      buttonClass: "inputOperation",
    },
    {
      text: "A/C",
      value: "clear",
      buttonClass: "inputOperation",
    },
    {
      text: "%",
      value: 0,
      buttonClass: "inputOperation",
    },
    {
      text: "/",
      value: "/",
      buttonClass: "mathematicalOperation",
    },
    {
      text: "7",
      value: 7,
      buttonClass: "number",
    },
    {
      text: "8",
      value: 8,
      buttonClass: "number",
    },
    {
      text: "9",
      value: 9,
      buttonClass: "number",
    },
    {
      text: "X",
      value: "*",
      buttonClass: "mathematicalOperation",
    },
    {
      text: "4",
      value: 4,
      buttonClass: "number",
    },
    {
      text: "5",
      value: 5,
      buttonClass: "number",
    },
    {
      text: "6",
      value: 6,
      buttonClass: "number",
    },
    {
      text: "-",
      value: "-",
      buttonClass: "mathematicalOperation",
    },
    {
      text: "1",
      value: 1,
      buttonClass: "number",
    },
    {
      text: "2",
      value: 2,
      buttonClass: "number",
    },
    {
      text: "3",
      value: 3,
      buttonClass: "number",
    },
    {
      text: "+",
      value: "+",
      buttonClass: "mathematicalOperation",
    },
    {
      text: "+/-",
      value: 3,
      buttonClass: "inputOperation",
    },
    {
      text: "0",
      value: 0,
      buttonClass: "number",
    },
    {
      text: ".",
      value: ".",
      buttonClass: "inputOperation",
    },
    {
      text: "=",
      value: "=",
      buttonClass: "mathematicalOperation",
    },
  ];

  function inputValue(idx) {
    const buttonValue = calculatorButtons[idx].value;

    if (buttonValue === "=") {
      resolve();
      return;
    } else if (buttonValue === "clear") {
      setInput("0");
      return;
    }
    if (input === "0") {
      setInput(buttonValue);
      return;
    } else {
      setInput(input + buttonValue);
      return;
    }
  }

  function resolve() {
    const answer = eval(input);
    setInput(answer.toString());
  }

  return (
    <>
      <div className="container">
        <div className="calculator">
          <div className="calculator-input-bar">
            <h1 className="input">{input}</h1>
          </div>
          <div className="calculator-buttons-row">
            {calculatorButtons.map((button, index) => (
              <div
                key={button.text}
                className={`calculator-button ${button.buttonClass}`}
                onClick={() => inputValue(index)}
              >
                {button.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
