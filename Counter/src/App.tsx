import React from "react";
import Counter from "./components/Counter.js";
import "./App.css";

export default function App() {
  return (
    <div>
      <Counter increment="Plus" decrement="Minus" reset="Reset" />
    </div>
  );
}
