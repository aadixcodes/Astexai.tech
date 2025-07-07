import React from 'react';

const Services = () => {
  const mainServices = [
    {
      title: "Plan & Organize",
      description: "We enhance efficiency by integrating apps and reducing downtime.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      visual: (
        <div className="bg-astex rounded-lg  h-48 flex items-center justify-center relative overflow-hidden">
          <img 
            src="/assets/11.png" 
            alt="Plan & Organize"
            className="w-[100%] h-[100%] object-cover object-center"
            loading="lazy"
          />
        </div>
      )
    },
    {
      title: "Custom Projects",
      description: "We created a versatile chatbot that understands diverse questions.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      visual: (
        <div className="bg-[#090909] rounded-lg h-48 overflow-hidden relative">
          <img 
            src="/assets/12.gif" 
            alt="Custom Projects"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      )
    },
    {
      title: "Smart Automation",
      description: "We analyze operations and suggest AI solutions to boost efficiency.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      visual: (
        <div className="bg-[#090909] rounded-lg  h-48 flex flex-col space-y-3 relative">
          <img 
            src="/assets/13.png" 
            alt="Smart Automation"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      )
    }
  ];

  const additionalServices = [
    { 
      name: "AI Agent Development", 
      icon: "https://framerusercontent.com/images/sPmibGCLfmQVJHX0tlJqMt1ZOb8.svg" 
    },
    { 
      name: "Website Development", 
      icon: "https://framerusercontent.com/images/TpMsQ4JuQXH87CLdEKVrih7OjaY.svg" 
    },
    { 
      name: "App Development", 
      icon: "https://framerusercontent.com/images/fGRMJzZ1klCadiGWxHOwXOZ9qK0.svg" 
    },
    { 
      name: "Graphic Design", 
      icon: "https://framerusercontent.com/images/OT81xXSmHrXj05Gjwm0H4r7m0L8.svg" 
    },
    { 
      name: "Startup Ideation", 
      icon: "https://framerusercontent.com/images/0EJSat3AKzJRdD6xxuuiwMg63y4.svg" 
    },
    { 
      name: "Influencer Marketing", 
      icon: "https://framerusercontent.com/images/FuYRMfKxtC6kJDq6v671cgsNGY.svg" 
    },
    { 
      name: "Brand Collaborations", 
      icon: "https://framerusercontent.com/images/QKgOGYR4rTNLO3KDEZLPDU6wvU.svg" 
    },
    { 
      name: "Data Analytics", 
      icon: "https://framerusercontent.com/images/Hy7hoU7QAz66ago0Fs6owYjA.svg" 
    }
  ];

  return (
    <section id="services" className="py-10 md:py-20 bg-black dot-bg">
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
              className="bg-[#141414] border border-white/10 rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              {service.visual}
              <p className="text-white/70 mt-4">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Services - Updated Design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {additionalServices.map((service, index) => (
            <div 
              key={index}
              className="animate-fade-in rounded-[17px] p-px"
              style={{ 
                animationDelay: `${index * 0.05}s`,
                background: 'linear-gradient(180deg, rgb(33, 33, 33) 0%, rgb(17, 17, 17) 100%)',
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 33px 0px'
              }}
            >
              <div 
                className="w-full h-full rounded-[16px] p-3 text-center flex flex-row items-center justify-center gap-2"
                style={{
                  background: 'radial-gradient(56% 127% at 6% -53.1%, rgb(33, 33, 33) 0%, rgb(17, 17, 17) 100%)'
                }}
              >
                {/* Icon Container */}
                <div className="flex justify-center">
                  <div 
                    className="w-8 h-8 rounded-[40px] p-px flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgb(61, 61, 61) 0%, rgb(17, 17, 17) 100%)'
                    }}
                  >
                    <div 
                      className="w-full h-full rounded-[40px] flex items-center justify-center"
                      style={{
                        background: 'radial-gradient(68.03% 69.39% at 18.33% 15.83%, rgb(33, 33, 33) 47.49%, rgb(17, 17, 17) 100%)'
                      }}
                    >
                      <div className="w-4 h-4">
                        <img 
                          src={service.icon} 
                          alt={service.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-[#dedede] text-base font-medium">{service.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;