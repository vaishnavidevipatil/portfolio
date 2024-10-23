import React from 'react';
// import './App.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I'm an enthusiastic and innovative Software Engineer with experience in full-stack development, agile methodologies, and software testing. I have a strong background in Python, ReactJS, FastAPI, and SQL, and I'm passionate about creating scalable, efficient, and maintainable software solutions.
      </p>
      <div className="about-links">
        <a href="https://www.linkedin.com/in/vaishnavi-devi-patil-711176222" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/vaishnavidevipatil" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* Add HackerRank link if available */}
        <a href='https://leetcode.com/u/VAISHNAVIDP/' target="_blank" rel='noopener noreferrer'>LEETCODE</a>
      </div>
    </section>
  );
};

export default About;
