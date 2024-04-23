import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Layout from '../Login/Layout';

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError("Incorrect Password");
      return;
    }

    setIsLoggedIn(true);
    setError("");
  };

  return (
    <Layout>
      <div className="Log-in">
          <div >
            <label style={{fontSize:"3rem"}}><b>Login Form</b></label>
            <div>
              {isLoggedIn ? (
                <div>
                  <p>Login Successful!</p>
                </div>
              ) : (
                <form action="" onSubmit={submitForm}><br />
                 <br /> <br /><div className="input-box">
                 <br /> <MdEmail  className="icon" style={{fontSize:"2rem"}}/> <label htmlFor="email" style={{fontSize:"2rem"}}><b>Email</b></label>
                 <br /><input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      style={{padding:"1rem"}}
                    />
                  </div>
                  <br /><div className="input-box">
                  <br /> <FaLock className="icon" style={{fontSize:"2rem"}}/> <label htmlFor="password" style={{fontSize:"2rem"}}><b>Password</b></label><br />
                  <br /><input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      style={{padding:"1rem"}}
                    />
                  </div>
                  
                  {error && <p style={{ color: "cyan" , fontSize:"1rem"}}>{error}</p>}
                  <br /> <button type="submit"><b>Login</b></button>
                </form>
              )}
            </div>
          </div>
          
          {!isLoggedIn && (
            <div className="register-link" style={{fontSize:"2rem"}}>
              <br />Don't have an account? <Link to="/registrationform" style={{color:"#fff"}}>Register</Link>
            </div>
          )}
        </div>
    </Layout>
  );
};

export default BasicForm;
