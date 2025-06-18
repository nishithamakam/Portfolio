import React, { useEffect } from 'react';
import '../styles/Skills.css';
import {
  FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare,
  FaBootstrap, FaGitAlt, FaJava, FaPython 
} from 'react-icons/fa';
import {SiMongodb, SiExpress, SiMysql, SiC, SiCplusplus, 
  SiDjango
 } from 'react-icons/si';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillsRow1 = [

    { icon: <SiC color="#A8B9CC" />, name: 'C' },
    { icon: <SiCplusplus color="#00599C" />, name: 'C++' },
    { icon: <FaJava color="#007396" />, name: 'Java' },
    { icon: <FaPython color="#3776AB" />, name: 'Python' },

    { icon: <FaHtml5 color="#e34c26" />, name: 'HTML' },
    { icon: <FaCss3Alt color="#1572B6" />, name: 'CSS' },
    { icon: <FaJsSquare color="#f7df1e" />, name: 'JavaScript' },
    { icon: <FaReact color="#61DBFB" />, name: 'React' },

   
  ];

  const skillsRow2 = [

    { icon: <FaBootstrap color="#7952B3" />, name: 'Bootstrap' },
    { icon: <SiMysql color="#00758F" />, name: 'MySQL' },
    { icon: <FaDatabase color="#f39c12" />, name: 'DBMS' },
    { icon: <FaGitAlt color="#F05032" />, name: 'Git' },
   
    { icon: <SiDjango color="#092E20" />, name: 'Django' },
    { icon: <FaNodeJs color="#3C873A" />, name: 'Node.js' },
    { icon: <SiExpress color="#000000" />, name: 'Express.js' },
    { icon: <SiMongodb color="#4DB33D" />, name: 'MongoDB' },
 
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 data-aos="fade-up">Skills</h2>

      {/* Row 1 */}
      <div className="skills-marquee-wrapper">
        <div className="skills-marquee-track scroll-left">
          {[...skillsRow1, ...skillsRow1].map((skill, index) => (
            <div className="skill-card" key={`r1-${index}`}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="skills-marquee-wrapper">
        <div className="skills-marquee-track scroll-right">
          {[...skillsRow2, ...skillsRow2].map((skill, index) => (
            <div className="skill-card" key={`r2-${index}`}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
