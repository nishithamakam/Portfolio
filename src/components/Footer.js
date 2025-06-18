import React from 'react';
import '../styles/Footer.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <h3>Follow Me</h3>
      <div className="footer-content">
        
        <br></br>
        <div className="footer-icons">
           <a href="mailto:nishithamakam23@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
          <a href="https://github.com/nishithamakam" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/nishithamakam1209" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com/nishitha.23" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
         <p></p>
         <span>Copyright © {year} All rights reserved | Made by Nishitha Makam💚</span>
        
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
