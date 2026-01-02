import React from 'react';
import '../styles/about.css'
import resume from "../assests/VaishnaviDeviPatil_Resume.pdf";


const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
       {/* <h2>ABOUT ME</h2> */}
                <div className="about-container">
                <div className="about-photo">
                  {/* <img src={photo} alt="Your Name" /> */}
                </div>
                <div className="about-text">
                  <p><i>
                    Proven Full Stack Developer adapting in responsive design, excelled in integrating APIs and enhancing data management.
                     Demonstrated strong problem-solving and team collaboration skills, achieving improvements in functionality and 
                     security with a commitment to excellence and innovation. I am eager to contributing my skills and growth in a dynamic development environment.
 
 
                    </i>
                  </p>             
                </div>
                 {/* <a href="/VaishnaviDeviPatil_Resume.pdf" download>
                    Download Resume
                  </a> */}

                  <div className="resume-container">
                    <label 
                      className="label" 
                      onClick={(e) => {
                        // Trigger download when clicking anywhere on the label
                        e.preventDefault();
                        const link = document.createElement('a');
                        link.href = resume;
                        link.download = 'VaishnaviDeviPatil_Resume.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <input type="checkbox" className="input" readOnly />
                      <span className="circle"
                        ><svg
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
                          ></path>
                        </svg>
                    <div className="square"></div>
                      </span>
                      {/* <p className="title">Resume</p>
                      <p className="title">Open</p> */}
                      <span className='resume' style={{position:"relative", left:"10px" }}>
                          Resume
                      </span>
                    </label>
                  </div>
              </div>
    </section>
  );
};

export default About;
