import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
export const Header = () => {
  return (
    <header className="header">


      <div className="menu">


        <div className="container1">


          <NavLink className="main-link1" to="/">
            Web Waiters
          </NavLink>
        </div>
        <div className="menu-ul">
          <ul>
            <li>
              <NavLink className="main-link" to="/about">
                Über uns
              </NavLink>
            </li>
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
              <NavLink className="main-link" to="/about">
                Informationen
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="container1">
          <NavLink className="main-link1" to="/about">
            {/* <span className="social-icons">
              <FaRegCalendarAlt />
            </span>{" "} */}
            Reservierung
          </NavLink>
        </div>


      </div>


    </header>
  );
};
