import React, { useState } from "react";
import "./ResetPassword.jsx";


export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handlePass = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", email);
    // Enter firebase auth and route to sent.jsx with an email sent to the user on their email
  };

  return (
    <div className="container">
        <div className="step-indicator">
        </div>

      <div className="form-container">
        <h2>Forgot Password?</h2>
        <form>
          <input
            onChange={handlePass}
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          <button type="submit" onClick={handleClick} className="next-button">
            Get Reset Password Link
          </button>
        </form>
      </div>
    </div>
  );
}
