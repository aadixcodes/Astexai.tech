// import React, { useState } from 'react';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';

// const RecentWorks = () => {
//   const [ref, isVisible] = useScrollAnimation(0.1);
//   const [activeProject, setActiveProject] = useState('grapho');

//   const projects = {
//     grapho: {
//       title: "Grapho AI",
//       description: "That's Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
//       image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
//       progress: "80%",
//       stat: "47% increase in new customers."
//     },
//     vectraops: {
//       title: "VectraOps",
//       description: "Revolutionary data analytics platform that transforms business intelligence through advanced machine learning algorithms and real-time processing capabilities.",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
//       progress: "75%",
//       stat: "34% increase in online sales."
//     },
//     signum: {
//       title: "Signum",
//       description: "Next-generation digital signature solution that ensures secure document authentication with blockchain technology and enhanced user experience.",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
//       progress: "90%",
//       stat: "47% increase in new customers."
//     }
//   };

//   const stats = [
//     { number: "150k+", label: "Active Users" },
//     { number: "4.9", label: "Rating out of 5" },
//     { number: "99k+", label: "Positive Reviews" },
//     { number: "85k+", label: "Users Satisfied" }
//   ];

//   const currentProject = projects[activeProject];

//   return (
//     <section id="works" className="py-10 md:py-20 bg-black dot-bg" ref={ref}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className={`text-center mb-16 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
//           <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
//             <span className="text-white/80 text-sm">Work That Makes Us Proud</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             Recent Works, Notable Impact
//           </h2>
//         </div>

//         <div className={`flex flex-col lg:flex-row gap-12 items-center mb-20 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
//           {/* Project Image - Mobile First (top) */}
//           <div className="relative w-full lg:hidden">
//             <div className="bg-astex-gray/30 border border-white/10 rounded-2xl p-8 card-hover">
//               <div className="aspect-video bg-gradient-to-br from-astex-gray to-black rounded-lg overflow-hidden relative">
//                 <img 
//                   src={currentProject.image}
//                   alt={currentProject.title}
//                   className="w-full h-full object-cover transition-all duration-500"
//                 />
//                 <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-8 h-8 bg-white/20 rounded"></div>
//                     <span className="text-white font-medium">{currentProject.title}</span>
//                   </div>
//                 </div>
//                 <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
//                   {currentProject.progress}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Project Details */}
//           <div className="space-y-8 w-full lg:w-1/2">
//             <div 
//               className={`border-l-4 pl-6 cursor-pointer transition-all duration-300 ${
//                 activeProject === 'grapho' ? 'border-primary' : 'border-white/20'
//               }`}
//               onClick={() => setActiveProject('grapho')}
//             >
//               <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-300 ${
//                 activeProject === 'grapho' ? 'text-white text-3xl md:text-4xl' : 'text-white/60'
//               }`}>
//                 Grapho AI
//               </h3>
//               {activeProject === 'grapho' ? (
//                 <p className="text-white/70 text-lg animate-fade-in">
//                   That's Why We Leverage AI to Create Impactful, Lasting 
//                   Experiences that Engage, and Transform Every Interaction.
//                 </p>
//               ) : (
//                 <p className="text-white/50">{projects.grapho.stat}</p>
//               )}
//             </div>

//             <div 
//               className={`border-l-4 pl-6 cursor-pointer transition-all duration-300 ${
//                 activeProject === 'vectraops' ? 'border-primary' : 'border-white/20'
//               }`}
//               onClick={() => setActiveProject('vectraops')}
//             >
//               <h4 className={`text-xl md:text-2xl font-semibold mb-2 transition-all duration-300 ${
//                 activeProject === 'vectraops' ? 'text-white text-2xl md:text-3xl' : 'text-white/60'
//               }`}>
//                 VectraOps
//               </h4>
//               {activeProject === 'vectraops' ? (
//                 <p className="text-white/70 text-lg animate-fade-in">
//                   Revolutionary data analytics platform that transforms business intelligence through advanced machine learning algorithms and real-time processing capabilities.
//                 </p>
//               ) : (
//                 <p className="text-white/50">{projects.vectraops.stat}</p>
//               )}
//             </div>

