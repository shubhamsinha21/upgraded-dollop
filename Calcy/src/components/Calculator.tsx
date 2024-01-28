import React from "react";
import * as math from "mathjs";

interface CalculatorProps {
  calculate: string;
  setCalculate: React.Dispatch<React.SetStateAction<string>>;
}

const Calculator: React.FC<CalculatorProps> = ({ calculate, setCalculate }) => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  const handleButton = (value: string) => {
    if (value === "=") {
      try {
        const result = math.evaluate(calculate);
        setCalculate(result.toString());
      } catch {
        setCalculate("Error");
      }
    } else if (value === "C") {
      setCalculate("");
    } else {
      setCalculate((prevInput) => prevInput + value);
    }
  };

  return (
    <div>
      <div>
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleButton(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
