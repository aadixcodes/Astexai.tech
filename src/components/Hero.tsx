
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-black dot-bg flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-astex-gray to-black opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center space-x-2 bg-astex-gray/50 border border-green-500/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white/80 text-sm">Available now, only 3 spots left</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-primary">AI Development</span>
              <br />
              <span className="text-white">Beyond ✦ Limits.</span>
              <br />
              <span className="text-primary">Amplified With AI.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 animate-fade-in">
            Design services at your fingertips. Pause or cancel anytime.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in">
            <a 
              href="#services" 
              className="btn-primary inline-flex items-center space-x-2 text-lg"
            >
              <span>Learn More</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Partner Logos */}
          <div className="mt-24 animate-fade-in">
            <p className="text-white/50 text-sm mb-8">Our services are featured on</p>
            <div className="flex items-center justify-center space-x-12 opacity-50">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded"></div>
                <span className="text-white font-medium">Optimal</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded"></div>
                <span className="text-white font-medium">Zapfast</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded"></div>
                <span className="text-white font-medium">Grapho</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded"></div>
                <span className="text-white font-medium">Signum.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
