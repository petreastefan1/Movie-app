import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'


function Header() {

    return (
        <>

             <header className="header-container">
                 <div className="nav-bar">
                     <p className="logo-container">IMDb</p>
                     <div className="menu-container">
                         <button className="menu-btn menu-dropdown"><i className="fa-solid fa-bars"></i>Menu</button>
                     </div>

                         <form>
                             <label id="search-bar-label" htmlFor="search-bar">All <i className="fa-solid fa-arrow-down"></i></label>
                             <input type="text" id="search-bar" placeholder="Search IMDb" />
                             <i className="fa-solid fa-magnifying-glass"></i>

                         </form>


                     <button className="subscription-btn">
                         <p className="subscription-text">IMDb<p>Pro</p></p>
                     </button>
                     <div className="separator"></div>

                     <button className="menu-btn menu-size"><i className="fa-regular fa-bookmark"></i>Watchlist</button>

                     <a className="sign-in-btn" href="#" >Sign In</a>



                 </div>

             </header>

        </>
    )


}

export default Header