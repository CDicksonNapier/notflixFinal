import React, { useState } from "react";
import "./movieModal.scss";
import { FaPlay } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { db } from "../../firebase/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalVisibility,
  id,
}) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const randomPercentage = () => {
    return Math.floor(Math.random() * 100);
  };

  // const movieID = doc(db, "users", `${user?.email}`);
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);

  const { user } = UserAuth();
  return (
   
    
      <div className="presentation" role="presentation">
      
      <div className="wrapper__modal">
     {user?.email?(
        <div className="modal">
       
          <span
            onClick={() => setModalVisibility(false)}
            className="modal__close"
          >
            <MdCancel className="icon" />
          </span>
          <img
            src={`${base_url}${backdrop_path}`}
            alt=""
            className="modal__poster-img"
          />
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user-perc">
                {randomPercentage()}% for you
              </span>{" "}
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview">{overview}</p>
            <p className="modal__overview-vote">Vote Average: {vote_average}</p>
            <div className="button__holder">
              <FaPlay className="icon__btn" />
              <p></p>
            </div>
          </div>
           
        </div>
      
      ):(
        <div className="modal">
           <div className="modal__content_signup">
            
            <span
            onClick={() => setModalVisibility(false)}
            className="modal__signup-close"
          >
            <MdCancel className="icon" />
          </span>
            <h2 className="modal__signup-title">You need to Sign up or Login to view this content</h2>
           <p>Users will be able to see all the information on the movies or shows they select, watch trailers and even add to a watch list.</p>
            <p>Creating an account is free and can be cancelled at anytime.</p>
            <div className="button__holder">
            <NavLink to={"/SignUp"} className="signIn">
            Sign Up
           </NavLink>
              
         
            </div>
          </div>
        </div>
       
           
      
           )}
      </div>
    </div>
    
   
  );
};

export default MovieModal;
