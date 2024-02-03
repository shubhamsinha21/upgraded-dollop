import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Quiz, Result } from "../components";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
