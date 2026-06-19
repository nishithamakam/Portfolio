import React from 'react';
import '../styles/Skills.css';
import {FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare,FaBootstrap, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';

import {SiMongodb, SiExpress, SiMysql, SiC, SiCplusplus, SiDjango} from 'react-icons/si';
import {SiTerraform, SiPytorch, SiLangchain } from 'react-icons/si';
import {FaAws } from 'react-icons/fa';

import { FaChartBar } from 'react-icons/fa';
import { LuWorkflow } from 'react-icons/lu';
import { Reveal } from '../hooks/useReveal';

function Skills() {
  const skillsRow1 = [

    { icon: <SiC color="#A8B9CC" />, name: 'C' },
    { icon: <SiCplusplus color="#00599C" />, name: 'C++' },
    { icon: <FaJava color="#007396" />, name: 'Java' },
    { icon: <FaPython color="#3776AB" />, name: 'Python' },

    { icon: <FaHtml5 color="#e34c26" />, name: 'HTML' },
    { icon: <FaCss3Alt color="#1572B6" />, name: 'CSS' },
    { icon: <FaJsSquare color="#f7df1e" />, name: 'JavaScript' },
    { icon: <FaReact color="#61DBFB" />, name: 'React' },

    { icon: <FaBootstrap color="#7952B3" />, name: 'Bootstrap' },
    { icon: <FaGitAlt color="#F05032" />, name: 'Git' },

    { icon: <FaDatabase color="#F2C811" />, name: 'Power BI' },
    { icon: <FaChartBar color="#E97627" />, name: 'Tableau' },
    { icon: <LuWorkflow color="#0066FF" />, name: 'Power Automate' },
  ];

  const skillsRow2 = [

    { icon: <SiLangchain color="#1C3C3C" />, name: 'LangChain' },
    { icon: <SiPytorch color="#EE4C2C" />, name: 'PyTorch' },

    { icon: <SiMysql color="#00758F" />, name: 'MySQL' },
    { icon: <FaDatabase color="#f39c12" />, name: 'DBMS' },

    { icon: <SiDjango color="#092E20" />, name: 'Django' },
    { icon: <FaNodeJs color="#3C873A" />, name: 'Node.js' },
    { icon: <SiExpress color="#000000" />, name: 'Express.js' },
    { icon: <SiMongodb color="#4DB33D" />, name: 'MongoDB' },

    { icon: <FaAws color="#FF9900" />, name: 'AWS' },
    { icon: <SiTerraform color="#623CE4" />, name: 'Terraform' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <header className="section-header">
          <span className="section-eyebrow">
            <span className="section-line" aria-hidden="true" /> Toolkit
          </span>
        </header>

        <Reveal as="p" className="skills-lede">
          A mix of languages, frameworks and tools I reach for&mdash;from
          <em> first line of code</em> to the cloud.
        </Reveal>
      </div>

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
