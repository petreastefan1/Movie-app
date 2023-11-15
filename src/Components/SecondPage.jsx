import MovieCard from "./MovieCard";


function SecondPage({movies, searchedMovies}) {


    return (
        <>
            <h1 className="browse-movies-page-title">Watch New Movie & TV Trailers</h1>
            <main className="second-page-main-container">
                {
                    searchedMovies.length == 0 && (
                        movies.map(movie => {
                            return <MovieCard key={movie.id} imageSource={movie}/>
                        })
                    )
                }

                {
                    searchedMovies.length > 0 && (
                        searchedMovies.map(searchedMovie => {

                            return <MovieCard key={searchedMovie.id} imageSource={searchedMovie}/>
                        })
                        )

                }


            </main>


        </>

    )

}


export default SecondPage