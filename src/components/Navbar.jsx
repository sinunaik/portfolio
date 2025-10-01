import "./Navbar.css"; 
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {"Logo.png"}
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><Link to="/resume" className="nav-links-link">Resume</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
