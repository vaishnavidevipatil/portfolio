import React from 'react';

import project from '../img/blueprint.png';
import '../styles/project.css';
import chatbot from '../img/chatbot.png';
import main from '../img/main.jpg';
import todo from '../img/todo.jpg';
import weather from '../img/weather.jpg';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
       <div className="project-header">
          <img src={project} className="project-icon" alt="icon" />
          <h2>Projects</h2>
        </div>

         <div className="project-container">

        {/* Project 1: AI Chatbot */}
        <div className="project-card">
          <div className="project-card-content">
          <img src={chatbot} alt="AI Chatbot" />
          <h3>AI Chatbot with LangChain</h3>
          <p>
            Built an AI-powered chatbot using LangChain and GROQ API for real-time responses. 
            The system handles diverse queries and delivers accurate, context-aware answers 
            with minimal latency.
          </p>
          <p><b><u>Features:</u></b> Fast response, conversational memory, and LLM integration.</p>
          <p><b>Skills:</b> Python, GenAI, LangChain, LLMs</p>
          <a href="https://github.com/vaishnavidevipatil/langchain" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          </div>
        </div>

        {/* Project 2: LSTM Model */}
        <div className="project-card">
          <div className="project-card-content">
            <img src={main} alt="LSTM Stock Prediction" />
            <h3>LSTM Stock Market Prediction</h3>
            <p>
              Developed a deep learning model using LSTM networks to analyze stock price trends 
              and make predictions. Integrated real-time data from Yahoo Finance into a Streamlit dashboard 
              for visualization.
            </p>
            <p><b>Skills:</b> Python, TensorFlow, Keras, Machine Learning, Data Analysis</p>
            <a href="https://github.com/vaishnavidevipatil/MainProject" target="_blank" rel="noopener noreferrer">
              View Private Project
            </a>
          </div>
        </div>

        {/* Project 3: Todo App */}
        <div className="project-card">
          <div className="project-card-content">
            <img src={todo} className="todo-img" alt="Todo App" />
            <h3>Todo List Web & Mobile App</h3>
            <p>
              Created a full-stack Todo application with React for web and React Native for mobile, 
              using Redux for state management. Supports task creation, editing, and tracking in real time.
            </p>
            <p><b>Skills:</b> React, React Native, Redux, JavaScript</p>
            <a href="https://github.com/vaishnavidevipatil/apnaweb/tree/local" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        {/* Project 4: Weather App */}
        <div className="project-card">
          <div className="project-card-content">
            <img src={weather} alt="Weather App" />
            <h3>Weather App with JWT Authentication</h3>
            <p>
              Built a weather forecasting app with secure login using JWT authentication in Flask. 
              Passwords encrypted with bcrypt ensure strong user data protection and API security.
            </p>
            <p><b>Skills:</b> Flask, JWT, Bcrypt, REST APIs, Python</p>
            <a href="https://github.com/vaishnavidevipatil/login_app" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
