
import SignupPage from './components/SignupPage/Signuppage.jsx'
import LoginPage from './components/LoginPage/Loginpage.jsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import ResetPassword from './components/ForgotPassword/ResetPassword.jsx'
// import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx'

function App() {
  return (
    <Routes>
    {/* <div className="App">
      <SignupPage/>
    </div> */}
     <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage/>} />
      
    </Routes>
  );
}

export default App;