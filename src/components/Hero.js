import React, { useEffect, useState, useMemo } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import '../styles/Hero.css';

const titles = ["Software Engineer", "AI Enthusiast", "Full Stack Developer"];

function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const leaves = useMemo(() => {
    const colors = ['var(--sub)', 'var(--primary)', '#6fbf73', '#3f8f47'];
    const rand = (min, max) => Math.random() * (max - min) + min;
    return Array.from({ length: 16 }).map(() => ({
      left: rand(0, 96),
      size: rand(7, 15),
      opacity: rand(0.28, 0.55),
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: rand(10, 20),
      delay: -rand(0, 20),
    }));
  }, []);

  useEffect(() => {
    const currentText = titles[index % titles.length];
    const timeout = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting ? currentText.substring(0, prev.length - 1) : currentText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1400);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex(prev => prev + 1);
      }
    }, isDeleting ? 40 : 90);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section id="hero" className="hero">
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-leaves" aria-hidden="true">
        {leaves.map((leaf, i) => (
          <span
            key={i}
            className="contact-leaf"
            style={{
              left: `${leaf.left}%`,
              width: `${leaf.size}px`,
              height: `${leaf.size}px`,
              opacity: leaf.opacity,
              background: leaf.color,
              animationDuration: `${leaf.duration}s`,
              animationDelay: `${leaf.delay}s`,
            }}
          />
        ))}
      </div>

      <header className="hero-meta hero-meta--top">
        <div className="meta-item meta-item--right">
          <span className="status-dot" />
          <span>Available for new opportunities</span>
        </div>
      </header>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-greet">Hi, I&rsquo;m</span> <span className="highlight">Nishitha</span>
          <br />
          <span className="hero-role">
            <span className="typed-text">{displayText}</span>
            <span className="cursor">|</span>
          </span>
        </h1>

        <p className="hero-tagline">
          <strong>Building LLM Applications, RAG Pipelines &amp; Multi-Agent Systems.</strong><br />
          I design and engineer intelligent, scalable products&mdash;transforming ambitious
          ideas into elegant, production-ready solutions from concept to deployment.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View my work <span className="btn-arrow-down">&rarr;</span></a>
          <a href="/NishithaMakam_resume.pdf" download className="btn-resume">
            <FiDownload /> Download résumé
          </a>
          <a
            href="https://linkedin.com/in/nishithamakam1209"
            target="_blank"
            rel="noreferrer"
            className="btn-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <footer className="hero-meta hero-meta--bottom">
        <div className="meta-col">
          <span className="meta-label">Based in</span>
          <span className="meta-value">Hyderabad, IN</span>
        </div>
        <div className="meta-col">
          <span className="meta-label">Currently</span>
          <span className="meta-value">@ Bristol Myers Squibb</span>
        </div>
        <div className="meta-col meta-col--scroll">
          <span className="meta-label">Scroll</span>
          <span className="scroll-line" aria-hidden="true" />
        </div>
      </footer>
    </section>
  );
}

export default Hero;
