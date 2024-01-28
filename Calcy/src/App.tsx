import React, { useState } from "react";
import Heading from "./components/Heading.js";
import Display from "./components/Display.js";
import Calculator from "./components/Calculator.js";

function App() {
  const [input, setInput] = useState<string>("");
  return (
    <>
      <Heading />
      <Display display={input} />
      <Calculator calculate={input} setCalculate={setInput} />
    </>
  );
}

export default App;
