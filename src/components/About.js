import React from 'react';
import '../styles/About.css';

import profilePic from '../assets/profile.jpg';



function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="Nishitha" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Nishitha, a passionate software engineer with a love for clean design, intuitive UX, and responsive interfaces.
            I enjoy turning ideas into reality through elegant code. Whether it's building engaging websites or refining UI/UX,
            I aim to craft seamless digital experiences.
          </p>
          <p>
            With a foundation in modern web technologies, I'm continuously learning and exploring new trends to stay updated.
            I thrive in creative environments and love collaborating with others to bring projects to life.
          </p>
          <a href="/resume.pdf" download className="download-cv btn">Download CV</a>           

        </div>
      </div>

    </section>
  );
}

export default About;
