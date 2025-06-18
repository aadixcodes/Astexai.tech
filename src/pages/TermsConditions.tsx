import React from 'react';
import Header from '../components/Header';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <section className="relative py-24 bg-black overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80  rounded-full bg-gradient-to-br from-[#FFB168]/20 to-[#E36D00]/10 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#FFB168]/10 to-[#E36D00]/20 blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/4 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#FFB168]/15 to-[#E36D00]/15 blur-2xl animate-float"></div>
        
        <div className="relative mt-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center  text-white text-sm px-4 py-2 rounded-full mb-4 border">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Last Updated: June 17, 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms & <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Welcome to ASTEX — Shaping the Future. These Terms govern your access to and use of our innovative services.
            </p>
          </div>

          <div className="bg-[#0A0A0A]/50 border border-white/10 rounded-2xl p-8 md:p-12 space-y-12 backdrop-blur-sm">
            {/* Introduction */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB168] to-[#E36D00] flex items-center justify-center text-black font-bold text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">About ASTEX</h2>
              </div>
              <div className="pl-14">
                <p className="text-white/80 leading-relaxed">
                  ASTEX is a dynamic agency committed to driving innovation in the tech industry. We offer professional services in AI Agent Development, Web & App Development, Graphic Design, and Startup Ideation & Development. Additionally, we provide a platform for aspiring talents to gain real-world experience through collaborative projects.
                </p>
              </div>
            </div>

            {/* Acceptance */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB168] to-[#E36D00] flex items-center justify-center text-black font-bold text-lg">1</div>
                <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
              </div>
              <div className="pl-14">
                <p className="text-white/80 leading-relaxed">
                  By accessing our website or availing of our services, you agree to comply with and be legally bound by these Terms & Conditions. If you disagree with any part of these terms, you must refrain from using our services.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB168] to-[#E36D00] flex items-center justify-center text-black font-bold text-lg">2</div>
                <h2 className="text-2xl font-bold text-white">Services Overview</h2>
              </div>
              <div className="pl-14">
                <p className="text-white/80 leading-relaxed mb-4">
                  ASTEX provides the following services:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "AI Agents Development",
                    "Web Development",
                    "App Development",
                    "Graphic Design",
                    "Startup Ideation & Development"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-[#1A1A1A]/50 rounded-lg border border-white/5 hover:border-[#FFB168]/30 transition-all">
                      <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#FFB168]/10 flex items-center justify-center text-[#FFB168]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/90">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed">
                  All services are subject to availability, project scope, and mutual agreement via formal proposals, emails, or contracts.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB168] to-[#E36D00] flex items-center justify-center text-black font-bold text-lg">3</div>
                <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
              </div>
              <div className="pl-14">
                <p className="text-white/80 leading-relaxed mb-4">
                  All content, designs, visuals, source codes, AI models, trademarks, and proprietary materials created or provided by ASTEX remain the intellectual property of ASTEX unless otherwise agreed upon in writing. Unauthorized reproduction, distribution, or commercial use is strictly prohibited.
                </p>
                <div className="p-4 bg-[#1A1A1A]/50 rounded-lg border-l-4 border-[#FFB168]">
                  <p className="text-white/90">
                    Clients will receive the final deliverables with a non-exclusive, non-transferable license to use them for their intended purpose upon full payment.
                  </p>
                </div>
              </div>
            </div>

            {/* Member Conduct */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB168] to-[#E36D00] flex items-center justify-center text-black font-bold text-lg">4</div>
                <h2 className="text-2xl font-bold text-white">Member Conduct & Code of Ethics</h2>
              </div>
              <div className="pl-14">
                <p className="text-white/80 leading-relaxed mb-4">
                  ASTEX members are expected to maintain a professional, collaborative, and ethical environment.
                </p>
                <div className="space-y-3 mb-4">
                  {[
                    "Any misuse of ASTEX resources, confidential data, or disruptive behavior will result in immediate termination of membership.",
                    "Sharing restricted groups (like our WhatsApp Member Group) or sensitive resources with non-members is prohibited.",
                    "Members must respect all community members and clients.",
                    "Professionalism must be maintained in all communications."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#FFB168]/10 flex items-center justify-center text-[#FFB168] text-xs">
                        {index + 1}
                      </div>
                      <p className="text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payments */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB168] to-[#E36D00] flex items-center justify-center text-black font-bold text-lg">5</div>
                <h2 className="text-2xl font-bold text-white">Payments & Refund Policy</h2>
              </div>
              <div className="pl-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-5 bg-[#1A1A1A]/50 rounded-xl border border-white/5">
                    <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFB168]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                      Payment Terms
                    </h3>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFB168]">•</span>
                        <span>All projects require a mutually agreed payment structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFB168]">•</span>
                        <span>Payments must be made according to agreed timelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFB168]">•</span>
                        <span>Late payments may result in paused services</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-5 bg-[#1A1A1A]/50 rounded-xl border border-white/5">
                    <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFB168]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Refund Policy
                    </h3>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFB168]">•</span>
                        <span>Once a project phase is approved, payments are non-refundable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#FFB168]">•</span>
                        <span>Custom quotes available for startups and educational projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB168] to-[#E36D00] flex items-center justify-center text-black font-bold text-lg">6</div>
                <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
              </div>
              <div className="pl-14">
                <p className="text-white/80 leading-relaxed mb-4">
                  ASTEX shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services, or for any loss of data, profits, or business interruption.
                </p>
                <p className="text-white/80 leading-relaxed">
                  While we strive to deliver error-free and timely solutions, we do not guarantee uninterrupted access to our platforms and services.
                </p>
              </div>
            </div>

            {/* Privacy */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB168] to-[#E36D00] flex items-center justify-center text-black font-bold text-lg">7</div>
                <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
              </div>
              <div className="pl-14">
                <p className="text-white/80 leading-relaxed">
                  We value your privacy. Any personal data shared with ASTEX will be used solely for communication, project management, and relevant service delivery purposes. We do not sell or share your data with third parties. Refer to our separate Privacy Policy for full details.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB168] to-[#E36D00] flex items-center justify-center text-black font-bold text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <div className="pl-14">
                <p className="text-white/80 leading-relaxed mb-6">
                  For questions about these Terms & Conditions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: 'email', text: 'astexstf.contact@gmail.com' },
                    { icon: 'globe', text: 'astexai.tech' },
                    { icon: 'phone', text: '+91 9755562101' },
                    { icon: 'location', text: 'Indore, India' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-[#1A1A1A]/50 rounded-lg hover:bg-[#1A1A1A]/70 transition-all">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#FFB168]/10 flex items-center justify-center text-[#FFB168]">
                        {item.icon === 'email' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        )}
                        {item.icon === 'globe' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                          </svg>
                        )}
                        {item.icon === 'phone' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        )}
                        {item.icon === 'location' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-white/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Closing */}
            <div className="pt-8 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FFB168]/10 to-[#E36D00]/10 rounded-full border border-[#FFB168]/20">
                <span className="text-[#FFB168] mr-2">✨</span>
                <span className="text-white/90 font-medium">Thank you for trusting ASTEX — Together, let's shape the future</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
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

export default TermsConditions;