import { NavLink } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaMobileAlt
} from "react-icons/fa";
import { HiOutlineMailOpen } from 'react-icons/hi';

export const Footer = () => {
  const googleMapsLink = `https://goo.gl/maps/UUPQsbFnk8CBGATp7`;

  return (
    <footer>
      <div className="f-item-con">
        <div className="app-info">
          <span className="app-name">
            <span className="app-initial">W</span>eb-
            <span className="app-initial">W</span>aiters
          </span>
          
          <ul>
            <li>Uber uns</li>
            <li>Speisekarte</li>
            <li>Events</li>
          </ul>
          {/* <p>
              
             Lorem <strong>consectetur</strong> and{" "}
            <strong>adipisicing elit.</strong> Nisi, repudiandae..
          </p> */}
        </div>
       

        <div className="g-i-t">
          <div className="footer-title">Öffnungszeiten</div>
          <ul>
            <li> Mo.–So.</li>
            <li>17:00–00:00 Uhr</li>
            <li><h6>
            letzter Einlass um 22:00 Uhr</h6></li>
          </ul>
        </div>
        <div>
        <div className="g-i-t">
        <div className="footer-title">Address</div>
          <ul>
            <li> <NavLink  to={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer" >
              <span><FaMapMarkerAlt /></span> Straßer 77 Berlin 1044

            </NavLink>
            </li>
            <li> <NavLink  to={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer" >
              <span><HiOutlineMailOpen /></span> mail@1234567.com

            </NavLink>
            </li>
            <li> <NavLink  to={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer" >
              <span><FaMobileAlt /></span>  +91 90904500112

            </NavLink>
            </li>
          </ul>
        </div>
        
        </div>
        <div className="useful-links">
          <div className="footer-title">contact us</div>
          <ul>
          {/* <ul className="flex1">
            <div className="social-icons">
              <NavLink to="/">
                <FaFacebook className="facebook" />
              </NavLink>
              <NavLink
                to="https://www.instagram.com/aabo_bilal/"
                target="_blank"
              >
                <FaInstagram className="instgram" />
              </NavLink>
              <NavLink to="/">
                <FaTwitter />
              </NavLink>
            </div>
          </ul> */}
            <li> <NavLink to="/">
                <FaFacebook className="facebook" />
              </NavLink> Facebook</li>
            <li><NavLink
                to="https://www.instagram.com/aabo_bilal/"
                target="_blank"
              >
                <FaInstagram className="instgram" />
              </NavLink>{" "}Sign In</li>
            <li>  <NavLink to="/">
                <FaTwitter className="twitter"/>
              </NavLink>About Us</li>
          </ul>
        </div>
      </div> 
      
      <div className="cr-con">Copyright &copy; 2023 | Made by DCI</div>
    </footer>
  );
};
