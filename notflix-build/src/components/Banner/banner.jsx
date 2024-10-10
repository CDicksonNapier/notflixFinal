import React,{useState, useEffect} from 'react'
import './banner.scss'
import axios from '../../axios'
import requests from '../../Requests'
import { CiHeart, CiPlay1  } from "react-icons/ci";


const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchTopRated)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData();
    }, [])
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }
  return (
  
   <header className='banner' style={
    {
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center' 
    }
   }>
    <div className="banner__contents">
        <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
            <button className="banner__button-play"><CiPlay1 className='icon'/>Play</button>
            <button className="banner__button-fav"><CiHeart className='icon'/>My List</button>
        </div>
        <h2 className="banner__description">{truncate (movie?.overview, 150)}</h2>
    </div>
    <div className="banner--fadeBottom"></div>

   </header>
   
  )
}

export default Banner