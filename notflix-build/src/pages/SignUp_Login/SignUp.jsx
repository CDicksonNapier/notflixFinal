import React, { useState } from 'react'
import './reg_login.scss' 
import {  useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { toast } from 'react-toastify';
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {  user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
     navigate('/')
    } catch (error) {
      console.log(error);
      navigate('/signUp')
      toast.error(error.message)
    }
  };

  return (
    <>
    <div className="register">
    <div className="register__background">
      <div className="register__content">
        <h1>With 1000's of hours of content. </h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <h3>Ready to watch? Enter your email to start your membership.</h3>
        <div className="register__form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              
               autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
               autoComplete="password"
             
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="btn">
              <button type="submit">Sign Up</button>
            </div>
            
           
            <h4>
              <span className="signupScreen__gray">Already on Notflix?</span>
              <span className="signupScreen__link">
                <a href="/login"> Login Now!</a>
              </span>
            </h4>
            <p>
              By clicking the <strong>"Sign Up"</strong> button below, you agree
              to our Terms of Use and Privacy Policy.
            </p>
          </form>
        </div>
      </div>

      <div className="register__gradient"></div>
      </div>
      </div>
    </>
  );
}

export default SignUp
