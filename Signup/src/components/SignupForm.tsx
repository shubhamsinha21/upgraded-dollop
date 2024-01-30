import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type SignupFormState = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupForm: React.FC = () => {
  // form data
  const [formData, setFormData] = useState<SignupFormState>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //suggestions
  const [suggestions, setSuggestions] = useState<string[]>([]);
  // password strength
  const [strength, setStrength] = useState<string>("");

  // errors
  const [errors, setErrors] = useState<string[]>([]);
  // navigation
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors([]);
  };

  const validatePassword = () => {
    let newSuggestions = [];
    if (formData.password.length < 8) {
      newSuggestions.push("Password should be atlest 8 characters");
    }
    if (!/\d/.test(formData.password)) {
      newSuggestions.push("Password must contain atleast one number");
    }
    if (!/[A-Z]/.test(formData.password) || !/[a-z]/.test(formData.password)) {
      newSuggestions.push("Include both uppercase and lowercase letters");
    }
    if (!/[^A-Za-z0-9]/.test(formData.password)) {
      newSuggestions.push("Include atleast one special characters");
    }

    setSuggestions(newSuggestions);

    // password strength
    if (newSuggestions.length === 0) {
      setStrength("Very Strong");
    } else if (newSuggestions.length <= 1) {
      setStrength("Strong");
    } else if (newSuggestions.length <= 3) {
      setStrength("Moderate");
    } else if (newSuggestions.length <= 5) {
      setStrength("Weak");
    } else {
      setStrength("Too Weak");
    }
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
    <form className="signupform">
      <h1>Signup Form</h1>
      <div className="signup-form-container">
        <div className="form-div">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        {errors.includes("Username is required") && <p>Username is required</p>}

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
            onChange={(e) => {
              handleChange(e);
              validatePassword();
            }}
            required
          />
        </div>
        {errors.includes("Password is required") && <p>Password is required</p>}
        {errors.includes(
          "Password must be at least 8 characters in length"
        ) && <p>Password must be at least 8 characters in length</p>}
        <p>
          {formData.password
            ? suggestions.map((suggestions, index) => (
                <p key={index}>
                  {index + 1}.{suggestions}
                </p>
              ))
            : null}
        </p>

        <div className="form-div">
          <label>ConfirmPassword:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {errors.includes("Passwords do not match") && (
          <p>Passwords do not match</p>
        )}
      </div>
      <div className="buttons">
        <button onClick={handleSubmit} type="submit" className="btn">
          Signup
        </button>
        <button
          onClick={() => navigate("/login")}
          type="submit"
          className="btn"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
