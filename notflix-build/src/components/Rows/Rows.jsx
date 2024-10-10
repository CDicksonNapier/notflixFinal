import React,{useState, useEffect} from 'react'
import axios from '../../axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './rows.scss';
import MovieModal from '../MovieModal/MovieModal';
function Rows({title, fetchUrl, isLargeRow= false, rowID}) {
  const [movies, setMovies] = useState([]);
  const [modalVisibility,setModalVisibility] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});





  useEffect(() => {
      async function fetchData() {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results);
          return request;
      }
      fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) =>{
      setModalVisibility(true);
      setMovieSelected(movie);
  }

  const slideLeft = () => {
      var slider = document.getElementById('slider' +rowID);
      slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
      var slider = document.getElementById('slider' +rowID );
      slider.scrollLeft = slider.scrollLeft + 500;
      
    };


return (
  <div className='row'>
      
      
    
          <div className="slider">
          
          <h2 className="title">{title}</h2>
          <div className="sliders">
               <MdChevronLeft className="slider-row__left" onClick={slideLeft}/>
              <MdChevronRight className="slider-row__right" onClick={slideRight}/>
          </div>
             
              </div> 
          <div className="slider-row__posters"  id={'slider' + rowID }>
         
          
              
         
           {movies.map((movie) => (
           
              <img
              key={movie.id}
              className={`slider-row__poster ${isLargeRow && 'slider-row__posterLarge'}`}
              src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)} 
              loading='lazy'
             />
     
            
          ))}
       
          
          </div> 
          {modalVisibility && <MovieModal {...movieSelected} setModalVisibility={setModalVisibility} />}
        

 
   
         
      </div>
     
    

)
}

export default Rows