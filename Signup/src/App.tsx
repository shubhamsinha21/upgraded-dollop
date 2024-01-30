import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import SignupForm from "./components/SignupForm.tsx";
import LoginForm from "./components/LoginForm.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
