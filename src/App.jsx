import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Hero />
      <Services />
      <Destinations />
      <Testimonials />
      <FooterCTA />
    </div>
  );
}

export default App;
