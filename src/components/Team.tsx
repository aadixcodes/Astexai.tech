
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      role: "Business Development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Rohit Kumar",
      role: "Tech Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Anish Verma",
      role: "Infrastructure",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="team" className="py-24 bg-black dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">Our Creative Minds</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The People Behind The Magic
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-astex-gray/30 border border-white/10 rounded-2xl p-6 text-center card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-32 h-32 rounded-2xl mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-white/70">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
