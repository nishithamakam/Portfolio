import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo" onClick={closeMenu} aria-label="Nishitha Makam">
        <span className="logo-mark">
          <span className="logo-n">N</span><span className="logo-m">M</span>
        </span>
      </a>

      <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        {links.map((link, i) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            <span className="link-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="link-label">{link.label}</span>
          </a>
        ))}
      </nav>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

      <div className="navbar-icons">
        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
