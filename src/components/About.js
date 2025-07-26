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
          <br></br>
          <p>
            I'm Nishitha, a passionate software engineer who loves crafting clean, efficient, and responsive web applications.
            I enjoy turning ideas into reality through elegant, scalable code——Whether it's building dynamic frontend interfaces or robust backend systems.
            My goal is to create seamless and impactful digital solutions from end to end.

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
