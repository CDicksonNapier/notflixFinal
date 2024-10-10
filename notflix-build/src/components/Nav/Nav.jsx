import React, { useEffect, useState } from "react";
import "./nav.scss";
import LOGO from "../../assets/images/notflix-logo.png";
import Avatar from "../../assets/images/profile-icon-3.png";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
const Nav = () => {
  
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  
  const {user} = UserAuth();

 
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <NavLink to={"/"} className="nav__logo">
          <img src={LOGO} alt="" />
        </NavLink>
        {!user?.email?(
          <div className="nav__items_hidden" >
          <NavLink to={"/movie"} className="nav__item">
            Movies
          </NavLink>
          <NavLink to={"/tvShows"} className="nav__item">
            Shows
          </NavLink>
        </div>
        ):(
          <div className="nav__items">
          <NavLink to={"/movie"} className="nav__item">
            Movies
          </NavLink>
          <NavLink to={"/tvShows"} className="nav__item">
            Shows
          </NavLink>
        </div>
        )}
        
        <>
      {!user?.email?(
        <NavLink to={"/signUp"} className="nav__signIn">
        Sign Up
       </NavLink>
        
      ):(
        <NavLink to={"/accounts"} className="nav__avatar">
        <img src={Avatar} alt="icon" />
       </NavLink>
      )}
       
        </>
             
           
      </div>
    </nav>
  );
};

export default Nav;
