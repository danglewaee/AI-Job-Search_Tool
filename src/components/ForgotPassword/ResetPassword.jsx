import React, { useState } from "react";
import "./ForgotPassword/ResetPassword.jsx";


export default function ResetPassword() {
  const [password, setPassword] = useState("");

  const handlePass = (e) => {
    const { value } = e.target;

    setPassword(value);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    // Enter Firebase auth
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="step-indicator">
          <div className="step active">Reset Password</div>
        </div>
      </div>

      <div className="form-container">
        <h2>Change your Password</h2>
        <form>
          <input
            onChange={handlePass}
            type="password"
            name="password"
            required
            placeholder="Enter your new password"
          />
          <button type="submit" onClick={handleReset} className="next-button">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
