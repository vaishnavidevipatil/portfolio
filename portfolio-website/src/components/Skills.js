import React from "react";
import { motion } from "framer-motion";
import icon from "../img/project-management.png";
import "../styles/Skills.css";

const skills = [
  "Python", "FastAPI", "Flask", "Django",
  "ReactJS", "HTML", "CSS", "JavaScript",
  "MySQL", "SQL", "MongoDB",
  "API Development", "JWT Authentication",
  "Data Visualization", "Stock Market Analysis",
  "Docker", "JSON" , "AWS", "JAVA",
  "Git & GitHub", "Linux", "CI/CD"
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      {/* <img src={icon} alt="skill icon" className="skill-icon" /> */}
      <h2>Skills</h2>

      {/* Motion wrapper for continuous scroll */}
      <div className="skills-marquee">
        <motion.ul
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 29,   // speed of scroll
            repeat: Infinity,
          
            ease: "linear"
          }}
        >
          {/* repeat the skills twice so it loops seamlessly */}
          {[...skills, ...skills].map((skill, index) => (
            <li key={index}>{skill}</li>

          ))}
        </motion.ul>
      </div>

      
                 <div className="about-highlights">
          <div className="highlight-card">
            <h3>Hardware</h3>
            <p>System Testing & RF Validation</p>
          </div>

          <div className="highlight-card">
            <h3>Software</h3>
            <p>Full Stack Development & REST APIs</p>
          </div>

          <div className="highlight-card">
            <h3>Approach</h3>
            <p>Problem Solving & Continuous Learning</p>
          </div>
        </div>

        <h3 className="skills-heading">Technical Skills</h3>

        <div className="skills-container">
          {skills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
       
    </section>
  );
};

export default Skills;
