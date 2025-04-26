import React, { useState } from "react";
import "./Loginpage.css";
import googleIcon from "../../assets/google.png";
import githubIcon from "../../assets/github.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [usercreds, setusercreds] = useState({
    email: "",
    password: "",
  });

  const handleCreds = (e) => {
    const { name, value } = e.target;
    setusercreds((prevCreds) => ({
      ...prevCreds,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", usercreds.email, usercreds.password);
    // TODO: Integrate with Firebase or your own backend here
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={usercreds.email}
              onChange={handleCreds}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={usercreds.password}
              onChange={handleCreds}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>

        <div className="separator">
          <span>Or login using</span>
        </div>

        <div className="social-buttons">
          <img src={googleIcon} alt="Login with Google" />
          <img src={githubIcon} alt="Login with GitHub" />
        </div>

        <div className="forgot-password">
        <Link className="forgot-password-link" to="/" >Forgot password</Link>
        <p className="login-link">Don't have an account? <Link to="/signup">Sign up here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


