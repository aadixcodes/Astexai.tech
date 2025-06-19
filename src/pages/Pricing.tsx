import React from "react";
import Header from '../components/Header';
import FinalCTA from '../components/FinalCTA';
import FAQ from '../components/FAQ';

const Pricing = () => {
  const redirectToWhatsApp = (plan: string, type: string) => {
    const message = `Hi, I'm interested in the ${plan} ${type} Website plan. Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919755562101?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black dot-bg text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <Header />
      {/* Grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-grid-orange-500/50 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgb(255, 0, 0))]"></div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Transparent Pricing Plans
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include free
            consultation and 30-day support.
          </p>
        </div>

        {/* Static Website Plans */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center">
              <div className="h-0.5 w-16 bg-orange-500 mr-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Static Website Plans
              </h2>
              <div className="h-0.5 w-16 bg-orange-500 ml-4"></div>
            </div>
          </div>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Ideal for businesses needing an online presence without backend functionality.
            Perfect for portfolios, small businesses, and informational sites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Static */}
            <div className="bg-[#141414] rounded-xl p-6  transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-primary">Basic Static</h3>
              <p className="text-3xl font-bold mb-4">$125<span className="text-sm font-normal text-gray-400">(one-time)</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to 5 pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic SEO</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Contact Form (non-functional)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1 Revision Round</span>
                </li>
              </ul>
              <button
                onClick={() => redirectToWhatsApp("Basic", "Static")}
                className="relative w-full px-4 py-3 rounded-[7px] transition-all duration-200 group overflow-hidden"
                style={{
                  border: "1px solid rgb(255, 177, 104)",
                  background: "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-medium">Get Started</span>
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
            </div>

            {/* Standard Static */}
            <div className="bg-[#141414] rounded-xl p-6 border-2 border-orange-500 transform hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-orange-500/20 relative">
              <div className="absolute top-0 right-0 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Standard Static</h3>
              <p className="text-3xl font-bold mb-4">$175<span className="text-sm font-normal text-gray-400">(one-time)</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to 8 pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mobile Optimized</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Functional Contact Form (Email)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic SEO + Analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Image Gallery</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>2 Revision Rounds</span>
                </li>
              </ul>
              <button
                onClick={() => redirectToWhatsApp("Standard", "Static")}
                className="relative w-full px-4 py-3 rounded-[7px] transition-all duration-200 group overflow-hidden"
                style={{
                  border: "1px solid rgb(255, 177, 104)",
                  background: "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-medium">Get Started</span>
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
            </div>

            {/* Premium Static */}
            <div className="bg-[#141414] rounded-xl p-6 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-primary">Premium Static</h3>
              <p className="text-3xl font-bold mb-4">$250<span className="text-sm font-normal text-gray-400">(one-time)</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>12+ pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom Animations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Contact Form + Google Map</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced SEO Optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Image + Video Embeds</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Social Media Integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3 Revision Rounds</span>
                </li>
              </ul>
              <button
                onClick={() => redirectToWhatsApp("Premium", "Static")}
                className="relative w-full px-4 py-3 rounded-[7px] transition-all duration-200 group overflow-hidden"
                style={{
                  border: "1px solid rgb(255, 177, 104)",
                  background: "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-medium">Get Started</span>
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
            </div>
          </div>
        </section>

        {/* Dynamic Website Plans */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center">
              <div className="h-0.5 w-16 bg-orange-500 mr-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Dynamic Website Plans
              </h2>
              <div className="h-0.5 w-16 bg-orange-500 ml-4"></div>
            </div>
          </div>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Ideal for businesses requiring a dashboard, admin panel, or database-powered functionality.
            Perfect for e-commerce, membership sites, and web applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Dynamic */}
            <div className="bg-[#141414] rounded-xl p-6 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-primary">Basic Dynamic</h3>
              <p className="text-3xl font-bold mb-4">$285<span className="text-sm font-normal text-gray-400">(one-time)</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to 5 dynamic pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Contact Form (DB Connected)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic Admin Dashboard</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic Content Management</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1 Revision Round</span>
                </li>
              </ul>
              <button
                onClick={() => redirectToWhatsApp("Basic", "Dynamic")}
                className="relative w-full px-4 py-3 rounded-[7px] transition-all duration-200 group overflow-hidden"
                style={{
                  border: "1px solid rgb(255, 177, 104)",
                  background: "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-medium">Get Started</span>
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
            </div>

            {/* Standard Dynamic */}
            <div className="bg-[#141414] rounded-xl p-6 border-2 border-orange-500 transform hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-orange-500/20 relative">
              <div className="absolute top-0 right-0 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Standard Dynamic</h3>
              <p className="text-3xl font-bold mb-4">$365<span className="text-sm font-normal text-gray-400">(one-time)</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>8–10 dynamic pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure Login/Signup System</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Admin Dashboard</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SEO + Google Analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Blog System</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>2 Revision Rounds</span>
                </li>
              </ul>
              <button
                onClick={() => redirectToWhatsApp("Standard", "Dynamic")}
                className="relative w-full px-4 py-3 rounded-[7px] transition-all duration-200 group overflow-hidden"
                style={{
                  border: "1px solid rgb(255, 177, 104)",
                  background: "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-medium">Get Started</span>
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
            </div>

            {/* Pro Dynamic */}
            <div className="bg-[#141414] rounded-xl p-6 border transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-primary">Pro Dynamic</h3>
              <p className="text-3xl font-bold mb-4">$600<span className="text-sm font-normal text-gray-400">(one-time)</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>12+ dynamic pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom Admin Panel</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Role-based Access Control</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Payment Gateway Integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced Analytics Dashboard</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Database Backup System</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>3 Revision Rounds</span>
                </li>
              </ul>
              <button
                onClick={() => redirectToWhatsApp("Pro", "Dynamic")}
                className="relative w-full px-4 py-3 rounded-[7px] transition-all duration-200 group overflow-hidden"
                style={{
                  border: "1px solid rgb(255, 177, 104)",
                  background: "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-medium">Get Started</span>
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
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center">
              <div className="h-0.5 w-16 bg-orange-500 mr-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Plan Comparison
              </h2>
              <div className="h-0.5 w-16 bg-orange-500 ml-4"></div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6  bg-[#141414] text-primary font-bold">Features</th>
                  <th className="text-center py-4 px-6  bg-[#141414]">Basic</th>
                  <th className="text-center py-4 px-6  bg-[#141414]">Standard</th>
                  <th className="text-center py-4 px-6  bg-[#141414]">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Number of Pages</td>
                  <td className="py-4 px-6 text-center">5</td>
                  <td className="py-4 px-6 text-center">8</td>
                  <td className="py-4 px-6 text-center">12+</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Responsive Design</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">SEO Optimization</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Standard</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Contact Form</td>
                  <td className="py-4 px-6 text-center">Non-functional</td>
                  <td className="py-4 px-6 text-center">Email</td>
                  <td className="py-4 px-6 text-center">DB + Email</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Admin Dashboard</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Custom Animations</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Premium</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Social Media Integration</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Google Analytics</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">✓</td>
                  <td className="py-4 px-6 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Revision Rounds</td>
                  <td className="py-4 px-6 text-center">1</td>
                  <td className="py-4 px-6 text-center">2</td>
                  <td className="py-4 px-6 text-center">3</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Support Duration</td>
                  <td className="py-4 px-6 text-center">30 days</td>
                  <td className="py-4 px-6 text-center">60 days</td>
                  <td className="py-4 px-6 text-center">90 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center">
              <div className="h-0.5 w-16 bg-orange-500 mr-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Additional Services
              </h2>
              <div className="h-0.5 w-16 bg-orange-500 ml-4"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hosting */}
            <div className=" bg-[#141414] rounded-xl p-6 border  hover:border-orange-500 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary">Hosting & Maintenance</h3>
              <p className="text-gray-400 mb-6">We'll handle all technical aspects of keeping your site running smoothly.</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Basic Hosting</span>
                  <span className="font-bold">$15/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Premium Hosting</span>
                  <span className="font-bold">$25/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Monthly Maintenance</span>
                  <span className="font-bold">$60/month</span>
                </div>
              </div>
            </div>

            {/* SEO */}
            <div className=" bg-[#141414] rounded-xl p-6 border border-gray-800 hover:border-orange-500 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary">SEO Services</h3>
              <p className="text-gray-400 mb-6">Improve your search rankings and online visibility.</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Basic SEO Package</span>
                  <span className="font-bold">$75/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Advanced SEO Package</span>
                  <span className="font-bold">$120/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Content Marketing</span>
                  <span className="font-bold">$200/month</span>
                </div>
              </div>
            </div>

            {/* Custom Work */}
            <div className=" bg-[#141414] rounded-xl p-6 border border-gray-800 hover:border-orange-500 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary">Custom Development</h3>
              <p className="text-gray-400 mb-6">Need something special? We've got you covered.</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>E-commerce Integration</span>
                  <span className="font-bold">From $500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Custom Web Application</span>
                  <span className="font-bold">From $500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>API Development</span>
                  <span className="font-bold">From $300</span>
                </div>
              </div>
            </div>
          </div>
        </section>

<FAQ />
<FinalCTA />
    
      </div>
    </div>
  );
};

export default Pricing;