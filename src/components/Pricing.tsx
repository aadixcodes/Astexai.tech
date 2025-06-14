import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      description: "Ideal for small teams.",
      price: "$900",
      period: "/month",
      features: ["Up to 10 users", "Basic support", "Standard features"],
      popular: false,
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
        "Custom workflows",
      ],
      popular: true,
    },
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
              className={`bg-[#141414] border ${
                plan.popular ? "border-primary/50" : "border-white/10"
              } rounded-2xl p-8 animate-fade-in relative`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 text-sm rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-white/70 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-white/70">{plan.period}</span>
              </div>

              {/* <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 mb-8">
                Get Started
              </button> */}
              <button
                className="relative w-full px-4 py-2 rounded-[7px] transition-all duration-200  mb-8 group overflow-hidden"
                style={{
                  border: "1px solid rgb(255, 177, 104)",
                  background:
                    "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
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

                {/* Optional hover overlay effect */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
              </button>

              <div className="space-y-4">
                <p className="text-white/80 font-medium">What's included:</p>
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
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
