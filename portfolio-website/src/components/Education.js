import React from "react";
// import "./Education.css"; // if you're using custom CSS
import "../styles/Education.css";
import edu from "../img/graduation.png";
import resume from "../img/resume.png";

const educationData = [
  {
    institution: "GM Institute Of Technology Engineering Davangere",
    years: "2021 — 2024",
    description: "Electronics and Communications Engineering with very interested in Information and Technology. I skilled in HTML, CSS & React JS. Intern in Innova Skill at Front-end Developer.",
  },
  {
    institution: "Sri Vyshnavi Chetan PU College",
    years: "2018 — 2021",
    description: "PCMB and I have studied my pre-university in Science where I was good Physics and Maths. I was very interested in solving problems and participating in competitions.",
  },
  {
    institution: "MKET LK English Medium School",
    years: "2017 — 2018",
    description: "I have studied my higher education in Science School where I was good Physics and Boilogy. But also Maths was my favourite subject I was intersted in playing games in criket and football. ",
  },
];

const Education = () => {
  return (
    // <section className="education-section">
    //   <h2 className="section-title">Resume</h2>
    //   <h3 className="education-title">Education</h3>
        <section className="education-section" id="Education">
        <h2 className="section-title"><img src={resume} className="resume-icon"></img>Resume</h2>

        <h3 className="education-title">
          <img src={edu} className="edu-icon"></img> EDUCATION</h3>
        {/* rest of your timeline content */}

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4 className="institution">{edu.institution}</h4>
              <span className="years">{edu.years}</span>
              <p className="description"><b>{edu.description}</b></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
