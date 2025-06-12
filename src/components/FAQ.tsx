
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What Makes Astex Different From Other Agencies?",
      answer: "Astex combines cutting-edge AI technology with creative design and development expertise. We focus on practical implementation and real-world experience, providing both businesses and individuals with comprehensive solutions that drive growth and innovation."
    },
    {
      question: "How Does AI Enhance The Services Provided By Astex?",
      answer: "Our AI agents automate complex tasks, improve efficiency, and enhance user experiences. We integrate AI solutions into web development, app development, and business processes to create intelligent, scalable, and future-ready solutions."
    },
    {
      question: "How Does Astex Ensure The Quality Of Its AI Solutions?",
      answer: "We follow industry best practices, conduct thorough testing, and maintain high standards throughout the development process. Our experienced team ensures that all AI solutions are reliable, secure, and tailored to meet specific client requirements."
    },
    {
      question: "Does Astex Offer Customized Solutions?",
      answer: "Absolutely! We specialize in creating tailored solutions that meet the unique needs of each client. Whether it's AI agents, web development, app development, or graphic design, we customize our approach to align with your specific goals and requirements."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black dot-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">Need to Know</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-astex-gray/30 border border-white/10 rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-white/70 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
