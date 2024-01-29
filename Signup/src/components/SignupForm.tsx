import React, { useState } from "react";

type SignupFormProps = {
  username: string;
  email: string;
  password: string | number;
  confirmPassword: string | number;
};

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormProps>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        ConfirmPassword:
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
