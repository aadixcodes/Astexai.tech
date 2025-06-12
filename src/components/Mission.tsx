
import React from 'react';

const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-black dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">Our Mission</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in">
            We Drive <span className="text-primary">Businesses</span>
            <br />
            To The <span className="text-primary">Forefront</span> Of The Industries
            <br />
            Through Comprehensive
            <br />
            AI <span className="text-primary">Automation.</span>
          </h2>

          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-12 animate-fade-in">
            First impressions matter. That's why our mission is to create clean, enduring 
            designs that elevate. First impressions matter. That's why our mission.
          </p>

          <div className="animate-fade-in">
            <a 
              href="#contact" 
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Book A Call</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Arrow Down */}
          <div className="mt-24 animate-bounce">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto text-primary">
              <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
