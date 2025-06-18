
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [ref, isVisible] = useScrollAnimation(0.1);

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
      question: "How Does Astex Ensure The Quality Of Its Projects?",
      answer: "We follow industry best practices, conduct rigorous testing, and maintain high standards throughout the development process. Each project is managed by experienced professionals to ensure timely delivery, reliability, and quality outcomes."
    },
    {
      question: "Does Astex Offer Customized Solutions?",
      answer: "Absolutely! We specialize in creating tailored solutions that meet the unique needs of each client. Whether it's AI agents, web development, app development, or graphic design, we customize our approach to align with your specific goals and business requirements."
    },
    {
      question: "Can Individuals Join Astex As Members Or Interns?",
      answer: "Yes! Astex actively welcomes students, freelancers, and aspiring professionals to join as members. You'll gain hands-on experience by working on real projects, learn from industry experts, and even earn from paid client projects while expanding your skills."
    },
    {
      question: "How Can I Share Feedback Or Suggestions With Astex?",
      answer: "We truly value your thoughts and suggestions! You can share your feedback anytime via our official email at astexstf.contact@gmail.com or message us directly on our social media pages. We’re always eager to hear from our community and improve together."
    }
  ];
  

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 md:py-20 bg-black dot-bg" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}>
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
              className={`bg-astex-gray/30 border border-white/10 rounded-2xl overflow-hidden scroll-animate ${isVisible ? 'scroll-animate-in' : 'scroll-animate-out'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-md font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-white/70 transition-all duration-300 flex-shrink-0 ${
                    openFaq === index ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFaq === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className={`transform transition-all duration-500 ${
                    openFaq === index 
                      ? 'translate-y-0 opacity-100' 
                      : '-translate-y-4 opacity-0'
                  }`}>
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
