import React, { useState } from 'react';
import './Loginpage.css';

const LoginPage = () => {
    



    return(
    
<>
    <body>
        <div class="login-container">
            <h2>Login</h2>
            <form >
                <div class="input-group">
                    <input type="text" id="username" name="username" placeholder="Username" required></input>
                </div>
                <div class="input-group">
                    <input type="password" id="password" name="password" placeholder="Password" required />
                </div>
                <button type="submit" class="login-box">Login</button>
            </form>

            <div class="separator">
                <span>Or login using</span>
            </div>

            {/* <!-- Social Buttons --> */}
            <div class="social-buttons">
                {/* <!-- Login with Google --> */}
                <a href="">
                    <img src="" alt="Google Logo" class="social-logo" />
                </a>

                {/* <!-- Login with LinkedIn --> */}
                <a href="">
                    <img src="" alt="LinkedIn Logo" class="social-logo" />
                </a>
            </div>
            
            <div class="forgot-password">
                <a>Forgot password?</a>
            </div>
        </div>
    </body>

</>
)
}
export default LoginPage;