import React from 'react';
import '../styles/about.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
       {/* <h2>ABOUT ME</h2> */}
                <div className="about-container">
                <div className="about-photo"></div>
                <div className="about-text">
                  <p><b>
                    Proven Full Stack Developer adept in responsive design, excelled in integrating APIs and enhancing data management. Demonstrated strong problem-solving and team collaboration skills, achieving improvements in functionality and security with a commitment to excellence and innovation.
                    </b></p>             
                </div>
              </div>
    </section>
  );
};

export default About;
