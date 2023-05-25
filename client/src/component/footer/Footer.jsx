import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaInstagram , FaTwitter,FaMapMarkerAlt} from "react-icons/fa";

export const Footer = () => {
  const googleMapsLink = `https://goo.gl/maps/UUPQsbFnk8CBGATp7`;

  return (
    <footer className="Footer">
      <div className="myFooter">
        <div className="flex ">
          <div>
            <ul>
              <h3 className="location"> <p><FaMapMarkerAlt /></p> Standort</h3>
              <li>
                <NavLink
                  to={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Singerstr.77 <br />
                  10243 berlin
                </NavLink>
              </li>
            </ul>
          </div>

          
          <div>
            <ul className="opening-hours">
              <h3>Öffnungszeiten</h3>
              <p>
                {" "}
                Mo.−Di. geschlossen <br />
                Mi.–So. 17:00–00:00 Uhr
              </p>

             
            </ul>
          </div>
        </div>
      </div>

      {/* 
        */}
      <div className="footer-end">
      <ul className="flex1">
          <div className="social-icons">
            <NavLink to="/">
              <FaFacebook />
            </NavLink>
            <NavLink to="https://www.instagram.com/aabo_bilal/" target="_blank">
              <FaInstagram />
            </NavLink>
            <NavLink to="/">
              <FaTwitter />
            </NavLink>
           
          </div>
        </ul> 
      </div>
      <div className="footer-end">
       
      </div>
    </footer>
  );
};
