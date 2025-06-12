
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Benefits = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const benefits = [
    {
      title: "Expertise",
      description: "Our team comprises skilled professionals with diverse backgrounds in AI, design, and development.",
      icon: "⚡"
    },
    {
      title: "Innovation-Driven",
      description: "We constantly explore new technologies and creative strategies to deliver cutting-edge solutions.",
      icon: "🚀"
    },
    {
      title: "Tailored Solutions",
      description: "We customize our services to meet the unique needs of each client.",
      icon: "🎯"
    },
    {
      title: "Reliable Support",
      description: "Our dedicated team offers consistent guidance and support throughout your project journey.",
      icon: "🛡️"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-black dot-bg border-b border-white/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">Why Choose Astex</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expertise That Drives Quality
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We bring together innovation, expertise, and dedication to deliver exceptional results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-astex-gray/30 border border-white/10 rounded-2xl p-8 text-center card-hover scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
