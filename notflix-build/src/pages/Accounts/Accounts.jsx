import React from 'react'
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './account.scss'

const Accounts = () => {

  const {user, logOut} =UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () =>{
    try{
      await logOut();
      navigate('/')
    }catch(error){
      console.log(error)
    }
  } 
  return (
    <div className='accounts'>
      <h1>Your Account</h1>
    <div className="liked__list">
      
      <p>Here's everything you have liked or added to this list to watch later. </p>
      <div className="slider">
      </div>
     
    </div>
    <div className="btn">

      <button className="logout"  onClick={handleLogOut}>Logout</button>
    </div>
    </div>
  )
}

export default Accounts
