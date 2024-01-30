import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type SignupFormState = {
  username: string;
  email: string;
  password: string | number;
  confirmPassword: string | number;
};

const SignupForm: React.FC = () => {
  // form data
  const [formData, setFormData] = useState<SignupFormState>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // errors
  const [errors, setErrors] = useState<string[]>([]);
  // navigation
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validateErrors: string[] = [];
    if (!formData.username) {
      validateErrors.push("Username is required");
    }

    if (!formData.email) {
      validateErrors.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validateErrors.push("Invalid email format");
    }

    if (!formData.password) {
      validateErrors.push("Password is required");
    } else if (formData.password.toString().length < 8) {
      validateErrors.push("Password must be at least 8 characters in length");
    }

    if (formData.password !== formData.confirmPassword) {
      validateErrors.push("Passwords do not match");
    }

    setErrors(validateErrors);

    // no errors -> signup
    if (!validateErrors.length) {
      console.log("Signup successful !", formData);
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        {errors.includes("Username is required") && <p>Username is required</p>}
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        {errors.includes("Email is required") && <p>Email is required</p>}
        {errors.includes("Invalid email format") && <p>Invalid email format</p>}
      </div>

      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        {errors.includes("Password is required") && <p>Password is required</p>}
        {errors.includes(
          "Password must be at least 8 characters in length"
        ) && <p>Password must be at least 8 characters in length</p>}
        {errors.includes(
          "Password must be at least 8 characters in length"
        ) && <p>Password must be at least 8 characters in length</p>}
      </div>

      <div>
        <label>
          ConfirmPassword:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        {errors.includes("Passwords do not match") && (
          <p>Passwords do not match</p>
        )}
      </div>

      <button onClick={handleSubmit} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
