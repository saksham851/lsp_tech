import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Process from './components/sections/Process';
import WhyWorkWithMe from './components/sections/WhyWorkWithMe';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-dark text-white min-h-screen selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Process />
        <WhyWorkWithMe />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
