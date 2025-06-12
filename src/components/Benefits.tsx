
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Clock, ThumbsUp, Users } from 'lucide-react';

const Benefits = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const benefits = [
    {
      title: "Innovative Approach",
      description: "Look for works that reflect a unique character and differentiate in a crowded marketplace.",
      icon: Clock,
      bgClass: "bg-gradient-to-br from-orange-500/20 to-orange-600/30"
    },
    {
      title: "Seamless Experience",
      description: "A seamless user experience across all devices, ensuring every interaction connects with the user.",
      icon: ThumbsUp,
      bgClass: "bg-gradient-to-br from-orange-500/20 to-orange-600/30"
    },
    {
      title: "Ongoing Partnership",
      description: "Find a new partner easily, not just providers, who offer ongoing support even after the project ends.",
      icon: Users,
      bgClass: "bg-gradient-to-br from-orange-500/20 to-orange-600/30"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-black dot-bg border-b border-white/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">Why Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Experience The Benefits
            <br />
            <span className="text-white">Of Our Expertise</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            That drives impactful gain powerful results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className={`bg-astex-gray/30 border border-white/10 rounded-2xl p-8 card-hover scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className={`w-20 h-20 rounded-2xl ${benefit.bgClass} flex items-center justify-center mb-4`}>
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-white/70 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a 
            href="#pricing" 
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
          >
            See Pricing
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
