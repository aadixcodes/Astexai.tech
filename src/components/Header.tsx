import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-4">
        {/* Main Nav Container */}
        <div 
          className="relative  rounded-[40px] overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(33, 33, 33, 1) 0%, rgba(33, 33, 33, 0.4) 100%)'
          }}
        >
          {/* Inner Container */}
          <div className="bg-[#050505] border-gray border-2 rounded-[40px] px-2">
            <div className="flex items-center justify-between h-16 px-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/" className="text-2xl font-bold text-white">
                  <img 
                    src="/assets/logo1.png" 
                    alt="Logo" 
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#why-us" className="text-[#afafaf] hover:text-white transition-colors">Why Us</a>
                <a href="#mission" className="text-[#afafaf] hover:text-white transition-colors">Mission</a>
                <a href="#works" className="text-[#afafaf] hover:text-white transition-colors">Works</a>
                <a href="#services" className="text-[#afafaf] hover:text-white transition-colors">Services</a>
                
                {/* Pages Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-[#afafaf] hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <span>Pages</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#050505] backdrop-blur-sm border border-white/10 rounded-lg shadow-xl z-50">
                      <a href="/contact" className="block px-4 py-3 text-[#afafaf] hover:text-white hover:bg-white/5 transition-colors">Contact Us</a>
                      <a href="/terms" className="block px-4 py-3 text-[#afafaf] hover:text-white hover:bg-white/5 transition-colors">Terms & Conditions</a>
                    </div>
                  )}
                </div>
              </nav>

              {/* Desktop CTA Button */}
              <div className="hidden md:flex items-center">
                <a 
                  href="/contact" 
                  className="relative overflow-hidden rounded-lg px-6 py-2.5 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                  style={{
                    backgroundColor: '#0d0d0d',
                    color: '#dedede'
                  }}
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-50"
                    style={{
                      background: 'radial-gradient(25% 49.17% at 100% 94.33%, rgba(158, 100, 46, 1) 0%, rgba(255, 255, 255, 0) 100%)',
                      filter: 'blur(15px)',
                      zIndex: 1
                    }}
                  />
                  {/* Stroke Effect */}
                  <div 
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: 'radial-gradient(20.45% 49.5% at 100% 94.33%, rgba(158, 100, 46, 1) 0%, rgba(255, 255, 255, 0) 100%)',
                      zIndex: 2
                    }}
                  />
                  {/* Text Content */}
                  <span className="relative z-10">Let's Talk</span>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                    style={{ color: '#dedede' }}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-[#afafaf] hover:text-white transition-colors z-[60] relative"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-40 md:hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`} 
          onClick={() => setIsMobileMenuOpen(false)} 
        />

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#050505] backdrop-blur-md border-l border-white/10 z-50 transform transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col space-y-2">
              <a 
                href="#why-us" 
                className="block px-4 py-4 text-[#afafaf] hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20"
                onClick={handleMobileLinkClick}
              >
                Why Us
              </a>
              <a 
                href="#mission" 
                className="block px-4 py-4 text-[#afafaf] hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20"
                onClick={handleMobileLinkClick}
              >
                Mission
              </a>
              <a 
                href="#works" 
                className="block px-4 py-4 text-[#afafaf] hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20"
                onClick={handleMobileLinkClick}
              >
                Works
              </a>
              <a 
                href="#services" 
                className="block px-4 py-4 text-[#afafaf] hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20"
                onClick={handleMobileLinkClick}
              >
                Services
              </a>
              <a 
                href="/contact" 
                className="block px-4 py-4 text-[#afafaf] hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20"
                onClick={handleMobileLinkClick}
              >
                Contact Us
              </a>
              <a 
                href="/terms" 
                className="block px-4 py-4 text-[#afafaf] hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20"
                onClick={handleMobileLinkClick}
              >
                Terms & Conditions
              </a>
              
              <div className="pt-6">
                <a 
                  href="/contact" 
                  className="relative block w-full bg-[#0d0d0d] text-[#dedede] px-6 py-4 rounded-lg transition-all duration-300 text-center font-semibold hover:scale-105"
                  onClick={handleMobileLinkClick}
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-50"
                    style={{
                      background: 'radial-gradient(25% 49.17% at 100% 94.33%, rgba(158, 100, 46, 1) 0%, rgba(255, 255, 255, 0) 100%)',
                      filter: 'blur(15px)',
                      zIndex: 1
                    }}
                  />
                  {/* Stroke Effect */}
                  <div 
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: 'radial-gradient(20.45% 49.5% at 100% 94.33%, rgba(158, 100, 46, 1) 0%, rgba(255, 255, 255, 0) 100%)',
                      zIndex: 2
                    }}
                  />
                  {/* Text Content */}
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Let's Talk</span>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
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