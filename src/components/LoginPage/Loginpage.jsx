import React, { useState } from "react";
import "./Loginpage.css";

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
    // Enter firebase auth
  };

  return (
    <>
        <div class="login-container">
          <h2>Login</h2>
          <form>
            <div class="input-group">
              <input
                onChange={handleCreds}
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              ></input>
            </div>
            <div class="input-group">
              <input
                onChange={handleCreds}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button onClick={handleLogin} type="submit" class="login-box" />
          </form>

          <div class="separator">
            <span>Or login using</span>
          </div>

          {/* <!-- Social Buttons --> */}
          <div class="social-buttons">
            {/* <!-- Login with Google --> */}
            <img alt="" />
            {/* <!-- Login with Github --> */}=
            <img alt="" src=""/>
          </div>

          <div class="forgot-password">
            <p>Forgot password?</p>
          </div>
        </div>
    </>
  );
};
export default LoginPage;
