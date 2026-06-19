import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const titles = ["Software Engineer", "AI Enthusiast", "Full Stack Developer", "Creative Coder"];

function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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
          <a href="#contact" className="btn-ghost">Get in touch <span className="btn-ghost-arrow">&rarr;</span></a>
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
