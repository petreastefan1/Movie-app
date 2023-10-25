
import './App.css';
import {useEffect} from "react";
import {getMovies} from "./Api";

function App() {


    useEffect(() => {

        getMovies().then(data => {

           return data.json();
        }).then(data=>{

            console.log(data);
        })
    }, []);

}



export default App;
