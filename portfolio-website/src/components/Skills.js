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
  "Docker", "Kubernetes", "AWS",
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
            duration: 46,   // speed of scroll
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
    </section>
  );
};

export default Skills;
