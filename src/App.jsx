import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <section id="home" className="min-h-screen flex items-center justify-center bg-blue-100">
          <Home />
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center bg-green-100">
          <About />
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center bg-yellow-100">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-red-100">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
