import React from 'react';
import '../styles/Experience.css';
import { Reveal } from '../hooks/useReveal';
import { FaGraduationCap, FaBook, FaStar, FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';

function Experience() {
  const experienceData = [
    {
      year: 'Jul 2025 — Present',
      title: 'Associate Software Engineer',
      company: 'Bristol Myers Squibb',
      tech: ['Langchain', 'LLMs', 'Python', 'React.js']
    },
    {
      year: 'Jun 2024 — Aug 2024',
      title: 'DevOps / SRE Intern',
      company: 'S&P Global',
      bullets: [
        'Designed and deployed CI/CD pipelines and a 3-tier architecture on AWS (IIS-hosted app), enhancing cloud automation and infrastructure skills with hands-on use of core AWS services.'
      ],
      tech: ['Python', 'AWS', 'CI/CD', 'Terraform']
    }
  ];

  const educationData = [
    {
      icon: <FaGraduationCap />,
      degree: 'Bachelor of Technology, Computer Science',
      institute: 'G. Narayanamma Institute of Technology and Science',
      grade: 'GPA: 9.5 / 10.0',
      year: '2021 — 2025',
      location: 'Hyderabad, India'
    },
    {
      icon: <FaBook />,
      degree: 'Senior Secondary',
      institute: 'Sri Gayathri Junior College',
      grade: 'Grade: 99.2%',
      year: '2019 — 2021',
      location: 'Hyderabad, India'
    }
  ];

  const renderRow = (item, idx, isEducation) => (
    <Reveal className="timeline-row" delay={String((idx % 4) + 1)} key={idx}>
      <span className="timeline-dot" aria-hidden="true" />
      <span className="timeline-year">{item.year}</span>
      <div className="timeline-main">
        <h3>{isEducation ? item.degree : item.title}</h3>
        <h4>{isEducation ? item.institute : item.company}</h4>
        {item.description && <p>{item.description}</p>}
        {item.bullets && (
          <ul className="timeline-bullets">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
        {item.tech && (
          <div className="timeline-tags">
            {item.tech.map((t, i) => (
              <span className="timeline-tag" key={i}>{t}</span>
            ))}
          </div>
        )}
        {isEducation && <span className="timeline-grade">{item.grade}</span>}
      </div>
    </Reveal>
  );

  const renderEduCard = (item, idx) => (
    <Reveal className="edu-card" delay={String((idx % 2) + 1)} key={idx}>
      <span className="edu-card-icon" aria-hidden="true">{item.icon}</span>
      <div className="edu-card-body">
        <h3 className="edu-card-degree">{item.degree}</h3>
        <h4 className="edu-card-institute">{item.institute}</h4>
        <div className="edu-card-meta">
          <span className="edu-card-grade">
            <FaStar aria-hidden="true" /> {item.grade}
          </span>
        </div>
        <div className="edu-card-meta edu-card-meta--sub">
          <span className="edu-card-year">
            <FaRegCalendarAlt aria-hidden="true" /> {item.year}
          </span>
          <span className="edu-card-location">
            <FaMapMarkerAlt aria-hidden="true" /> {item.location}
          </span>
        </div>
      </div>
    </Reveal>
  );

  return (
    <section id="experience" className="experience-section">
      <div className="experience-inner">
        <header className="section-header">
          <span className="section-eyebrow">
            <span className="section-line" aria-hidden="true" /> Experience
          </span>
        </header>

        <div className="experience-block">
          <Reveal className="experience-block-header">
            <h3 className="experience-block-title">
              <em>Work</em> &nbsp;Experience
            </h3>
          </Reveal>
          <div className="timeline">
            {experienceData.map((item, idx) => renderRow(item, idx, false))}
          </div>
        </div>

        <div className="experience-block">
          <Reveal className="experience-block-header">
            <h3 className="experience-block-title">
              <em>Academic</em> &nbsp;Background
            </h3>
          </Reveal>
          <div className="edu-grid">
            {educationData.map((item, idx) => renderEduCard(item, idx))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
