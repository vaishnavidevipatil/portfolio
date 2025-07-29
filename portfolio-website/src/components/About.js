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
          
           <div className="about-links">
              <a href="https://www.linkedin.com/in/vaishnavi-devi-patil-711176222" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/vaishnavidevipatil" target="_blank" rel="noopener noreferrer">GitHub</a>
              {/* Add HackerRank link if available */}
              <a href='https://leetcode.com/u/VAISHNAVIDP/' target="_blank" rel='noopener noreferrer'>LEETCODE</a>
                <a href='https://www.hackerrank.com/profile/vaishnavidevip17' target="_blank" rel='noopener noreferrer'>HackerRank</a>
            </div>
                
                </div>
              </div>
      
    
    </section>
  );
};

export default About;
