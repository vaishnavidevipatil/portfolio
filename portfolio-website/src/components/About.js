import React from 'react';
import '../styles/about.css'
// import photo  from '../img/photo.jpg';


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
                  <p><b>
                    Proven Full Stack Developer adept in responsive design, excelled in integrating APIs and enhancing data management. Demonstrated strong problem-solving and team collaboration skills, achieving improvements in functionality and security with a commitment to excellence and innovation.
                    </b></p>             
                </div>
              </div>
    </section>
  );
};

export default About;