//             <div 
//               className={`border-l-4 pl-6 cursor-pointer transition-all duration-300 ${
//                 activeProject === 'signum' ? 'border-primary' : 'border-white/20'
//               }`}
//               onClick={() => setActiveProject('signum')}
//             >
//               <h4 className={`text-xl md:text-2xl font-semibold mb-2 transition-all duration-300 ${
//                 activeProject === 'signum' ? 'text-white text-2xl md:text-3xl' : 'text-white/60'
//               }`}>
//                 Signum
//               </h4>
//               {activeProject === 'signum' ? (
//                 <p className="text-white/70 text-lg animate-fade-in">
//                   Next-generation digital signature solution that ensures secure document authentication with blockchain technology and enhanced user experience.
//                 </p>
//               ) : (
//                 <p className="text-white/50">{projects.signum.stat}</p>
//               )}
//             </div>
//           </div>

//           {/* Project Image - Desktop (right side) */}
//           <div className="relative w-full hidden lg:block lg:w-1/2">
//             <div className="bg-[#141414] border border-white/10 rounded-2xl p-8">
//               <div className="aspect-video bg-gradient-to-br from-astex-gray to-black rounded-lg overflow-hidden relative">
//                 <img 
//                   src={currentProject.image}
//                   alt={currentProject.title}
//                   className="w-full h-full object-cover transition-all duration-500"
//                 />
//                 <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-8 h-8 bg-white/20 rounded"></div>
//                     <span className="text-white font-medium">{currentProject.title}</span>
//                   </div>
//                 </div>
//                 <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
//                   {currentProject.progress}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Statistics */}
//         <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
//               <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
//               <div className="text-white/60">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RecentWorks;


import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const RecentWorks = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [activeProject, setActiveProject] = useState('forexcrypto');

  const projects = {
    forexcrypto: {
      title: "ForexCrypto",
      description: "Experience professional forex trading with AI-powered signals, low spreads, and real-time market analytics for smarter financial moves.",
      image: "/assets/1.JPG",
      progress: "85%",
      stat: "52% increase in client profits."
    },
    ocvision: {
      title: "Ocvision",
      description: "Specialized in e-commerce photography, video, and audio production, delivering high-impact visuals and engaging content for brand growth.",
      image: "/assets/2.JPG",
      progress: "78%",
      stat: "41% boost in product engagement."
    },
    airyyrides: {
      title: "AiRYYRIDES",
      description: "Reimagining urban mobility with a fleet of eco-friendly bikes, delivering safe, stylish, and adventure-packed rides across Indore city.",
      image: "/assets/3.JPG",
      progress: "82%",
      stat: "36% rise in new ride bookings."
    }
  };

  const stats = [
    { number: "25+", label: "Projects Completed" },
    { number: "10+", label: "Active Clients" },
    { number: "4.8", label: "Average Rating" },
    { number: "20+", label: "Team Members" }
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

        <div className={`flex flex-col lg:flex-row gap-12 items-center mb-20 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
          {/* Project Image - Mobile First */}
          <div className="relative w-full lg:hidden">
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

          {/* Project Details */}
          <div className="space-y-8 w-full lg:w-1/2">
            {Object.keys(projects).map((key) => (
              <div
                key={key}
                className={`border-l-4 pl-6 cursor-pointer transition-all duration-300 ${
                  activeProject === key ? 'border-primary' : 'border-white/20'
                }`}
                onClick={() => setActiveProject(key)}
              >
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-300 ${
                    activeProject === key ? 'text-white text-3xl md:text-4xl' : 'text-white/60'
                  }`}
                >
                  {projects[key].title}
                </h3>
                {activeProject === key ? (
                  <p className="text-white/70 text-lg animate-fade-in">
                    {projects[key].description}
                  </p>
                ) : (
                  <p className="text-white/50">{projects[key].stat}</p>
                )}
              </div>
            ))}
          </div>

          {/* Project Image - Desktop */}
          <div className="relative w-full hidden lg:block lg:w-1/2">
            <div className="bg-[#141414] border border-white/10 rounded-2xl p-8">
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
