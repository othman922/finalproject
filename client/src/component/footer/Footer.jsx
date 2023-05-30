import { NavLink } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

export const Footer = () => {
  const googleMapsLink = `https://goo.gl/maps/UUPQsbFnk8CBGATp7`;

  return (
    <footer>
      <div className="f-item-con">
        <div className="grid-item">
          <span className="app-name">
            <span className="app-initial">W</span>eb-
            <span className="app-initial">W</span>aiters
          </span>

          <ul>
            <li>
              <NavLink className="about-link" to="/about">
                Über uns
              </NavLink>
            </li>
            <li>
              <NavLink className="menu-link" to="/speise">
                Speisekarte
              </NavLink>
            </li>
            <li>
              <NavLink className="events-link" to="/events">
                Events
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="grid-item">
          <div className="footer-title">Öffnungszeiten</div>
          <ul className="hours-list">
            <li>Mo.–So.</li>
            <li>08:00–00:00 Uhr</li>
            <li>
              <p className="last-entry">letzter Einlass um 22:00 Uhr</p>
            </li>
          </ul>
        </div>

        <div className="grid-item">
          <div className="footer-title">Address</div>
          <ul className="address-list">
            <li>
              <NavLink
                className="google-maps-link"
                to={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaMapMarkerAlt />
                </span>{" "}
                Straßer 77 Berlin 1044
              </NavLink>
            </li>
            <li>
              <NavLink
                className="google-maps-link"
                to={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <HiOutlineMailOpen />
                </span>{" "}
                mail@1234567.com
              </NavLink>
            </li>
            <li>
              <NavLink
                className="google-maps-link"
                to={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaMobileAlt />
                </span>{" "}
                +91 90904500112
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="grid-item">
          <div className="footer-title">contact us</div>
          <ul className="social-links-list">
            <li>
              <NavLink className="facebook-link" to="/">
                <FaFacebook className="facebook-icon" />
              </NavLink>{" "}
              Facebook
            </li>
            <li>
              <NavLink
                className="instagram-link"
                to="https://www.instagram.com/aabo_bilal/"
                target="_blank"
              >
                <FaInstagram className="instagram-icon" />
              </NavLink>{" "}
              Instagram
            </li>
            <li>
              {/* Add your Twitter link */}
              <NavLink className="twitter-link" to="/" target="_blank">
                <FaTwitter className="twitter-icon" />
              </NavLink>{" "}
              Twitter
            </li>
          </ul>
        </div>
      </div>
      <div className="cr-cont">
        <p>&copy; 2023 Web-Waiters. All rights reserved.</p>
      </div>
    </footer>
  );
};
