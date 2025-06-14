
import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      description: "Ideal for small teams.",
      price: "$900",
      period: "/month",
      features: [
        "Up to 10 users",
        "Basic support",
        "Standard features"
      ],
      popular: false
    },
    {
      name: "Pro",
      description: "Designed for expanding teams and advanced needs.",
      price: "$1,600",
      period: "/month",
      features: [
        "Up to 50 users",
        "Priority support",
        "Enhanced Security",
        "Advanced Analytics",
        "Custom workflows"
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-10 md:py-20 bg-black dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">Simple Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transparent Pricing Plans
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-astex-gray/30 border ${plan.popular ? 'border-primary/50' : 'border-white/10'} rounded-2xl p-8 card-hover animate-fade-in relative`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 text-sm rounded-full">Popular</span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/70 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-white/70">{plan.period}</span>
              </div>

              <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 mb-8">
                Get Started
              </button>

              <div className="space-y-4">
                <p className="text-white/80 font-medium">What's included:</p>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-white/70">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
