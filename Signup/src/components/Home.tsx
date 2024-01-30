import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Welcome to Codeate Demonstration 👋🏻</h1>
      <div>
        <h2>Lets Explore !</h2>
        <button className="btn" onClick={() => navigate("/signup")}>
          Signup Here
        </button>
      </div>
    </div>
  );
};

export default Home;
