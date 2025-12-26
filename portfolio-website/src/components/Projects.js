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
          <h2 style={{ textAlign: 'right' }}>Projects</h2>
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

          <b><u>Features:</u></b>
        <ol type='i'>
            <li>Fast response, conversational memory, and LLM integration.</li>
          <li>Groq API integration for efficient processing.</li>
          <li> Hugging Face integration for model access.</li>

        </ol>
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
        
            <b><u>Features:</u></b> <ol type='i'>
              <li>Data preprocessing and normalization for accurate model training.</li>
              <li>Interactive Streamlit dashboard for real-time stock predictions and visualizations.</li>
            </ol>
            <p><b>Skills:</b> Python, TensorFlow, Keras, Numpy, pandas </p>
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
              <br></br>
            <b><u>Features:</u></b>
              <ol type='i'>
                <li>Real-time updates with WebSocket and Task creation and deletion</li>
                <li>Responsive design for mobile and web</li>
              </ol>
              
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
            <p><b>Features:</b></p>
              <ol type='i'>
                <li>User registration and login with JWT authentication.</li>
                <li>Real-time weather data retrieval from OpenWeatherMap API.</li>
              </ol>

            <p><b>Skills:</b> Flask, JWT, Bcrypt, REST APIs, Python
              </p>
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
