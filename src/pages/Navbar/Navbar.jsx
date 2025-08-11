import React, { useState } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";

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
        <li className="active">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Contact</a>
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
