import "./Header.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/image/1.jpg";
import { FaCalendarAlt } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="df">
      <div className="reservation">
        <NavLink className="reservation-1">
          <FaCalendarAlt className="icon-1" /> Resevierung Sie bei uns
        </NavLink>
        <span> Besuch nur mit Reservierung möglich!</span>
      </div>
      <div className="logo">
        <img src={logoImage} alt="" />
      </div>
      <header className="header">
        <div className="menu">
          <ul>
            <li>
              <NavLink className="main-link" to="/about">
                Über uns
              </NavLink>
            </li>
            <li>
              <NavLink className="main-link" to="/about">
                Speisekarte
              </NavLink>
            </li>
            <li>
              <NavLink className="main-link" to="/about">
                Reservierung
              </NavLink>
            </li>
            <li>
              <NavLink className="main-link" to="/about">
                Evevnts
              </NavLink>
            </li>
            <li>
              <NavLink className="main-link" to="/about">
                Informat
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
