
import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Innovative Approach",
      description: "Look for works that reflect a unique character and differentiate in a crowded marketplace."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 5.88 14 10l5.88-1L21 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 14H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Seamless Experience",
      description: "A seamless user experience across all devices, ensuring every interaction connects with the user."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="m19 8 2 2-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="m21 10-7.5 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Ongoing Partnership",
      description: "Find a new partner easily, not just providers, who offer ongoing support even after the project ends."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-black dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">Why Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience The Benefits
            <br />
            Of Our Expertise
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            That drives impactful gain powerful results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-astex-gray/30 border border-white/10 rounded-2xl p-8 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-astex-gray/50 rounded-lg p-4 w-fit mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center text-white">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-white/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            See Pricing →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
