import React from 'react'
import BannerTv from '../../components/Banner/BannerTv'
import Nav from '../../components/Nav/Nav'
import Rows from '../../components/Rows/Rows'
import requests from '../../Requests'


const TvShows = () => {
  return (
    <div className='tvShows'>
      <Nav />
        <BannerTv />
        <Rows rowID='1' title ='Top Rated TV Shows'
          fetchUrl = {requests.fetchTopRatedTV}
          
          />
        <Rows rowID='2' title ='Action Packed'
          fetchUrl = {requests.fetchActionTV}
          
          />
        
        <Rows rowID='3' title ='Top Laughs'
          fetchUrl = {requests.fetchComedyTV}
          
          />
          <Rows rowID='4' title ='Animations'
          fetchUrl = {requests.fetchAnimation}
          
          />
        <Rows rowID='5' title ='Documentaries'
          fetchUrl = {requests.fetchDocumentaryTV}
          
          />
        <Rows rowID='6' title ='Family Friendly'
          fetchUrl = {requests.fetchFamilyTV}
          
          />
        <Rows rowID='7' title ='Scifi'
          fetchUrl = {requests.fetchSciFiTV}
          
          />
        <Rows rowID='8' title ='Mystery'
          fetchUrl = {requests.fetchMysteryTV}
          
          />
        <Rows rowID='9' title ='War'
          fetchUrl = {requests.fetchWarTV}
          
          />
</div>
  )
}

export default TvShows