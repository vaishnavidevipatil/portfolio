// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import img from './img/Passport.jpg';

function App() {
  return (
    <div className="App">
      <Header />      
      <h2>As Me</h2>
          <div class="about-photo">  
      </div>
      <main>
        <About />
        <Projects />
        <Skills />

      </main>
    </div>
  );
}

export default App;
