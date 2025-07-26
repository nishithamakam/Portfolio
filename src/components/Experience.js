import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Experience.css';
 

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const experienceData = [

    {
      year: 'July 2025 - Present',
      title: 'Associate Software Engineer',
      company: 'Bristol Myers Squibb',
      description: "    "
    } ,
    {
      year: 'June 2024 - August 2024',
      title: 'DevOps/SRE Intern',
      company: 'S&P Global',
      description: "Designed and deployed CI/CD pipelines and a 3-tier architecture on AWS (IIS-hosted app), enhancing cloud automation and infrastructure skills with hands-on use of core AWS services."
    } 
  ];

  const educationData = [
    {
      year: '2021 - 2025',
      degree: 'Bachelor of Technology',
      institute: 'G. Narayanamma Institute of Technology and Science',
       description: 'Specialized in Computer Science',
      grade: 'CGPA: 9.5/10'
    },
    {
      year: '2019 - 2021',
      degree: 'Senior Secondary',
      institute: 'Sri Gayathri Junior College',
      description: 'Specialized in PCM stream.',
      grade: 'Percentage: 99.2%'
    },
    {
      year: '2011 - 2019',
      degree: 'Secondary School',
      institute: 'Krishnaveni Talent School',
       
      grade: 'GPA: 9.8/10'
    }
  ];

  const renderTimeline = (data, isEducation = false) =>
    data.map((item, index) => (
      <div key={index} className="timeline-item" data-aos="fade-up">
        <div className="timeline-dot" />
        <div className="timeline-content">
          <span className="timeline-year">{item.year}</span>
          <h3>{isEducation ? item.degree : item.title}</h3>
          <h4>{isEducation ? item.institute : item.company}</h4>
          <p>{item.description}</p>
          {isEducation && <span className="grade">{item.grade}</span>}
        </div>
      </div>
    ));

  return (
    <section id="experience" className="experience-section">
      <h2 data-aos="fade-up">Experience</h2>
      <br></br><br></br>

      <div className="experience-flex-container">
        <div className="timeline-container">{renderTimeline(experienceData)}</div>
        <div className="experience-bg-image" data-aos="zoom-in" />
    </div>


      <h2 data-aos="fade-up">Academic Journey</h2>
      <br></br><br></br>
      <div className="timeline-container">{renderTimeline(educationData, true)}</div>
    </section>
  );
}

export default Experience;
