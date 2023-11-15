import 'bootstrap/dist/css/bootstrap.min.css'
import {useRef} from "react";

function Header({mainPage, searchedMovies, movies}) {

    const search = useRef()

    const handleLogo = () => {

        //to return to first page, main page needs to be false to rework
        mainPage(false)
    }

    const handleSearch = () => {

        let aux = []


        movies.map(movie => {

            if(movie.original_title.toLowerCase().trim().includes(search.current.value.toLowerCase().trim())){
                aux.push(movie)
            }
        })

        if(aux.length>0){
            searchedMovies(aux)
        }
        if(aux.length<0){
            searchedMovies([])
        }

    }
    return (
        <>

            <header className="header-container">
                <div className="nav-bar">
                    <p onClick={handleLogo} className="logo-container">IMDb</p>
                    <div className="menu-container">
                        <button className="menu-btn menu-dropdown"><i className="fa-solid fa-bars"></i>Menu</button>
                    </div>

                    <form>
                        <label id="search-bar-label" htmlFor="search-bar">All <i className="fa-solid fa-arrow-down"></i></label>
                        <input ref={search} type="text" id="search-bar" placeholder="Search IMDb"/>
                        <i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>

                    </form>


                    <button className="subscription-btn">
                        <p className="subscription-text">IMDb<span>Pro</span></p>
                    </button>
                    <div className="separator"></div>

                    <button className="menu-btn menu-size"><i className="fa-regular fa-bookmark"></i>Watchlist</button>

                    <a className="sign-in-btn" href="#">Sign In</a>


                </div>

            </header>


        </>
    )


}

export default Header