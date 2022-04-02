import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav-bar">
        <nav className="nav-items">
        <a href="#about" className="active">
            Timothy Neam
          </a>
          <a href="#projects">
            Projects
          </a>
          <a href="#skills">
            Skills
          </a>
          <a href="#contact">
            Contact
          </a>
        </nav>
    </header>
  );
}