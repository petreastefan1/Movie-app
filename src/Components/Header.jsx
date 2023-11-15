import 'bootstrap/dist/css/bootstrap.min.css'


function Header({mainPage}) {

    const handleLogo =()=>{

        //to return to first page, main page needs to be false to rework
            mainPage(false)




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
                        <input type="text" id="search-bar" placeholder="Search IMDb"/>
                        <i className="fa-solid fa-magnifying-glass"></i>

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