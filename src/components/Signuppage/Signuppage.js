// import React, { useState } from 'react';
// import './Signuppage.css';
// import { auth, db } from '../firebaseconfig';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import arrowIcon from '../../assets/arrowblack.png';
// import googleIcon from '../../assets/google.png';
// import githubIcon from '../../assets/github.png';

// const SignupPage = () => {
//   const [usercreds, setusercreds] = useState({
//     email: '',
//     password: '',
//     confirmpassword: '',
//     firstname: '',
//     lastname: '',
//     dob: '',
//     gender: ''
//   });

//   const handlecreds = (e) => {
//     setusercreds({
//       ...usercreds,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handlesignup = async (e) => {
//     e.preventDefault();
    
//     // Check if db is properly initialized
//     if (!db) {
//       console.error("Firestore not initialized!");
//       alert("Database error. Please try again later.");
//       return;
//     }

//     // Password confirmation
//     if (usercreds.password !== usercreds.confirmpassword) {
//       alert("Passwords don't match!");
//       return;
//     }

//     try {
//       // 1. Create auth user
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         usercreds.email,
//         usercreds.password
//       );

//       // 2. Save to Firestore (using proper doc reference)
//       await setDoc(doc(db, "users", userCredential.user.uid), {
//         first_name: usercreds.firstname,
//         last_name: usercreds.lastname,
//         email: usercreds.email,
//         dob: usercreds.dob,
//         gender: usercreds.gender,
//         createdAt: new Date()
//       });

//       alert('Account created successfully!');
//     } catch (error) {
//       console.error("Full error:", error);
//       alert(`Signup failed: ${error.message}`);
//     }
//   };
  
//   return (
//     <div className="page-wrapper">
//       <div className="container">
//         <div className="sidebar">
//           <div className="step-indicator">
//             <div className="step active">1. Basic Information</div> {/* Added href and fixed closing tag */}
//             <div className="step">2. Skills</div> {/* Fixed extra closing tag */}
//             <div className="step">3. Preferences</div>
//           </div>
//         </div>

//         <div className="form-container">
//           <h2>Create your account</h2>
//           <form method="post">
//             <input onChange={(e)=>{handlecreds(e)}} type="email" name='email'required placeholder="Email address" />
//             <input onChange={(e)=>{handlecreds(e)}} type="password" name='password' required placeholder="Password" />
//             <input onChange={(e)=>{handlecreds(e)}} type="password" name='confirmpassword'required placeholder="Confirm your Password" />
//             <input onChange={(e)=>{handlecreds(e)}} type="text" name='firstname'required placeholder="First Name" />
//             <input onChange={(e)=>{handlecreds(e)}}type="text" name='lastname' required placeholder="Last Name" />
//             <input onChange={(e)=>{handlecreds(e)}}type="date" name='dob' required placeholder="Date of birth" />

//             <div className="gender-options">
//               <p>Enter your gender (Optional):</p>
//               <input  onChange={(e)=>{handlecreds(e)}}type="radio" id="male" name="gender" value="Male" />
//               <label htmlFor="male">Male</label>
//               <input  onChange={(e)=>{handlecreds(e)}}type="radio" id="female" name="gender" value="Female" />
//               <label htmlFor="female">Female</label>
//             </div>

//             <button type="button" onClick={(e)=>{handlesignup(e)}} className="next-button"> {/* Added type="button" */}
//               Next <img src={arrowIcon} alt="arrow" />
//             </button>

//             <div className="separator">
//               <span>Or Signup using</span>
//             </div>

//             <div className="social-buttons">
//               <button type="button" style={{ background:'none', border:'none' }}><img src={googleIcon} alt="Google" /></button> {/* Wrapped in button for better semantics */}
//               <button type="button" style={{ background:'none', border:'none' }}><img src={githubIcon} alt="GitHub" /></button> {/* Fixed alt text and wrapped in button */}
//             </div>

//             <p className="login-link">Already have an account? <a href="/login">Log in</a></p> {/* Added proper href */}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;


import React, { useState } from 'react';
import './Signuppage.css';
import { auth, db } from '../firebaseconfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import arrowIcon from '../../assets/arrowblack.png';
import googleIcon from '../../assets/google.png';
import githubIcon from '../../assets/github.png';

const SignupPage = () => {
  const [usercreds, setusercreds] = useState({
    email: '',
    password: '',
    confirmpassword: '',
    firstname: '',
    lastname: '',
    dob: '',
    gender: '' // Initialize gender as empty string
  });

  // Updated handler for all inputs
  const handlecreds = (e) => {
    const { name, value, type, checked } = e.target;
    
    // For radio buttons, use the value if checked, otherwise keep current value
    const newValue = type === 'radio' ? (checked ? value : usercreds[name]) : value;
    
    setusercreds({
      ...usercreds,
      [name]: newValue
    });
  };

  const handlesignup = async (e) => {
    e.preventDefault();
    
    if (!db) {
      console.error("Firestore not initialized!");
      alert("Database error. Please try again later.");
      return;
    }

    if (usercreds.password !== usercreds.confirmpassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        usercreds.email,
        usercreds.password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        first_name: usercreds.firstname,
        last_name: usercreds.lastname,
        email: usercreds.email,
        dob: usercreds.dob,
        gender: usercreds.gender, // Now properly saved
        createdAt: new Date()
      });

      alert('Account created successfully!');
    } catch (error) {
      console.error("Full error:", error);
      alert(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="sidebar">
          <div className="step-indicator">
            <div className="step active">1. Basic Information</div>
            <div className="step">2. Skills</div>
            <div className="step">3. Preferences</div>
          </div>
        </div>

        <div className="form-container">
          <h2>Create your account</h2>
          <form>
            {/* Other form inputs remain the same */}
            <input onChange={handlecreds} type="email" name='email' required placeholder="Email address" />
            <input onChange={handlecreds} type="password" name='password' required placeholder="Password" />
            <input onChange={handlecreds} type="password" name='confirmpassword' required placeholder="Confirm your Password" />
            <input onChange={handlecreds} type="text" name='firstname' required placeholder="First Name" />
            <input onChange={handlecreds} type="text" name='lastname' required placeholder="Last Name" />
            <input onChange={handlecreds} type="date" name='dob' required placeholder="Date of birth" />

            {/* Updated gender options */}
            <div className="gender-options">
              <p>Enter your gender (Optional):</p>
              <input 
                type="radio" 
                id="male" 
                name="gender" 
                value="Male" 
                onChange={handlecreds}
                checked={usercreds.gender === 'Male'}
              />
              <label htmlFor="male">Male</label>
              <input 
                type="radio" 
                id="female" 
                name="gender" 
                value="Female" 
                onChange={handlecreds}
                checked={usercreds.gender === 'Female'}
              />
              <label htmlFor="female">Female</label>
            </div>

            <button type="button" onClick={handlesignup} className="next-button">
              Next <img src={arrowIcon} alt="arrow" />
            </button>

            <div className="separator">
              <span>Or Signup using</span>
            </div>

            <div className="social-buttons">
              <button type="button" style={{ background:'none', border:'none' }}>
                <img src={googleIcon} alt="Google" />
              </button>
              <button type="button" style={{ background:'none', border:'none' }}>
                <img src={githubIcon} alt="GitHub" />
              </button>
            </div>

            <p className="login-link">Already have an account? <a href="/login">Log in</a></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;