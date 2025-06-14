
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const RecentWorks = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [activeProject, setActiveProject] = useState('grapho');

  const projects = {
    grapho: {
      title: "Grapho AI",
      description: "That's Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      progress: "80%"
    },
    vectraops: {
      title: "VectraOps",
      description: "Revolutionary data analytics platform that transforms business intelligence through advanced machine learning algorithms and real-time processing capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      progress: "75%"
    },
    signum: {
      title: "Signum",
      description: "Next-generation digital signature solution that ensures secure document authentication with blockchain technology and enhanced user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      progress: "90%"
    }
  };

  const stats = [
    { number: "150k+", label: "Active Users" },
    { number: "4.9", label: "Rating out of 5" },
    { number: "99k+", label: "Positive Reviews" },
    { number: "85k+", label: "Users Satisfied" }
  ];

  const currentProject = projects[activeProject];

  return (
    <section id="works" className="py-10 md:py-20 bg-black dot-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">Work That Makes Us Proud</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Recent Works, Notable Impact
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
          {/* Project Details */}
          <div className="space-y-8">
            <div 
              className={`border-l-4 pl-6 cursor-pointer transition-all duration-300 ${
                activeProject === 'grapho' ? 'border-primary' : 'border-white/20'
              }`}
              onClick={() => setActiveProject('grapho')}
            >
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-300 ${
                activeProject === 'grapho' ? 'text-white text-3xl md:text-4xl' : 'text-white/60'
              }`}>
                Grapho AI
              </h3>
              {activeProject === 'grapho' && (
                <p className="text-white/70 text-lg animate-fade-in">
                  That's Why We Leverage AI to Create Impactful, Lasting 
                  Experiences that Engage, and Transform Every Interaction.
                </p>
              )}
            </div>

            <div 
              className={`border-l-4 pl-6 cursor-pointer transition-all duration-300 ${
                activeProject === 'vectraops' ? 'border-primary' : 'border-white/20'
              }`}
              onClick={() => setActiveProject('vectraops')}
            >
              <h4 className={`text-xl md:text-2xl font-semibold mb-2 transition-all duration-300 ${
                activeProject === 'vectraops' ? 'text-white text-2xl md:text-3xl' : 'text-white/60'
              }`}>
                VectraOps
              </h4>
              {activeProject === 'vectraops' ? (
                <p className="text-white/70 text-lg animate-fade-in">
                  Revolutionary data analytics platform that transforms business intelligence through advanced machine learning algorithms and real-time processing capabilities.
                </p>
              ) : (
                <p className="text-white/50">34% increase in online sales.</p>
              )}
            </div>

            <div 
              className={`border-l-4 pl-6 cursor-pointer transition-all duration-300 ${
                activeProject === 'signum' ? 'border-primary' : 'border-white/20'
              }`}
              onClick={() => setActiveProject('signum')}
            >
              <h4 className={`text-xl md:text-2xl font-semibold mb-2 transition-all duration-300 ${
                activeProject === 'signum' ? 'text-white text-2xl md:text-3xl' : 'text-white/60'
              }`}>
                Signum
              </h4>
              {activeProject === 'signum' ? (
                <p className="text-white/70 text-lg animate-fade-in">
                  Next-generation digital signature solution that ensures secure document authentication with blockchain technology and enhanced user experience.
                </p>
              ) : (
                <p className="text-white/50">47% increase in new customers.</p>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="relative">
            <div className="bg-astex-gray/30 border border-white/10 rounded-2xl p-8 card-hover">
              <div className="aspect-video bg-gradient-to-br from-astex-gray to-black rounded-lg overflow-hidden relative">
                <img 
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded"></div>
                    <span className="text-white font-medium">{currentProject.title}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentProject.progress}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
