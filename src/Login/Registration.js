import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";
import { FaUser , FaMobileAlt} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Layout from '../Login/Layout';

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Mobile validation
    if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Password validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // If all validations pass, display success message
    setSuccessMessage("Registration successful!");
    setError(""); // Clear any previous error message
  };

  return (
   
    <Layout>
        <div className="Log-in"> 
          <label style={{fontSize:"3rem"}}><b>Registration Form</b></label>
          
          <div >
            <form onSubmit={handleSubmit}>
            <br /> <br /><div className="input-box">
              <FaUser className="icon" style={{fontSize:"2rem"}}/> <label htmlFor="name" style={{fontSize:"2rem"}}><b>Name</b></label> <br />
                <br /><input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}  style={{padding:"1rem"}} />
              </div>
              <br /> <br /><div className="input-box">
              <MdEmail  className="icon" style={{fontSize:"2rem"}}/> <label htmlFor="email" style={{fontSize:"2rem"}}><b>Email</b></label> <br />
              <br /><input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  style={{padding:"1rem"}}/>
              </div>
              <br /><br /><div className="input-box">
              <FaMobileAlt className="icon" style={{fontSize:"2rem"}}/> <label htmlFor="mobile" style={{fontSize:"2rem"}}><b>Mobile</b></label> <br />
              <br /> <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}  style={{padding:"1rem"}}/>
              </div>
              <br /><br /><div className="input-box">
              <RiLockPasswordFill className="icon" style={{fontSize:"2rem"}}/ > <label htmlFor="password" style={{fontSize:"2rem"}}><b>Password</b></label> <br />
              <br /><input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  style={{padding:"1rem"}}/>
              </div>
              <br /> <br /> <div className="input-box">
              <RiLockPasswordFill className="icon" style={{fontSize:"2rem"}}/> <label htmlFor="confirmPassword" style={{fontSize:"2rem"}}><b>Confirm Password</b></label> <br />
                <br /><input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  style={{padding:"1rem"}} />
              </div>
              <br />
              {error && <p style={{ color: "cyan" , fontSize:"1rem"}}>{error}</p>}
              {successMessage && <p style={{ color: "cyan", fontSize:"1rem"}}>{successMessage}</p>}
              
              <br /><button type="submit"><b>Register</b></button>
            </form>
          </div>
          <br/>
          
            <div style={{padding:"10px", fontSize:"2rem"}}>
            <br /> Already have an account? <Link to="/login" style={{color:"#fff"}}>Login</Link> 
            </div>
          
        </div>
      
        </Layout>
   
  );
};

export default RegistrationForm;
