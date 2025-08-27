import React from 'react';

import project from '../img/blueprint.png';
import '../styles/project.css';
import chatbot from '../img/chatbot.png';
import lstm from '../img/lstm.png';
import stock from '../img/stock.png';
import weather from '../img/weather.jpg';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
       <div className="project-header">
          <img src={project} className="project-icon" alt="icon" />
          <h2>Projects</h2>
        </div>

          <div className="project-container">
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
              <p> Created a chatbot that can answer questions and provide information on various topics.</p>
            </div>

          {/* Card 2 */}
           <div className="project-card">
            <img src={lstm} alt="Project Image" />
                <h3>LSTM Model for Stock Market Prediction</h3>
            <p>
              Created a prediction model using LSTM for stock market analysis dashboard built with python streamlit integrating Yahoo Finance API.</p>
            <p><b>SKILLS</b>: <u>Python,Machine Learning TensorFlow, Keras, Data Analysis</u></p>
          </div> 

      {/* Card 3 */}
      <div className="project-card">
        <img src={stock} alt="Project Image" />
        <h3>Stock Market Visualization Dashboard</h3>

        <p>
          Developed an interactive dashboard for visualizing stock market trends using Plotly and Dash.
        </p>
      </div>

      {/* Card 4 */}
      <div className="project-card">
        <img src={weather} alt='weather app' />
        <h3>JWT Authentication Weather APP System</h3>
        <p>
          Developed a secure authentication system using Flask, JWT, and bcrypt for password encryption, enabling secure user login and registration.
        </p>
      </div>
  
    </div>
    </section>
  );
};

export default Projects;
