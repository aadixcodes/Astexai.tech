
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Mission = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="mission" className="py-24 bg-black dot-bg border-b border-white/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
            <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-white/80 text-sm">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bridging Knowledge & Implementation
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Our mission is to create a community where talented individuals can thrive by combining knowledge with practical experience. Astex aims to equip students, freelancers, and budding entrepreneurs with the tools and opportunities they need to excel.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-white">Empowering businesses and individuals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-white">Fostering innovation in the tech industry</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-white">Creating learning opportunities</span>
              </div>
            </div>
          </div>
          
          <div className={`scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'} delay-300`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-transparent p-8 rounded-2xl border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Projects Completed</span>
                    <span className="text-primary font-bold text-xl">150+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Happy Clients</span>
                    <span className="text-primary font-bold text-xl">100+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Team Members</span>
                    <span className="text-primary font-bold text-xl">25+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Years of Experience</span>
                    <span className="text-primary font-bold text-xl">5+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
