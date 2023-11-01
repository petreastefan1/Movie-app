
import './App.css';
import {useEffect} from "react";
import {getMovies} from "./Api";
import Header from "./Components/Header"


function App() {


    useEffect(() => {

        getMovies().then(data => {

            return data.json();
        }).then(data=>{

            console.log(data);
        })
    }, []);


    return(
        <>
            <Header/>
        </>



    )

}




export default App;
