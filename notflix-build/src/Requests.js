const key = process.env.REACT_APP_TMDB_API;

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${key}&with_networks=213`,
    // movies
    fetchTopRated: `/movie/top_rated?api_key=${key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${key}&with_genres=35&page=2`,
    fetchHorrorMovies: `/discover/movie?api_key=${key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${key}&with_genres=99`,
    fetchAnimationMovies: `/discover/movie?api_key=${key}&with_genres=16`,
    fetchFantasyMovies: `/discover/movie?api_key=${key}&with_genres=14`,
    fetchScienceFictionMovies: `/discover/movie?api_key=${key}&with_genres=878`,
    fetchFamilyMovies: `/discover/movie?api_key=${key}&with_genres=10751`,
    fetchAdventureMovies: `/discover/movie?api_key=${key}&with_genres=12`,
    fetchCrimeMovies: `/discover/movie?api_key=${key}&with_genres=80`,
    fetchMysteryMovies: `/discover/movie?api_key=${key}&with_genres=9648`,
    fetchWarMovies: `/discover/movie?api_key=${key}&with_genres=10752`,
    fetchThrillerMovies: `/discover/movie?api_key=${key}&with_genres=53`,
    fetchHistoryMovies: `/discover/movie?api_key=${key}&with_genres=36`,
    fetchMusicMovies: `/discover/movie?api_key=${key}&with_genres=10402`,
    fetchWesternMovies: `/discover/movie?api_key=${key}&with_genres=37`,
    fetchTVMovies: `/discover/movie?api_key=${key}&with_genres=10770`,
    
    // tv shows
    fetchTopRatedTV: `/tv/top_rated?api_key=${key}&language=en-US`,
    fetchActionTV: `/discover/tv?api_key=${key}&with_genres=10759`,
    fetchComedyTV: `/discover/tv?api_key=${key}&with_genres=35`,
    fetchAnimation: `/discover/tv?api_key=${key}&with_genres=16`,
    fetchDocumentaryTV: `/discover/tv?api_key=${key}&with_genres=99`,
    fetchFamilyTV: `/discover/tv?api_key=${key}&with_genres=10751`,
    fetchKidsTV: `/discover/tv?api_key=${key}&with_genres=10762`,
    fetchMysteryTV: `/discover/tv?api_key=${key}&with_genres=9648`,
    fetchNewsTV: `/discover/tv?api_key=${key}&with_genres=10763`,
    fetchRealityTV: `/discover/tv?api_key=${key}&with_genres=10764`,
    fetchSciFiTV: `/discover/tv?api_key=${key}&with_genres=10765`,
    fetchSoapTV: `/discover/tv?api_key=${key}&with_genres=10766`,
    fetchTalkTV: `/discover/tv?api_key=${key}&with_genres=10767`,
    fetchWarTV: `/discover/tv?api_key=${key}&with_genres=10768`,
    fetchWesternTV: `/discover/tv?api_key=${key}&with_genres=37`,
    
    
}

export default requests;
