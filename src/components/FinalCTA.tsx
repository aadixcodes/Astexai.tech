
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FinalCTA = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-10 md:py-20 bg-black dot-bg relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* FAQ Header */}
        <div className={`mb-16 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
          <h2 className="text-lg text-white/60 mb-8">Does Astex Offer Customized Solutions?</h2>
        </div>
        
        {/* Main Content */}
        <div className={`mb-16 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-primary mb-8">Astex</h1>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Turn Your
            <br />
            Dream Into Reality
          </h2>
          
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            We bring your vision to life with creativity
            <br />
            and precision. Let's make it happen.
          </p>
          
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 text-lg font-medium"
          >
            <span>Book A Call</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Footer Navigation */}
        <div className={`border-t border-white/10 pt-12 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`} style={{ transitionDelay: '0.4s' }}>
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#why-us" className="text-white/60 hover:text-white transition-colors">Why Us</a>
            <a href="#mission" className="text-white/60 hover:text-white transition-colors">Mission</a>
            <a href="#works" className="text-white/60 hover:text-white transition-colors">Works</a>
            <a href="#services" className="text-white/60 hover:text-white transition-colors">Services</a>
            <a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a>
          </nav>
          
          <p className="text-white/50 text-sm">
            Copyright Astex. All right reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
