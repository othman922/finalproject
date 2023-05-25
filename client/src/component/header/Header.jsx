import "./Header.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/image/1.jpg";
// import { FaCalendarAlt } from "react-icons/fa";
export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="" />
      </div>
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
  );
};