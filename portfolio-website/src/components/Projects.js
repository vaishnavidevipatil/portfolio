import React from 'react';

import project from '../img/blueprint.png';
import '../styles/project.css';
import chatbot from '../img/chatbot.png';
import lstm from '../img/lstm.png';


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
        
        <h2>
          {/* <img src={project} alt="project icon" className="project-icon" /> */}
          Projects</h2>
          <div class="projects-section">
          {/* Different cards */}
            <div class="project-card">
              <img src={chatbot} alt="Project Image" />
              <h3>AI Chatbot</h3>
              <p>A lightweight chatbot built using LangChain and GROQ API for lightning-fast performance.</p>
              <a href='https://github.com/vaishnavidevipatil/langchain'  target="_blank" 
                rel="noopener noreferrer">
                View Project
              </a>
              <p><b>SKILLS</b>: <u>Python,GenAI, LLMs, and chatbot</u></p>
            </div>

           <div className="project-card">
            <img src={lstm} alt="Project Image" />
        <h3>LSTM Model for Stock Market Prediction</h3>
        <p>
          Created a prediction model using LSTM for stock market analysis dashboard built with python streamlit integrating Yahoo Finance API.</p>
        <p><b>SKILLS</b>: <u>Python,Machine Learning TensorFlow, Keras, Data Analysis</u></p>
      </div> 
      <div className="project-card">
        <h3>Stock Market Visualization Dashboard</h3>
        <p>
         
        </p>
      </div>
      <div className="project-card">
        <h3>JWT Authentication System</h3>
        <p>
          Developed a secure authentication system using FastAPI, JWT, and bcrypt for password encryption, enabling secure user login and registration.
        </p>
      </div>
  
    </div>
    </section>
  );
};

export default Projects;
