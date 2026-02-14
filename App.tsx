import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-black selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
};

export default App;