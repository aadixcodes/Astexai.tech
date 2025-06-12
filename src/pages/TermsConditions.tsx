
import React from 'react';
import Header from '../components/Header';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Term & Conditions
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Welcome to Automatix! These terms and conditions outline the rules
              and regulations for the use of our website and services.
            </p>
          </div>

          <div className="space-y-12 text-white">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">1. Overview</h2>
              <p className="text-white/70 leading-relaxed">
                Automatix our is an innovative agency amplified with AI, offering a range of creative and digital services.
                These Terms apply to all visitors, users, and others who access or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">2. Services</h2>
              <p className="text-white/70 leading-relaxed">
                We provide a variety of services, including but not limited to branding, web development, digital marketing,
                and AI-driven solutions. Each service is subject to its own specific agreement, which outlines the scope,
                timeline, and payment terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">3. User Responsibilities</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                As a user of Automatix, you agree to:
              </p>
              <ul className="text-white/70 space-y-2 ml-6">
                <li>• Provide accurate and up-to-date information when required</li>
                <li>• Use our services only for lawful purposes and in a manner that does not infringe the rights of others.</li>
                <li>• Maintain the confidentiality of your account information and be responsible for all activities under your account.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">4. Intellectual Property</h2>
              <p className="text-white/70 leading-relaxed">
                All content, designs, graphics, logos, and software used on this website are the property of Automatix or
                its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not
                use, reproduce, or distribute any content without our express permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">5. Payments</h2>
              <p className="text-white/70 leading-relaxed">
                Fees for our services are agreed upon in advance and will be outlined in a service agreement. Payment is
                due upon receipt of the invoice unless otherwise specified. Late payments may incur interest at a rate of
                1.5% per month.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">6. Confidentiality</h2>
              <p className="text-white/70 leading-relaxed">
                We take your privacy and confidentiality seriously. Any business or personal information shared with
                Automatix will be kept confidential and will not be disclosed to third parties without your consent, except
                as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">7. Termination</h2>
              <p className="text-white/70 leading-relaxed">
                Either party may terminate a service agreement by providing written notice. If you terminate the
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
