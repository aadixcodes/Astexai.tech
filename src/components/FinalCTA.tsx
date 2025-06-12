
import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-black dot-bg border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary mb-8">Astex</h1>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Let's Turn Your
          <br />
          Dream Into Reality
        </h2>
        
        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
          We bring your vision to life with creativity
          <br />
          and precision. Let's make it happen.
        </p>
        
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
    </section>
  );
};

export default FinalCTA;
