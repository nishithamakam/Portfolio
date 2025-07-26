import React, { useEffect } from 'react';
import '../styles/Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projectList = [
    {
      title: 'Traffic Voilation Monitoring',
      image: require('../assets/project2.jpg'),
      description: 'This system automatically issues e-challans to violators by identifying traffic violations.',
       
      tags: [],
      github: 'https://github.com/nishithamakam/TrafficVoilationMonitoring',
      demo: '#'
    },
    {
      title: 'Cosmic Challenge - NASA Space Apps Challenge 2023',
      image: require('../assets/cosmicchallenge.jpeg'),
      description: 'A web application aimed at educating users about the James Webb Space Telescope (JWST)',
      tags: [],
      github: 'https://github.com/Aish-1311/CosmicChallenge',
      demo: '#'
    },
     {
      title: 'Counselling Automation',
      image: require('../assets/counsellingautomationsite.jpg'),
      description: 'A web application that simplifies counseling processes and enhances student support through performance analysis and appointment management',
      tags: [],
      github: 'https://github.com/nishithamakam/Counselling-Automation',
      demo: '#'
    },
     {
      title: 'Portfolio Website',
       image: require('../assets/project1.png'),
      description: 'This project features my portfolio website which is a reflection of me.',
      tags: [],
      github: 'https://github.com/nishithamakam/Portfolio',
      demo: 'https://nishithamakam.github.io/Portfolio/'
    },
    // Add more projects here...
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 data-aos="fade-up">Projects</h2>
      <br></br><br></br>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                 <button onClick={() => window.open(project.demo, "_blank")}>Live Demo</button>
                 <button onClick={() => window.open(project.github, "_blank")}>GitHub</button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
