// import React, { useState, useEffect } from 'react';

// const Hero = () => {
//   const [loadedWords, setLoadedWords] = useState([]);
//   const headingWords = [
//     "Next-Gen",
//     "Websites",
//     "Bold Ideas.",
//     "Built To Convert."
//   ];

//   const redirectToWhatsApp = () => {
//     const phoneNumber = '+919098343508'; // Your WhatsApp number
//     const message = 'Hello ASTEX, I want to get started with your services!';
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(url, '_blank');
//   };
  

//   useEffect(() => {
//     // Load words one by one with delays
//     const timers = headingWords.map((_, index) => {
//       return setTimeout(() => {
//         setLoadedWords(prev => [...prev, index]);
//       },400 * index); // 300ms delay between each word
//     });

//     return () => timers.forEach(timer => clearTimeout(timer));
//   }, []);

//   // Check if a word should be visible
//   const isWordLoaded = (index) => loadedWords.includes(index);

//   return (
//     <section className="min-h-screen bg-black dot-bg flex items-center justify-center relative overflow-hidden px-4">
//       {/* Enhanced Background Pattern */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-astex-gray/30 to-black opacity-70"></div>
//       <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      
//       <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
//         <div className="text-center">
//           {/* Availability Badge */}
//           <div className={`inline-flex items-center space-x-2 bg-astex-gray/50 border rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${loadedWords.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//             <span className="text-white/80 text-xs sm:text-sm">Available now, for brands that demand more</span>
//           </div>

//           {/* Main Heading */}
//           <div className="space-y-4 mb-8 px-2">
//             <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
//               <span className={`text-primary block transition-all duration-500 ${isWordLoaded(0) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
//                 {headingWords[0]}
//               </span>
//               <span className="text-white block">
//                 <span className={`transition-all duration-500 ${isWordLoaded(1) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
//                   {headingWords[1]}
//                 </span>
//                 <span className="inline-flex items-center mx-2 sm:mx-4">
//                   <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className={`text-white transition-all duration-500 ${isWordLoaded(1) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
//                     <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
//                   </svg>
//                 </span>
//                 <span className={`transition-all duration-500 ${isWordLoaded(2) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
//                   {headingWords[2]}
//                 </span>
//               </span>
//               <span className={`text-primary block transition-all duration-500 ${isWordLoaded(3) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
//                 {headingWords[3]}
//               </span>
//             </h1>
//           </div>

//           {/* Subtitle */}
//           <p className={`text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 px-2 transition-all duration-500 delay-[${300 * headingWords.length}ms] ${loadedWords.length === headingWords.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//             Design stunning, responsive, high-speed websites. Launch or upgrade anytime.
//           </p>

//           {/* CTA Button */}
//           <div className={`transition-all duration-500 delay-[${300 * (headingWords.length + 1)}ms] ${loadedWords.length === headingWords.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//             <button
//              onClick={redirectToWhatsApp}
//                 className="relative w-[10rem] px-4 py-2 rounded-[7px] transition-all duration-200  mb-8 group overflow-hidden"
//                 style={{
//                   border: "1px solid rgb(255, 177, 104)",
//                   background:
//                     "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
//                 }}
//               >
//                 <div className="flex items-center justify-center gap-2">
//                   <span className="text-white font-medium">Get Started</span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="text-white transition-transform group-hover:translate-x-1"
//                   >
//                     <line x1="7" y1="17" x2="17" y2="7"></line>
//                     <polyline points="7 7 17 7 17 17"></polyline>
//                   </svg>
//                 </div>

//                 {/* Optional hover overlay effect */}
//                 <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
//               </button>
//           </div>

//           {/* Partner Logos */}
//           <div className={`mt-12 sm:mt-24 transition-all duration-500 delay-[${300 * (headingWords.length + 2)}ms] ${loadedWords.length === headingWords.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//             <p className="text-white/50 text-xs sm:text-sm mb-6 sm:mb-8">Our services are featured on</p>
//             <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-50">
//               <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
//                 <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded flex items-center justify-center">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
//                     <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
//                   </svg>
//                 </div>
//                 <span className="text-white text-sm sm:text-base font-medium">Optimal</span>
//               </div>
//               <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
//                 <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded flex items-center justify-center">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
//                     <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
//                   </svg>
//                 </div>
//                 <span className="text-white text-sm sm:text-base font-medium">Zapfast</span>
//               </div>
//               <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
//                 <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded flex items-center justify-center">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
//                     <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z"/>
//                   </svg>
//                 </div>
//                 <span className="text-white text-sm sm:text-base font-medium">Grapho</span>
//               </div>
//               <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
//                 <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded flex items-center justify-center">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white">
//                     <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2Z"/>
//                   </svg>
//                 </div>
//                 <span className="text-white text-sm sm:text-base font-medium">Signum.</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Smartphone, 
  Bot, 
  Megaphone, 
  PenTool,
  Rocket,
  ArrowRight
} from 'lucide-react';

