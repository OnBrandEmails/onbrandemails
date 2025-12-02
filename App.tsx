import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import SocialProof from './SocialProof';
import Features from './Features';
import GeminiIdeator from './GeminiIdeator';
import ContactForm from './ContactForm';
import Footer from './Footer';
import VideoTestimonials from './VideoTestimonials';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark font-sans selection:bg-brand-accent selection:text-white">
      
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-brand-dark/5 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-display font-bold text-brand-dark">
            OnBrand<span className="text-brand-accent">Emails</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#results" className="text-sm font-medium text-gray-600 hover:text-brand-dark transition">Results</a>
            <a href="#demo" className="text-sm font-medium text-gray-600 hover:text-brand-dark transition">AI Strategy</a>
            <a href="#audit" className="px-5 py-2 bg-brand-dark text-white font-bold text-sm rounded hover:bg-brand-accent transition-colors">
              Book Audit
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <SocialProof />
        <Features />
        <VideoTestimonials />
        <GeminiIdeator />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
