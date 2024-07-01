import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesComponent from './components/Particles';
import './App.css';

function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <ParticlesComponent className="absolute inset-0 z-0"/>
      <div className="relative z-10 w-full">
        <Navbar />
        <div className="app-container min-h-screen overflow-y-auto snap-y bg-cover bg-center">
          <section id="home" className="min-h-screen w-full flex items-center justify-center bg-opacity-50 snap-start pt-16">
            <Home />
          </section>
          <section id="about" className="min-h-screen w-full flex items-center justify-center bg-opacity-50 snap-start pt-16">
            <About />
          </section>
          <section id="projects" className="min-h-screen w-full flex items-center justify-center bg-opacity-50 snap-start pt-16">
            <Projects />
          </section>
          <section id="contact" className="min-h-screen w-full flex items-center justify-center bg-opacity-50 snap-start pt-16">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;