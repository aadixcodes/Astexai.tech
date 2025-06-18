import React from 'react';
import { useNavigate } from "react-router-dom";


const Contact = () => {

  
  const navigate = useNavigate();

const handleRedirect = () => {
  navigate("/contact");
};


  return (
    <section id="contact" className="py-8 md:py-16 bg-black dot-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Get in Touch
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
          Want to transform your business with AI and automation? Contact ASTEX today and let's build something amazing together!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
          <div className="bg-astex-gray/30 border border-white/10 rounded-xl p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto">
              <span className="text-xl md:text-2xl">📧</span>
            </div>
            <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">Email</h3>
            <p className="text-white/70 text-xs md:text-sm break-words overflow-hidden">
              <a href="mailto:astexstf.contact@gmail.com" className="hover:text-primary transition-colors">
                astexstf.contact@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-astex-gray/30 border border-white/10 rounded-xl p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto">
              <span className="text-xl md:text-2xl">🌐</span>
            </div>
            <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">Website</h3>
            <p className="text-white/70 text-xs md:text-sm break-words overflow-hidden">
              <a href="https://astexai.tech" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                astexai.tech
              </a>
            </p>
          </div>

          <div className="bg-astex-gray/30 border border-white/10 rounded-xl p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto">
              <span className="text-xl md:text-2xl">📞</span>
            </div>
            <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">Phone</h3>
            <p className="text-white/70 text-xs md:text-sm break-words overflow-hidden">
              <a href="tel:9755562101" className="hover:text-primary transition-colors">
                +91 9755562101
              </a>
            </p>
          </div>

          <div className="bg-astex-gray/30 border border-white/10 rounded-xl p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto">
              <span className="text-xl md:text-2xl">📍</span>
            </div>
            <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">Location</h3>
            <p className="text-white/70 text-xs md:text-sm break-words overflow-hidden">
              Indore, India
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <button
            onClick={handleRedirect}

            className="relative w-[13rem] px-4 py-2 rounded-[7px] transition-all duration-200 mb-8 group overflow-hidden"
            style={{
              border: "1px solid rgb(255, 177, 104)",
              background: "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
            }}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-white font-medium">Start Your Project</span>
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
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
          </button>
          
          <p className="text-white/60 text-sm">
            Join us in transforming ideas into impactful realities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;