import React from 'react';
// import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Stock Market Visualization Dashboard</h3>
        <p>
          A live stock market dashboard built with React.js and Node, integrating Yahoo Finance API for data and displaying charts, technical indicators, and market insights.
        </p>
      </div>
      <div className="project-card">
        <h3>JWT Authentication System</h3>
        <p>
          Developed a secure authentication system using FastAPI, JWT, and bcrypt for password encryption, enabling secure user login and registration.
        </p>
      </div>
      <div className="project-card">
        <h3>LSTM Model for Stock Market Prediction</h3>
        <p>
          Created a prediction model using LSTM for stock market analysis, improving accuracy for future predictions and data visualization.
        </p>
      </div>
    </section>
  );
};

export default Projects;
