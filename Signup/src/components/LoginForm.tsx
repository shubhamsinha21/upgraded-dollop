import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginFormState = {
  email: string;
  password: string | number;
};

const LoginForm: React.FC = () => {
  // form data
  const [formData, setFormData] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  //errors
  const [errors, setErrors] = useState<string[]>([]);
  // navigation
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors([]);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault;
    const validateErrors: string[] = [];
    if (!formData.email) {
      validateErrors.push("Email is required");
    }
    if (!formData.password) {
      validateErrors.push("Password is required");
    }

    setErrors(validateErrors);

    // no errors -> Home
    if (!validateErrors.length) {
      alert("You are Logged in !");
      navigate("/");
    }
  };

  return (
    <form className="loginform">
      <h1>Login Form</h1>
      <div className="login-form-container">
        <div className="form-div">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {errors.includes("Email is required") && <p>Email is required</p>}
        {errors.includes("Invalid email format") && <p>Invalid email format</p>}

        <div className="form-div">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {errors.includes("Password is required") && <p>Password is required</p>}
      </div>
      <div className="buttons">
        <button
          onClick={() => navigate("/signup")}
          type="submit"
          className="btn"
        >
          Signup
        </button>
        <button onClick={handleLogin} type="submit" className="btn">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
