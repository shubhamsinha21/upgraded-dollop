import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>
        {" "}
        Lets Check your <span>IQ</span> 🧠 !!
      </h1>
      <button onClick={() => navigate("/quiz")} className="btn">
        Quiz
      </button>
    </div>
  );
};

export default Home;
