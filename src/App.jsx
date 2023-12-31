import './App.css';
import {useEffect} from "react";
import {getMovies, getImagesMovie} from "./Api";
import Header from "./Components/Header"
import Main from "./Components/Main"
import SecondPage from "./Components/SecondPage";
import MovieCard from "./Components/MovieCard"
import {useState} from "react";

function App() {

    const [movies, setMovies] = useState([]);
    const baseImgUrl = "https://image.tmdb.org/t/p/original/";
    const [browseMovies, setBrowseMovies] = useState(false)
    const [searchedMovies,setSearchedMovies] = useState([])

    const handleMovies =async () => {


        let response = await  getMovies();

        let data= await  response.json();
        setMovies(data.results);


    }

    useEffect(() => {
        handleMovies();
    }, []);


    return (
        <>
            {
                browseMovies == false && (
                    <>
                        <Header movies = {movies} searchedMovies={setSearchedMovies} mainPage={setBrowseMovies}/>
                        <Main baseImgUrl={baseImgUrl} movies={movies} setBrowseMovies={setBrowseMovies}/>
                    </>

                )
            }

            {
                browseMovies == true && (
                    <>
                        <Header movies = {movies} searchedMovies={setSearchedMovies} mainPage={setBrowseMovies}/>
                        <SecondPage searchedMovies={searchedMovies} movies={movies}/>


                    </>

                )}

        </>


    )

}


export default App;
