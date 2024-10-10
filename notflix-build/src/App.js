
import './App.css';
import {Route, Routes } from 'react-router-dom'

import Nav from './components/Nav/Nav';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import SignUp from './pages/SignUp_Login/SignUp';
import Login from './pages/SignUp_Login/Login';

import  {AuthContextProvider}  from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Accounts from './pages/Accounts/Accounts';
import MovieScreen from './pages/MovieScreen/MovieScreen';
import TvShows from './pages/TvShows/TvShows';


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  // console.log(process.env.REACT_APP_TMDB_API)
  return (
    <>
   
       <AuthContextProvider >
      
    <Nav />
    <Routes>
     
      <Route index path='/' element={<HomeScreen />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/accounts' element={<ProtectedRoute><Accounts /></ProtectedRoute>} />
      <Route path='/movie' element={<MovieScreen />} />
      <Route path='/tvShows' element={<TvShows />} />
     
      
     </Routes>
     <ToastContainer />
     </AuthContextProvider >
    
  
   
    </>
   
  );
}

export default App;
