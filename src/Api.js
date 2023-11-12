const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzU3ZmFhNzljOGMwYjc5NzExMTAzN2MyZDIxNjY3NCIsInN1YiI6IjY1Mzk0ZWNhOGEwZTliMDBlYWZhZDNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mc0RXjL8fWXUfl70jzFbXkUiaFYEEsmjvVvxkoP0gkg'
    }
};
const endPointAllMovies = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';



export  function  getMovies(){
    return fetch(endPointAllMovies,options);
}

export function  getImagesMovie(movie_id){
    return fetch(`https://api.themoviedb.org/3/movie/${movie_id}/images`, options)
        .then(response => response.json());
}

export function getRatedTvEpisodes(){
    return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options)
}
