
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black dot-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Get in Touch
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
          Want to transform your business with AI and automation? Contact ASTEX today and let's build something amazing together!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-astex-gray/30 border border-white/10 rounded-xl p-6 card-hover">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-white/70 text-sm">astexstf.contact@gmail.com</p>
          </div>

          <div className="bg-astex-gray/30 border border-white/10 rounded-xl p-6 card-hover">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Website</h3>
            <p className="text-white/70 text-sm">astexai.tech</p>
          </div>

          <div className="bg-astex-gray/30 border border-white/10 rounded-xl p-6 card-hover">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <p className="text-white/70 text-sm">9755562101</p>
          </div>

          <div className="bg-astex-gray/30 border border-white/10 rounded-xl p-6 card-hover">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-white/70 text-sm">Indore, India</p>
          </div>
        </div>

        <div className="space-y-6">
          <a 
            href="mailto:astexstf.contact@gmail.com" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          <p className="text-white/60 text-sm">
            Join us in transforming ideas into impactful realities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
