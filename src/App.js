
import SignupPageBasic from './components/SignupPage/Signuppage.jsx'
import SignupPagePereferences from './components/SignupPage/preferences.jsx'
import LoginPage from './components/LoginPage/Loginpage.jsx';
import { Routes, Route } from 'react-router-dom';
import ResetPassword from './components/ForgotPassword/ResetPassword.jsx'
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx'
import Sent from './components/ForgotPassword/Sent.jsx'
import Confirmation from './components/ForgotPassword/Confirmation.jsx'

function App() {
  return (
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/signup-basic" element={<SignupPageBasic/>} />
    <Route path="/signup-pref" element={<SignupPagePereferences/>} />
    <Route path="/forgot-password" element={<ForgotPassword/>} />
    <Route path="/reset-password" element={<ResetPassword/>} />
    <Route path="/sent" element={<Sent/>} />
    <Route path="/confirmation" element={<Confirmation/>} />
      
    </Routes>
  );
}

export default App;