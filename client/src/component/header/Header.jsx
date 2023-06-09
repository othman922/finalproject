import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export const Header = () => {
  const [sideNavigation, setSideNavigation] = useState(true)
  const [white, setWhite] = useState(true)

  console.log(sideNavigation)
  const handleBurgerMenu = (e) => {
    e.preventDefault()
    setWhite(prevWhite => !prevWhite)
    setSideNavigation(prevNav => !prevNav)
  }

  return (
    <main>
      <header className={"header"} >


        <div className="menu">


          <div className="container1">


            <NavLink className="main-link1" to="/">
              LOGO
            </NavLink>
          </div>
          <div className=" linksToHide menu-ul">
            <ul>

              <li>
                <NavLink className="main-link" to="/speise">

                  Speisekarte
                </NavLink>
              </li>

              <li>
                <NavLink className="main-link" to="/events">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink className="main-link" to="/ÜberUns">
                  Über uns
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="container1">
            <NavLink className="linksToHide main-link1" to="/reservation">

              Reservierung
            </NavLink>
          </div>


          <div id="burgerContainer" className="dropdown position-relative">
            <a className="btn btn-secondary fs-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => handleBurgerMenu(e)}>
              <FaBars />
            </a>

            <ul id={sideNavigation ? "mobileNav-ul" : "hideMobileMenu"} className=" dropdown-menu d-flex flex-column align-items-start position-absolute">
              <li>
                <NavLink className="mobile-link" to="/reservation">

                  Reservieren
                </NavLink>
              </li>

              <li> <NavLink className="mobile-link" to="/speise">

                Speisekarte
              </NavLink>
              </li>
              <li> <NavLink className="mobile-link" to="/events">
                Events
              </NavLink></li>
              <li>
                <NavLink className="mobile-link" to="/ÜberUns">
                  Über uns
                </NavLink>
              </li>

            </ul>
          </div>
        </div>



      </header>

    </main>
  );
};
