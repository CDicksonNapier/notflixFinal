import React from 'react'
import './movieScreen.scss'
import Nav from '../../components/Nav/Nav'
import Rows from '../../components/Rows/Rows'
import requests from '../../Requests'
import Banner from '../../components/Banner/banner'


const MovieScreen = () => {
  return (
   <>
   
    <div className='movieScreen'>
    
      <Banner />
     
       <Rows rowID='1' title ='Top Rated Movies'
        fetchUrl = {requests.fetchTopRated}
        
        />
       <Rows rowID='2' title ='Comedies'
        fetchUrl = {requests.fetchComedyMovies}
        
        />
       <Rows rowID='3' title ='Animations'
        fetchUrl = {requests.fetchAnimationMovies}
        
        />
       <Rows rowID='4' title ='Top Scares'
        fetchUrl = {requests.fetchHorrorMovies}
        
        />
       <Rows rowID='5' title ='Romance'
        fetchUrl = {requests.fetchRomanceMovies}
        
        />
       <Rows rowID='6' title ='Scifi Epics'
        fetchUrl = {requests.fetchScienceFictionMovies}
        
        />
       <Rows rowID='7' title ='Family friendly'
        fetchUrl = {requests.fetchFamilyMovies}
        
        />
       <Rows rowID='8' title ='Thrillers'
        fetchUrl = {requests.fetchThrillerMovies}
        
        />
       <Rows rowID='9' title ='Mystery'
        fetchUrl = {requests.fetchMysteryMovies}
        
        />
       <Rows rowID='10' title ='Fantasy'
        fetchUrl = {requests.fetchFantasyMovies}
        
        />
       
    </div>
   
   </>
   
  
  )
}

export default MovieScreen