const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzU3ZmFhNzljOGMwYjc5NzExMTAzN2MyZDIxNjY3NCIsInN1YiI6IjY1Mzk0ZWNhOGEwZTliMDBlYWZhZDNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mc0RXjL8fWXUfl70jzFbXkUiaFYEEsmjvVvxkoP0gkg'
    }
};
const endPointAllMovies = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';



export  let getMovies = async ()=>{
    let response = await fetch(endPointAllMovies,options)
    return response;
}


export let getRatedTvEpisodes = async ()=>{
    let response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options)
    return response
}
