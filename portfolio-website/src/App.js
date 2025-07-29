// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import img from './img/Passport.jpg';
// import '../styles/about.css';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header />      
      <main>
        {/* <Header />       */}
        <About />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
