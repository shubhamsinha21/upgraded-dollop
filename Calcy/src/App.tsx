import React, { useState } from "react";
import Heading from "./components/Heading.js";
import Display from "./components/Display.js";
import Calculator from "./components/Calculator.js";
import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");
  return (
    <div className="app">
      <Heading />
      <Display display={input} />
      <Calculator calculate={input} setCalculate={setInput} />
    </div>
  );
}

export default App;
