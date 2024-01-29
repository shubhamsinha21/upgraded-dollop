import React, { useState } from "react";

type CounterProps = {
  increment: string;
  decrement: string;
  reset: string;
};

const Counter: React.FC<CounterProps> = ({ decrement, increment, reset }) => {
  const [count, setCount] = useState<number>(0);
  const handlePlus = () => {
    {
      count === 100 ? alert("Cant exceed !") : setCount(count + 1);
    }
  };

  const handleMinus = () => {
    {
      count > 0 ? setCount(count - 1) : alert("Count should be greater than 0");
    }
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="counter-div">
      <h1>{count}</h1>
      <div className="counter-btn">
        <button onClick={handleMinus}>{decrement}</button>
        <button onClick={handleReset}>{reset}</button>
        <button onClick={handlePlus}>{increment}</button>
      </div>
    </div>
  );
};

export default Counter;
