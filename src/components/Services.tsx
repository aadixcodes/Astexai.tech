
import React from 'react';

const Services = () => {
  const mainServices = [
    {
      title: "Plan & Organize",
      description: "We enhance efficiency by integrating apps and reducing downtime.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      visual: (
        <div className="bg-astex-gray/50 rounded-lg p-6 h-48 flex items-center justify-center">
          <div className="space-y-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-primary rounded"></div>
              <div className="w-3 h-3 bg-white/30 rounded"></div>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-white/30 rounded"></div>
              <div className="w-3 h-3 bg-white/30 rounded"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Custom Projects",
      description: "We created a versatile chatbot that understands diverse questions.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      visual: (
        <div className="bg-astex-gray/50 rounded-lg p-6 h-48 overflow-hidden">
          <div className="text-xs text-green-400 font-mono">
            <div>class ChatBot{'{'}</div>
            <div className="ml-4">address public owner;</div>
            <div className="ml-4">int private response;</div>
            <div className="ml-4">constructor(){'{'}}</div>
            <div className="ml-4">owner = msg.sender;</div>
            <div>{'}'}</div>
            <div>function response(msg){'{'}}</div>
          </div>
        </div>
      )
    },
    {
      title: "Smart Automation",
      description: "We analyze operations and suggest AI solutions to boost efficiency.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      visual: (
        <div className="bg-astex-gray/50 rounded-lg p-6 h-48 flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-white/80 text-sm">Trigger</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <span className="text-white/60 text-sm">Prompts</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <span className="text-white/60 text-sm">Send Email</span>
          </div>
        </div>
      )
    }
  ];

  const additionalServices = [
    { name: "AI-Driven Solutions", icon: "⚡" },
    { name: "Serverless Computing", icon: "💾" },
    { name: "Cloud Integration", icon: "🔗" },
    { name: "Data Insight", icon: "🔒" },
    { name: "Analytics", icon: "📊" },
    { name: "API Security", icon: "🔒" },
    { name: "Real-Time", icon: "⏱" },
    { name: "Ad Targeting", icon: "🎯" }
  ];

  return (
    <section id="services" className="py-24 bg-black dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expertise That Drives Quality
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            With deep expertise, we deliver quality solutions that drive 
            success and exceed industry standards consistently.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="bg-astex-gray/30 border border-white/10 rounded-2xl p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              {service.visual}
              <p className="text-white/70 mt-4">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {additionalServices.map((service, index) => (
            <div 
              key={index}
              className="bg-astex-gray/20 border border-white/10 rounded-lg p-4 text-center card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-2xl mb-2">{service.icon}</div>
              <div className="text-white/80 text-sm">{service.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
