import MovieCard from "./MovieCard";


function SecondPage({movies}){







    return(
<>
    <h1 className="browse-movies-page-title">Watch New Movie & TV Trailers</h1>
    <main className="second-page-main-container">
        {
            movies.map(movie=>{
                return <MovieCard key={movie.id} imageSource={movie}/>
            })
        }
    </main>


</>

    )

}


export default SecondPage