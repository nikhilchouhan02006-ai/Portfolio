import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll pe navbar shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <span className="logo-dot"></span>
          Nikhil<span className="logo-highlight">Chouhan</span>
        </a>

        {/* Hamburger */}
        <div
          className={`menu-icon ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-btn" onClick={toggleMenu}>
              Hire Me
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;