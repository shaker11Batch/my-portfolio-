import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">

      <a href="#" className="logo">
        Portfolio.
      </a>


      <ul className={`navbar-li ${isOpen ? "open" : ""}`}>
        <li >
          <Link to="home" activeClass="active" spy={true} smooth={true} href="#">Home</Link>
        </li>
        <li>
          <Link to="about" activeClass="active" smooth={true} href="#">About</Link>
        </li>
        <li>
          <Link to="skills" activeClass="active" smooth={true} href="#">Skills</Link>
        </li>
        <li>
          <Link to="projects" activeClass="active" smooth={true} href="#">Projects</Link>
        </li>
        <li>
          <Link to="contact" activeClass="active" smooth={true} href="#">Contact</Link>
        </li>
      </ul>

      {/* Menu Icon */}
      <div onClick={handleMenu} className="menu">
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </div>
    </nav>
  );
};

export default Navbar;
