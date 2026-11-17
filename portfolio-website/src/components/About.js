import React from 'react';
import '../styles/about.css'
import resume from "../assests/VaishnaviDeviPatil_Resume.pdf";


const About = () => {
  return (
    <section id="about" className="about-section" style={{ background: '#111c30', border: '1px solid #293950', margin: '50px 0', borderRadius: '10px', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}>
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-photo" role="img" aria-label="Professional portrait" />
        <div className="about-content">
          <div className="about-text">
           <p className="about-description">
          <i>
            I am an Electronics and Communication Engineering graduate
            with experience in system-level testing, RF validation, and
            full-stack development. Currently working as a Repair Engineer
            at NOKIA, I focus on validating telecom equipment, performing
            functional checks, identifying defects, and troubleshooting
            system-level issues. Previously, as a Full Stack Developer
            Intern at Factree.ai, I contributed to RESTful APIs,
            microservices, application development, and the software
            development lifecycle. I enjoy solving technical problems,
            learning new technologies, and building reliable solutions
            through a combination of hardware and software knowledge.
          </i>
        </p>
   
          </div>
          <div className="resume-container">
            <label className="label">
              <input type="checkbox" className="input" />
              <span className="circle">
                <svg
                  className="icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 19V5m0 14-4-4m4 4 4-4"
                  />
                </svg>
                <div className="square" />
              </span>
              <a className="resume" href="/VaishnaviDeviPatil_Resume.pdf" download>
                Resume
              </a>
            </label>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
