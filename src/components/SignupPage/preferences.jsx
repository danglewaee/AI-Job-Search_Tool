/* 















UIUX NEEDS TO BE UPDATED














*/


import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Signuppage.css";
import { auth, db } from "../firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import arrowIcon from "../../assets/arrowblack.png";
import googleIcon from "../../assets/google.png";
import githubIcon from "../../assets/github.png";
import { useNavigate } from "react-router-dom";

const SignupPagePreferences = () => {
  const [usercreds, setusercreds] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
  });

  // NEW: Create userPrefs state
  const [userPrefs, setUserPrefs] = useState({
    csField: "",
    proficiency: "",
    skills: "",
    role: "",
    courseType: "",
    others: "",
  });

  const navigate = useNavigate();

  const handleCredsChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "radio" ? (checked ? value : usercreds[name]) : value;

    setusercreds({
      ...usercreds,
      [name]: newValue,
    });
  };

  const handlePrefsChange = (e) => {
    const { name, value } = e.target;

    setUserPrefs({
      ...userPrefs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
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
        gender: usercreds.gender,
        preferences: userPrefs, // Save preferences too!
        createdAt: new Date(),
      });

      navigate("/forgot-password");
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
            <div className="step">1. Basic Information</div>
            <div className="step active">2. Preferences</div>
          </div>
        </div>

        <div className="form-container">
          <h2>Set your Preferences</h2>
          <form onSubmit={handleSubmit}>
            <select
              name="csField"
              required
              onChange={handlePrefsChange}
              value={userPrefs.csField}
            >
              <option value="">Select your CS Field of Interest</option>
              <option value="swe">Software Engineering</option>
              <option value="ml/ai">ML/AI</option>
              <option value="web">Web Development</option>
              <option value="cybersec">Cybersecurity</option>
              <option value="ds">Data Science</option>
              <option value="game">Game Development</option>
              <option value="mobile">Mobile Development</option>
            </select>

            <select
              name="proficiency"
              required
              onChange={handlePrefsChange}
              value={userPrefs.proficiency}
            >
              <option value="">Rate your Proficiency</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            <select
              name="skills"
              required
              onChange={handlePrefsChange}
              value={userPrefs.skills}
            >
              <option value="">Select your Primary Skill</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="c++">C++</option>
              <option value="javascript">JavaScript</option>
              <option value="html-css">HTML/CSS</option>
              <option value="react">React</option>
              <option value="node">Node.js</option>
            </select>

            <select
              name="role"
              required
              onChange={handlePrefsChange}
              value={userPrefs.role}
            >
              <option value="">Desired Role</option>
              <option value="internship">Internship</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
            </select>

            <select
              name="courseType"
              required
              onChange={handlePrefsChange}
              value={userPrefs.courseType}
            >
              <option value="">Preferred Course Type</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
              <option value="both">Both</option>
            </select>

            <input
              type="text"
              name="others"
              placeholder="Any other preferences (optional)"
              onChange={handlePrefsChange}
              value={userPrefs.others}
            />

            <button type="submit" className="next-button">
              Submit <img src={arrowIcon} alt="arrow" />
            </button>

            <div className="separator">
              <span>Or Continue using</span>
            </div>

            <div className="social-buttons">
              <button type="button" style={{ background: "none", border: "none" }}>
                <img src={googleIcon} alt="Google" />
              </button>
              <button type="button" style={{ background: "none", border: "none" }}>
                <img src={githubIcon} alt="GitHub" />
              </button>
            </div>

            <p className="login-link">
              Already have an account? <Link to="/">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPagePreferences;
