import React, { useState } from "react";
import "./ForgotPassword.css";


export default function ResetPassword() {
  const [password, setPassword] = useState("");

  const handlePass = (e) => {
    const { value } = e.target;

    setPassword(value);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    // Enter Firebase auth and route to confirmation.jsx
  };

  return (
    <div className="container">

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
