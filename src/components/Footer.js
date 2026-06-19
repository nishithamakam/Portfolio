import React from 'react';
import '../styles/Footer.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { icon: <FaEnvelope />, href: 'mailto:nishithamakam23@gmail.com', label: 'Email' },
    { icon: <FaGithub />, href: 'https://github.com/nishithamakam', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/nishithamakam1209', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://instagram.com/nishitha.23', label: 'Instagram' },
  ];

  return (
    <footer className="footer">
      <button
        type="button"
        className="footer-top"
        onClick={toTop}
        aria-label="Back to top"
      >
        <span className="footer-top-arrow" aria-hidden="true">
          <svg width="14" height="18" viewBox="0 0 16 20" fill="none">
            <path
              d="M8 18V3M8 3L3.5 7.5M8 3L12.5 7.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="footer-top-label">back to top</span>
      </button>
      <h3 className="footer-title">Follow Me</h3>
      <div className="footer-content">
        <div className="footer-icons">
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              style={{ '--i': i }}
            >
              {s.icon}
            </a>
          ))}
        </div>
        <span className="footer-copy">
          Copyright © {year} All rights reserved | Made by Nishitha Makam
          <span className="footer-heart">💚</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
