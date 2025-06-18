import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import '../styles/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import { useState } from 'react';
import { useEffect } from 'react';


function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
     <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
         <i className="fas fa-link logo-icon"></i> Growth
      </div>

      <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <a href="#hero" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
         <a href="#experience" onClick={toggleMenu}>Experience</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </nav>
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <div className="navbar-icons">
         {/*<button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '☀️' : '🌙'}
        </button>*/}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Navbar;
 
