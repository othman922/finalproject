import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";



export const Header = () => {
  const [sideNavigation, setSideNavigation] = useState(true)
  const navigateTo = useNavigate()

  console.log(sideNavigation)
  const handleBurgerMenu = (e, par) => {
    e.preventDefault()
    setSideNavigation(prevNav => !prevNav)
    navigateTo(par)
  }

  return (
    <main id="headerMainContainer">
      <header className={"header"} >


        <div className="menu">


          <div className="container1">

            <NavLink to="/">
              <img src="src/assets/image/logo.png" className="logo" alt="logo" />
            </NavLink>
          </div>
          <div className=" linksToHide menu-ul">
            <ul>

              <li>
                <NavLink className="main-link" to="/speise">

                  Speisen
                </NavLink>
              </li>

              <li>
                <NavLink className="main-link" to="/events">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink className="main-link" to="/ÜberUns" >
                  Über uns
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="container1">
            <NavLink className="linksToHide main-link1" to="/reservationOptions">
              Reservierung
            </NavLink>
          </div>


          <div id="burgerContainer" className="dropdown position-relative">
            <a className="btn btn-secondary fs-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => handleBurgerMenu(e, "#")}>
              <FaBars />
            </a>

            <ul id={sideNavigation ? "mobileNav-ul" : "hideMobileMenu"} className=" dropdown-menu d-flex flex-column align-items-start position-absolute">
              <li>
                <Link className="mobile-link" onClick={(e) => handleBurgerMenu(e, "/reservation")}>

                  Reservieren
                </Link>
              </li>

              <li>
                <Link className="mobile-link" onClick={(e) => handleBurgerMenu(e, "/speise")}>
                  Speisen
                </Link>
              </li>
              <li>
                <Link className="mobile-link" onClick={(e) => handleBurgerMenu(e, "/events")}>
                  Events
                </Link>
              </li>
              <li>
                <Link className="mobile-link" onClick={(e) => handleBurgerMenu(e, "/ÜberUns")}>
                  Über uns
                </Link>
              </li>

            </ul>
          </div>
        </div>



      </header>

    </main>
  );
};
