
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking on links
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Astex</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#why-us" className="nav-link text-white/80 hover:text-white transition-colors">Why Us</a>
            <a href="#mission" className="nav-link text-white/80 hover:text-white transition-colors">Mission</a>
            <a href="#works" className="nav-link text-white/80 hover:text-white transition-colors">Works</a>
            <a href="#services" className="nav-link text-white/80 hover:text-white transition-colors">Services</a>
            
            {/* Pages Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="nav-link text-white/80 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>Pages</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl z-50">
                  <a href="#pricing" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors">Pricing</a>
                  <a href="#testimonials" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors">Testimonials</a>
                  <a href="#team" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors">Team</a>
                  <a href="#faq" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors">FAQ</a>
                  <a href="#contact" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors">Contact</a>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Let's Talk</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/80 hover:text-white transition-colors z-50 relative"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-sm border-l border-white/10 z-50 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#why-us" 
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors"
                onClick={handleMobileLinkClick}
              >
                Why Us
              </a>
              <a 
                href="#mission" 
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors"
                onClick={handleMobileLinkClick}
              >
                Mission
              </a>
              <a 
                href="#works" 
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors"
                onClick={handleMobileLinkClick}
              >
                Works
              </a>
              <a 
                href="#services" 
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors"
                onClick={handleMobileLinkClick}
              >
                Services
              </a>
              <a 
                href="#pricing" 
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors"
                onClick={handleMobileLinkClick}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors"
                onClick={handleMobileLinkClick}
              >
                Testimonials
              </a>
              <a 
                href="#team" 
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors"
                onClick={handleMobileLinkClick}
              >
                Team
              </a>
              <a 
                href="#faq" 
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors"
                onClick={handleMobileLinkClick}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors"
                onClick={handleMobileLinkClick}
              >
                Contact
              </a>
              
              <div className="pt-6">
                <a 
                  href="#contact" 
                  className="block w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all duration-300 text-center"
                  onClick={handleMobileLinkClick}
                >
                  Let's Talk
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
