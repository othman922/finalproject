import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    
      <footer className="myFooter">
        <ul className="flex">
          <div className="social-icons">
            <NavLink to="/">
              <FaFacebook />
            </NavLink>
            <NavLink to="/">
              <FaInstagram />{" "}
            </NavLink>
            <div className="additional-text">
          <p>&copy; 2023 Your ........ All rights reserved.</p>
          
        </div>
          </div>
        </ul> 
       
      </footer>
    
  );
};
