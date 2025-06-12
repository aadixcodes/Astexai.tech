
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Astex</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#why-us" className="nav-link">Why Us</a>
            <a href="#mission" className="nav-link">Mission</a>
            <a href="#works" className="nav-link">Works</a>
            <a href="#services" className="nav-link">Services</a>
            
            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="nav-link flex items-center space-x-1"
              >
                <span>Pages</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-astex-gray border border-white/10 rounded-lg shadow-lg z-50">
                  <a href="#pricing" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5">Pricing</a>
                  <a href="#testimonials" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5">Testimonials</a>
                  <a href="#team" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5">Team</a>
                  <a href="#faq" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5">FAQ</a>
                  <a href="#contact" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5">Contact</a>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <a 
              href="#contact" 
              className="btn-primary flex items-center space-x-2"
            >
              <span>Let's Talk</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
