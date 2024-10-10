import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',

});

export default instance;



// https://api.themoviedb.org/3/trending/all/week?api_key=0d0fb663ed4a70910c357d8e47bd0c4d&language=en-US