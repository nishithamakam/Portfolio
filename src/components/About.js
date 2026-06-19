import React from 'react';
import '../styles/About.css';
import { Reveal } from '../hooks/useReveal';
import CountUp from './CountUp';

import profilePic from '../assets/work.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <header className="section-header">
          <span className="section-eyebrow">
            <span className="section-line" aria-hidden="true" /> About
          </span>
        </header>

        <div className="about-cover">
          <div className="about-col">
            <div className="about-body">
              <Reveal as="p" className="about-lede" delay="1">
                I build intelligent software at the intersection of AI and
                engineering.
              </Reveal>
              <Reveal as="p" delay="2">
                With a background in software development and a growing focus on
                LLMs, RAG systems, and AI-powered applications, I enjoy creating
                solutions that are both technically robust and user-centric. I
                believe great products emerge when clean engineering, thoughtful
                design, and meaningful problem-solving come together.
              </Reveal>
              <Reveal as="p" delay="3">
                I&rsquo;m currently expanding my expertise in AI/ML, system
                design, and cloud technologies while working toward building
                products that create lasting value.
              </Reveal>
            </div>

            <Reveal className="about-aside" delay="2">
              <div className="about-stats">
                <div>
                  <span className="about-stat-num"><CountUp end={2} suffix="+" /></span>
                  <span className="about-stat-label">Years of experience</span>
                </div>
                <div>
                  <span className="about-stat-num"><CountUp end={10} suffix="+" /></span>
                  <span className="about-stat-label">Projects shipped</span>
                </div>
              </div>

              <a href="/NishithaMakam_resume.pdf" download className="download-cv">
                Download CV &rarr;
              </a>
            </Reveal>
          </div>

          <Reveal className="about-portrait" delay="1">
            <img src={profilePic} alt="Nishitha Makam" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
