
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowDown } from 'lucide-react';

const Mission = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="mission" className="py-24 bg-black dot-bg border-b border-white/10 min-h-screen flex items-center" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="text-white/80 text-sm">Our Mission</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            We Drive <span className="text-primary">Businesses</span>
            <br />
            To The <span className="text-primary">Forefront</span> Of The Industries
            <br />
            Through Comprehensive
            <br />
            AI <span className="text-primary">Automation.</span>
          </h2>
          
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
            First impressions matter. That's why our mission is to create clean, enduring 
            designs that elevate. First impressions matter. That's why our mission.
          </p>

          <div className="mb-16">
            <a 
              href="#contact" 
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 font-medium text-lg"
            >
              Book A Call
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="flex justify-center">
            <div className="animate-bounce">
              <ArrowDown className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
