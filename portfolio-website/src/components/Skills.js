import React from 'react';
// import './Skills.css';
import icon from '../img/project-management.png';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <img src={icon} alt="skill icon" className="skill-icon"></img>
      <h2>Skills</h2>
      <ul>
        <li>Python, FastAPI, Flask</li>
        <li>ReactJS, HTML, CSS, JavaScript</li>
        <li>MySQL, SQL, MongoDB</li>
        <li>API Development, JWT Authentication</li>
        <li>Data Visualization, Stock Market Analysis</li>
      </ul>
    </section>
  );
};

export default Skills;
