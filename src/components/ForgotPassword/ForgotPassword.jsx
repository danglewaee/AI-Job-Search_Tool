import React, { useState } from "react";
import "../Signuppage/Signuppage.css";


export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handlePass = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // Enter firebase auth
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="step-indicator">
          <div className="step active">Reset Password</div>
        </div>
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
        <p>Your email is: {email}</p>
      </div>
    </div>
  );
}
