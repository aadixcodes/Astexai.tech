
import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Pricing = () => {
  const redirectToWhatsApp = (plan: string, type: string) => {
    const message = `Hi, I'm interested in the ${plan} ${type} Website plan. Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919098343508?text=${encodedMessage}`, "_blank");
  };


  const navigate = useNavigate();

const handleRedirect = () => {
  navigate("/pricing");
};

  const staticPlans = [
    {
      name: "Basic Static",
      description: "Ideal for simple online presence.",
      price: "$125",
      period: "(one-time)",
      features: [
        "Up to 5 pages",
        "Responsive Design",
        "Basic SEO",
        "Contact Form (non-functional)",
        "1 Revision Round"
      ],
      popular: false,
    },
    {
      name: "Standard Static",
      description: "Perfect for small businesses.",
      price: "$175",
      period: "(one-time)",
      features: [
        "Up to 8 pages",
        "Mobile Optimized",
        "Functional Contact Form",
        "Basic SEO + Analytics",
        "Image Gallery",
        "2 Revision Rounds"
      ],
      popular: true,
    },
    {
      name: "Premium Static",
      description: "For professional websites with advanced features.",
      price: "$250",
      period: "(one-time)",
      features: [
        "12+ pages",
        "Custom Animations",
        "Contact Form + Google Map",
        "Advanced SEO",
        "Image + Video Embeds",
        "Social Media Integration",
        "3 Revision Rounds"
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-10 md:py-20 bg-black dot-bg relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-grid-orange-500/50 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">Simple & Transparent Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Website Development Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include free consultation and support.
          </p>
        </div>

        {/* Static Website Plans */}
        <div className="mb-20">
        

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {staticPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-[#141414] border ${
                  plan.popular ? "border-orange-500/50 shadow-lg shadow-orange-500/20" : "border-white/10"
                } rounded-2xl p-8 animate-fade-in relative hover:border-orange-500 transition-all duration-300 ${plan.popular ? "transform hover:scale-[1.02]" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 text-sm rounded-full">
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
                  <span className="text-white/70 ml-2">{plan.period}</span>
                </div>

                <button
                  onClick={() => redirectToWhatsApp(plan.name, "Static")}
                  className="relative w-full px-4 py-3 rounded-[7px] transition-all duration-200 mb-8 group overflow-hidden"
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

                <div className="space-y-4">
                  <p className="text-white/80 font-medium">What's included:</p>
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <Check className="w-5 h-5 text-orange-500" />
                      <span className="text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Complete Pricing Button */}
        <div className="text-center mt-12">
        <button
        onClick={handleRedirect}
                className="relative w-[20rem] px-4 py-2 rounded-[7px] transition-all duration-200  mb-8 group overflow-hidden"
                style={{
                  border: "1px solid rgb(255, 177, 104)",
                  background:
                    "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-medium">View Complete Pricing Comparison</span>
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
        </div>
      </div>
    </section>
  );
};

export default Pricing;