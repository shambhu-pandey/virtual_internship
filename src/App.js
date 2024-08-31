import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); /
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="input-row">
        <input type="text" value={input} readOnly className="input-area" />
        <button onClick={handleClear} className="clear-button">
          C
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => setInput(input.slice(0, -1))}>{"<>"}</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>
    </div>
  );
}

export default Calculator;
