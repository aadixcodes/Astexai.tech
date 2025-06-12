
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";

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
      
      <section className="py-24 bg-black flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white font-bold mb-6">Page Not Found</h1>
          
          <div className="mb-8">
            <span className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-white/20 leading-none">
              404
            </span>
          </div>
          
          <p className="text-white/70 text-lg mb-12 max-w-md mx-auto">
            We can't find the page you're looking for.
          </p>
          
          <a 
            href="/" 
            className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <span>Back to Home</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