const Hero = () => {
  const [loadedWords, setLoadedWords] = useState([]);
  const headingWords = [
    "Digital",
    "Solutions",
    "That Drive",
    "Real Results."
  ];

  const redirectToWhatsApp = () => {
    const phoneNumber = '+919098343508'; // Your WhatsApp number
    const message = 'Hello ASTEX, I want to get started with your services!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  

  useEffect(() => {
    // Load words one by one with delays
    const timers = headingWords.map((_, index) => {
      return setTimeout(() => {
        setLoadedWords(prev => [...prev, index]);
      }, 400 * index); // 400ms delay between each word
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  // Check if a word should be visible
  const isWordLoaded = (index) => loadedWords.includes(index);

  // Featured services data
  const featuredServices = [
    {
      name: "Website Development",
      icon: <Code2 className="w-5 h-5" />,
      color: "text-blue-400"
    },
    {
      name: "App Development",
      icon: <Smartphone className="w-5 h-5" />,
      color: "text-purple-400"
    },
    {
      name: "AI Agents",
      icon: <Bot className="w-5 h-5" />,
      color: "text-emerald-400"
    },
    {
      name: "Influencer Marketing",
      icon: <Megaphone className="w-5 h-5" />,
      color: "text-pink-400"
    },
    {
      name: "Graphics Design",
      icon: <PenTool className="w-5 h-5" />,
      color: "text-yellow-400"
    }
  ];

  return (
    <section className="min-h-screen mt-16 bg-black dot-bg flex items-center justify-center relative overflow-hidden px-4">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-astex-gray/30 to-black opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Availability Badge */}
          <div className={`inline-flex items-center space-x-2 bg-astex-gray/50 border rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${loadedWords.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white/80 text-xs sm:text-sm">Transforming brands with digital excellence</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8 px-2">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              <span className={`text-primary block transition-all duration-500 ${isWordLoaded(0) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
                {headingWords[0]}
              </span>
              <span className="text-white block">
                <span className={`transition-all duration-500 ${isWordLoaded(1) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
                  {headingWords[1]}
                </span>
                <span className="inline-flex items-center mx-2 sm:mx-4">
                  <Rocket className={`w-8 h-8 text-primary transition-all duration-500 ${isWordLoaded(1) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`} />
                </span>
                <span className={`transition-all duration-500 ${isWordLoaded(2) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
                  {headingWords[2]}
                </span>
              </span>
              <span className={`text-primary block transition-all duration-500 ${isWordLoaded(3) ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>
                {headingWords[3]}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className={`text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 px-2 transition-all duration-500 delay-[${300 * headingWords.length}ms] ${loadedWords.length === headingWords.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            We craft high-performance websites, apps, and AI solutions combined with strategic influencer marketing to amplify your brand's digital presence.
          </p>

          {/* CTA Button */}
          <div className={`transition-all duration-500 delay-[${300 * (headingWords.length + 1)}ms] ${loadedWords.length === headingWords.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={redirectToWhatsApp}
              className="relative w-[10rem] px-4 py-2 rounded-[7px] transition-all duration-200 mb-8 group overflow-hidden"
              style={{
                border: "1px solid rgb(255, 177, 104)",
                background: "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-white font-medium">Get Started</span>
                <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </button>
          </div>

          {/* Featured Services */}
          <div className={`mt-12 sm:mt-24 transition-all duration-500 delay-[${300 * (headingWords.length + 2)}ms] ${loadedWords.length === headingWords.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-white/50 text-xs sm:text-sm mb-6 sm:mb-8">Our Featured Services</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
              {featuredServices.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 hover:opacity-80 transition-opacity bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                >
                  <div className={`${service.color}`}>
                    {service.icon}
                  </div>
                  <span className="text-white text-sm sm:text-base font-medium">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;