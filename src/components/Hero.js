import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Hero() {
  const titles = ["a FullStack Developer", "a Software Engineer", "a Creative Coder"];
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
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex(prev => prev + 1);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, titles]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="hero" className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: 'transparent' }
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'push' },
              onHover: { enable: true, mode: 'repulse' },
              resize: true
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 }
            }
          },
          particles: {
            color: { value: '#a0d995' },
            links: {
              color: '#a0d995',
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1
            },
            collisions: { enable: true },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false
            },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.4 },
            shape: { type: 'circle' },
            size: { random: true, value: 5 }
          },
          detectRetina: true
        }}
      />
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Nishitha</span>
          <br />
          <span className="typed-text">{displayText}<span className="cursor">|</span></span>
        </h1>
        <p>I build beautiful and functional web experiences.</p>
        <a href="#projects" className="btn-primary">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
