// import React, {useState, useEffect} from 'react';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import { ArrowDown } from 'lucide-react';

// const Mission = () => {
//   const [ref, isVisible] = useScrollAnimation(0.1);



//   return (
//     <section id="mission" className="py-24 bg-black dot-bg border-b border-white/10 min-h-screen flex items-center" ref={ref}>
      
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className={`scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
//           <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-8">
//             <span className="text-white/80 text-sm">Our Mission</span>
//           </div>
          
//           <h2 className="text-3xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
//             We Drive <span className="text-primary">Businesses</span>
//             <br />
//             To The <span className="text-primary">Forefront</span> Of The Industries
//             <br />
//             Through Comprehensive
//             <br />
//             AI <span className="text-primary">Automation.</span>
//           </h2>
          
//           <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12">
//             First impressions matter. That's why our mission is to create clean, enduring 
//             designs that elevate. First impressions matter. That's why our mission.
//           </p>

//           <div className="mb-16">
//             <a 
//               href="#contact" 
//               className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 font-medium text-lg"
//             >
//               Book A Call
//               <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </a>
//           </div>

//           <div className="flex justify-center">
//             <div className="animate-bounce">
//               <ArrowDown className="w-8 h-8 text-primary" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;



import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowDown } from 'lucide-react';

const Mission = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [loadedWords, setLoadedWords] = useState([]);
  
  const headingLines = [
    "We Drive",
    "Businesses",
    "To The",
    "Forefront",
    "Of The Industries",
    "Through Comprehensive",
    "AI",
    "Automation."
  ];

  useEffect(() => {
    if (isVisible) {
      // Load words one by one with delays only when section is visible
      const timers = headingLines.map((_, index) => {
        return setTimeout(() => {
          setLoadedWords(prev => [...prev, index]);
        }, 200 * index); // 200ms delay between each word
      });

      return () => timers.forEach(timer => clearTimeout(timer));
    } else {
      // Reset when not visible
      setLoadedWords([]);
    }
  }, [isVisible]);

  // Check if a word should be visible
  const isWordLoaded = (index) => loadedWords.includes(index);

  return (
    <section id="mission" className="py-10 md:py-10 bg-black dot-bg flex items-center" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
          {/* Mission Badge */}
          <div className={`inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-8 transition-all duration-500 ${isWordLoaded(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="text-white/80 text-sm">Our Mission</span>
          </div>
          
          {/* Main Heading with Word-by-Word Animation */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
            <span className={`block transition-all duration-500 ${isWordLoaded(0) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
              {headingLines[0]} <span className={`text-primary transition-all duration-500 ${isWordLoaded(1) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>{headingLines[1]}</span>
            </span>
            <span className={`block transition-all duration-500 ${isWordLoaded(2) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
              {headingLines[2]} <span className={`text-primary transition-all duration-500 ${isWordLoaded(3) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>{headingLines[3]}</span> 
              <span className={`ml-4 transition-all duration-500 ${isWordLoaded(4) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
              {headingLines[4]}
            </span>
            </span>
            
            <span className={`block transition-all duration-500 ${isWordLoaded(5) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
              {headingLines[5]}
            </span>
            <span className={`block transition-all duration-500 ${isWordLoaded(6) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
              {headingLines[6]} <span className={`text-primary transition-all duration-500 ${isWordLoaded(7) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>{headingLines[7]}</span>
            </span>
          </h2>
          
          {/* Description Text */}
          <p className={`text-white/70 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12 transition-all duration-500 delay-[${200 * (headingLines.length + 1)}ms] ${loadedWords.length === headingLines.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            First impressions matter. That's why our mission is to create clean, enduring 
            designs that elevate. First impressions matter. That's why our mission.
          </p>

          {/* CTA Button */}
          <div className={`mb-16 transition-all duration-500 delay-[${200 * (headingLines.length + 2)}ms] ${loadedWords.length === headingLines.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* <a 
              href="#contact" 
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 font-medium text-lg"
            >
              Book A Call
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a> */}
            <button
                className="relative w-[10rem] px-4 py-2 rounded-[7px] transition-all duration-200  mb-8 group overflow-hidden"
                style={{
                  border: "1px solid rgb(255, 177, 104)",
                  background:
                    "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-medium">Book A Call</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white transition-transform group-hover:translate-x-1"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>

                {/* Optional hover overlay effect */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
              </button>
          </div>

          {/* Animated Arrow */}
          <div className={`flex justify-center transition-all duration-500 delay-[${200 * (headingLines.length + 3)}ms] ${loadedWords.length === headingLines.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="animate-bounce">
              <ArrowDown className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;