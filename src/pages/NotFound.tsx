import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import FinalCTA from '../components/FinalCTA';


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <section className="relative py-24 bg-black flex items-center justify-center min-h-screen overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#FFB168]/20 to-[#E36D00]/10 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#FFB168]/10 to-[#E36D00]/20 blur-3xl animate-float-delay"></div>
        
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Faded 404 background text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <span className="text-[20rem] font-bold text-white/5 tracking-tighter select-none">404</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Oops! Page Not Found
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-md mx-auto">
            We can't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
                className="relative w-[11rem] px-4 py-2 rounded-[7px] transition-all duration-200  mb-8 group overflow-hidden"
                style={{
                  border: "1px solid rgb(255, 177, 104)",
                  background:
                    "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-medium">Back To Home</span>
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
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
};

export default NotFound;