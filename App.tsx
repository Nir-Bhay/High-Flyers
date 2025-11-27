import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Courses from './components/Courses';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center flex-col">
        <div className="w-16 h-16 border-4 border-navy-800 border-t-gold-500 rounded-full animate-spin"></div>
        <h2 className="mt-4 font-heading font-bold text-navy-800 text-xl tracking-wider">HIGH FLYERS</h2>
        <p className="text-gold-500 font-script text-lg">Where success takes flight...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Courses />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default App;