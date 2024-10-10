import React from 'react'
import Banner from '../../components/Banner/banner'
import Rows from '../../components/Rows/Rows'
import requests from '../../Requests'

const HomeScreen = () => {
  return (
    
    <div className='homeScreen'>
        <Banner />
        <Rows rowID='1' title ='Top Rated Movies'
        fetchUrl = {requests.fetchTrending}
        isLargeRow = {true}
        />
        <Rows rowID='2' title ='Top Rated'
        fetchUrl = {requests.fetchTopRated}
        />
        <Rows rowID='3' title ='Trending TV'
        fetchUrl = {requests.fetchTopRatedTV}
        />
        <Rows rowID='4' title ='Comedies'
        fetchUrl = {requests.fetchComedyMovies}
        />
        <Rows rowID='5' title ='Horrors'
        fetchUrl = {requests.fetchHorrorMovies}
        />
        <Rows rowID='6' title ='For the Family'
        fetchUrl = {requests.fetchFamilyTV}
        />
        <Rows rowID='7' title ='Mystery'
        fetchUrl = {requests.fetchMysteryTV}
        />
        <Rows rowID='8' title ='Fantasy'
        fetchUrl = {requests.fetchFantasyMovies}
        />
        <Rows rowID='9' title ='Animated'
        fetchUrl = {requests.fetchAnimation}
        />
    </div>
    
    

  )
}

export default HomeScreen
