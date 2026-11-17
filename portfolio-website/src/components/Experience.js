
import React from "react";
// import "./Experience.css";
import '../styles/Experience.css';

const experiences = [
  {
    role: "Repair Engineer – Network Testing",
    company: "NOKIA",
    duration: "Feb 2026 – Present",
    type: "System & RF Validation",
    points: [
      "Perform system-level and RF validation of telecom hardware, checking functional and performance requirements.",
      "Conduct visual inspections, functional checks, and defect identification against system specifications.",
      "Validate 5G and 2.4G wireless network equipment through structured test execution and result analysis.",
      "Document test results and collaborate with cross-functional engineering teams to support issue resolution.",
      "Apply analytical thinking and troubleshooting to investigate issues across interacting subsystems.",
    ],
    tags: ["RF Testing", "5G", "2.4G", "Hardware Validation"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Factree.ai Pvt. Ltd.",
    duration: "Oct 2024 – Jun 2025",
    type: "Software Development",
    points: [
      "Contributed to requirements gathering, system design, coding, testing, and deployment across the SDLC.",
      "Built and consumed RESTful APIs within a microservices architecture.",
      "Applied low-level design principles to develop modular and scalable application components.",
      "Used structured problem-solving and debugging to investigate application reliability issues.",
      "Collaborated with team members in an Agile development environment and adapted to new tools and frameworks.",
    ],
    tags: ["Full Stack", "REST APIs", "Microservices", "SDLC"],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <span className="experience-label">MY PROFESSIONAL JOURNEY</span>

        <h2 className="experience-title">
          Work <span>Experience</span>
        </h2>

        <p className="experience-intro">
          My journey combines telecom hardware validation with
          software development, helping me understand systems
          from physical components to application-level services.
        </p>

        <div className="experience-timeline">
          {experiences.map((job, index) => (
            <article className="experience-card" key={job.company}>
              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="experience-content">
                <div className="experience-top">
                  <div>
                    <h3>{job.role}</h3>
                    <h4>{job.company}</h4>
                  </div>

                  <span className="experience-duration">
                    {job.duration}
                  </span>
                </div>

                <span className="experience-type">{job.type}</span>

                <ul className="experience-points">
                  {job.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>

                <div className="experience-tags">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
