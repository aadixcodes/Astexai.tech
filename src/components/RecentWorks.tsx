
import React from 'react';

const RecentWorks = () => {
  const projects = [
    {
      title: "Grapho AI",
      description: "That's Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
      metrics: ["34% increase in online sales.", "47% increase in new customers."]
    }
  ];

  const stats = [
    { number: "150k+", label: "Active Users" },
    { number: "4.9", label: "Rating out of 5" },
    { number: "99k+", label: "Positive Reviews" },
    { number: "85k+", label: "Users Satisfied" }
  ];

  return (
    <section id="works" className="py-24 bg-black dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">Work That Makes Us Proud</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Recent Works, Notable Impact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Project Details */}
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-3xl font-bold text-white mb-4">Grapho AI</h3>
              <p className="text-white/70 text-lg mb-6">
                That's Why We Leverage AI to Create Impactful, Lasting 
                Experiences that Engage, and Transform Every Interaction.
              </p>
            </div>

            <div className="border-l-2 border-white/20 pl-6">
              <h4 className="text-xl font-semibold text-white mb-2">VectraOps</h4>
              <p className="text-white/70">34% increase in online sales.</p>
            </div>

            <div className="border-l-2 border-white/20 pl-6">
              <h4 className="text-xl font-semibold text-white mb-2">Signum</h4>
              <p className="text-white/70">47% increase in new customers.</p>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative">
            <div className="bg-astex-gray/30 border border-white/10 rounded-2xl p-8 card-hover">
              <div className="aspect-video bg-gradient-to-br from-astex-gray to-black rounded-lg overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                  alt="Team working on project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded"></div>
                    <span className="text-white font-medium">Grapho</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
