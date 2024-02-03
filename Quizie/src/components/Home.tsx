import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Test your IQ 🧠</h1>
      <h3>Let's take a quiz</h3>
      <button className="btn" onClick={() => navigate("/quiz")}>
        Start
      </button>
    </div>
  );
};

export default Home;
