import React from 'react';
import '../styles/Project.css';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { Reveal } from '../hooks/useReveal';

function Projects() {
  const projectList = [
    {
      title: 'DocIntel',
      image: require('../assets/DocIntel1.png'),
      description:
        'An AI-powered document intelligence platform that uses Retrieval-Augmented Generation (RAG) to analyze, search, summarize, and extract insights from enterprise documents—letting users interact with PDFs through natural language and retrieve context-aware answers with citations.',
      tags: ['LLMs', 'RAG', 'Multi-Agent Systems'],
      github: 'https://github.com/nishithamakam/docintel-ai',
      demo: '',
    },
    {
      title: 'Traffic Violation Monitoring',
      image: require('../assets/project2.jpg'),
      description:
        'A vision-based system that detects traffic violations and automatically issues e-challans to offenders.',
      tags: ['Computer Vision', 'Python', 'Automation'],
      github: 'https://github.com/nishithamakam/TrafficVoilationMonitoring',
      demo: '',
    },
    {
      title: 'Cosmic Challenge',
      image: require('../assets/cosmicchallenge.jpeg'),
      description:
        'A web app built for NASA Space Apps 2023 that educates users about the James Webb Space Telescope.',
      tags: ['React', 'NASA Space Apps', 'Education'],
      github: 'https://github.com/Aish-1311/CosmicChallenge',
      demo: '',
    },
    {
      title: 'Counselling Automation',
      image: require('../assets/counsellingautomationsite.jpg'),
      description:
        'A platform that streamlines counseling with performance analysis, appointment management and student support.',
      tags: ['Full Stack', 'Analytics', 'Web App'],
      github: 'https://github.com/nishithamakam/Counselling-Automation',
      demo: '',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <header className="section-header">
          <span className="section-eyebrow">
            <span className="section-line" aria-hidden="true" /> Selected Work
          </span>
        </header>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <Reveal
              className="project-card"
              key={project.title}
              delay={String((index % 2) + 1)}
            >
              <a
                className="project-media"
                href={project.demo || project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} — open`}
                data-variant={index % 4}
              >
                <span className="project-media-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="project-media-overlay">
                  <FiArrowUpRight />
                </span>
              </a>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                      Live demo <FiArrowUpRight />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link project-link--ghost">
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
