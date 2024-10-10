import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserAuth } from "../../context/AuthContext";
// import {signInAnonymously, getAuth } from 'firebase/auth'
import {toast} from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //error state
  const [error, setError] = useState("");
  const {  logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(" ");
    try {
      await logIn(email, password);
      navigate("/"); // will help navigate to homepage
    } catch (error) {
      console.log(error);
      setError(error.message);
      toast.error(error.message)
    }
  };
  
  return (
    <div className="register">
      <div className="register__background">
        <div className="login__content">
          <h2>Login</h2>
          <div className="register__form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="btn">
                <button type="submit">Login</button>
              </div>
              
              {error ? <p className="error"> {error}</p> : null}
              <h4>
                <span className="signupScreen__gray">Not on Notflix?</span>
                <span className="signupScreen__link">
                  {" "}
                  <a href="/signUp">Sign up now!</a>
                </span>
              </h4>
              
             
            </form>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
