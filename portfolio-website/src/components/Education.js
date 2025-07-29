import React from "react";
// import "./Education.css"; // if you're using custom CSS
import "../styles/Education.css";

const educationData = [
  {
    institution: "GM Institute Of Technology Engineering Davangere",
    years: "2021 — 2024",
    description: "Electronics and Communications Engineering with very interested in Information and Technology. I skilled in HTML, CSS & React JS. Intern in Innova Skill at Front-end Developer.",
  },
  {
    institution: "New York Academy Of Texas",
    years: "2018 — 2024",
    description: "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.",
  },
  {
    institution: "High School Of Art And Design",
    years: "2017 — 2018",
    description: "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
  },
];

const Education = () => {
  return (
    // <section className="education-section">
    //   <h2 className="section-title">Resume</h2>
    //   <h3 className="education-title">Education</h3>
        <section className="education-section" id="Education">
        <h2 className="section-title">Resume</h2>
        <h3 className="education-title">Education</h3>
        {/* rest of your timeline content */}

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4 className="institution">{edu.institution}</h4>
              <span className="years">{edu.years}</span>
              <p className="description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
