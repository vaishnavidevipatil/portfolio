import React from 'react';
import '../styles/about.css'
// import photo  from '../img/photo.jpg';
import { Document } from 'react-pdf';

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

                  <div class="resume-container">
                    <label class="label">
                      <input type="checkbox" class="input" />
                      <span class="circle"
                        ><svg
                          class="icon"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M12 19V5m0 14-4-4m4 4 4-4"
                          ></path>
                        </svg>
                        <div class="square"></div>
                      </span>
                      {/* <p class="title">Resume</p>
                      <p class="title">Open</p> */}
                      <a className='resume' style={{position:"relative", left:"10px" }} href="/VaishnaviDeviPatil_Resume.pdf" download>
                          Resume
                      </a>
                    </label>
                  </div>
              </div>
    </section>
  );
};

export default About;
