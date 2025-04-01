import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a className="logo" href="#intro" onClick={closeMenu}>
          Ermanno
        </a>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="hamburger-icon">☰</span>
        </button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#intro" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>Education</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#volunteering" onClick={closeMenu}>Volunteering</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <div className="social-icons">
          <a href="https://github.com/ErmannoF00" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ermanno-fiorillo-799296171" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:ermix.fiorillo@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
