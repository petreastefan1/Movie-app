import './App.css';
import {useEffect} from "react";
import {getMovies, getImagesMovie} from "./Api";
import Header from "./Components/Header"
import Main from "./Components/Main"
import {useState} from "react";

function App() {

    const [movies, setMovies] = useState([]);
    const baseImgUrl = "https://image.tmdb.org/t/p/original/";

    const handleMovies = () => {

        getMovies().then(data => {
            return data.json();
        }).then(data => {

            setMovies(data.results);
        })

    }


    useEffect(() => {
        handleMovies();
    }, []);


    return (
        <>
            <Header/>
            <Main baseImgUrl={baseImgUrl} movies={movies}/>


            {/*{*/}
            {/*   movies.length>0&&(*/}

            {/*        movies.map(movie=>{*/}

            {/*             return <img src={`${baseImgUrl}/${movie.poster_path}`}  />*/}
            {/*        })*/}
            {/*    )*/}

            {/*}*/}


        </>


    )

}


export default App;
