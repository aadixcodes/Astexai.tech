
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Mission = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="mission" className="py-24 bg-black dot-bg border-b border-white/10" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empowering Innovation Through AI
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Our mission is to bridge the gap between cutting-edge AI technology and practical business solutions. 
            We believe in democratizing AI, making it accessible and beneficial for businesses of all sizes. 
            Through our comprehensive services, we aim to transform how organizations operate, innovate, and grow in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
