
import React from 'react';

const Testimonials = () => {
  const mainTestimonial = {
    name: "Jay More",
    role: "Founder & CEO",
    company: "Ocvision",
    quote: "Astex delivered a stunning, high-performance website that perfectly reflected our brand identity. Their attention to detail and commitment to deadlines was exceptional. Truly one of the smoothest web development experiences we've had.",
    image: "/assets/jay2.JPG",
    stats: [
      { value: "41%", label: "boost in product engagement." },
      { value: "2X", label: "Faster customer resolutions" }
    ]
  };
  

  const companyTestimonials = [
    {
      company: "ForexFlow",
      rating: 5,
      quote: "Astex built us a sleek, modern website that’s both fast and beautifully designed. The entire process was smooth and their support post-launch has been outstanding."
    },
    {
      company: "Airyyrides",
      rating: 5,
      quote: "Our new website, developed by Astex, turned out better than we had imagined. It’s clean, responsive, and captures exactly what we wanted for our brand."
    },
    {
      company: "ForexCrypto",
      rating: 4,
      quote: "The web development team at Astex took our vision and transformed it into a functional, user-friendly platform. Highly professional, creative, and reliable!"
    }
  ];
  

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-primary' : 'text-white/30'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-10 md:py-20 bg-black dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-astex-gray/50 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-sm">What Our Users Say</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted By Businesses Like Yours
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={mainTestimonial.image} 
              alt={mainTestimonial.name}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-primary font-medium">{mainTestimonial.company}</span>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6">
              "{mainTestimonial.quote}"
            </blockquote>
            
            <div className="mb-8">
              <p className="text-white font-medium">{mainTestimonial.name}</p>
              <p className="text-white/70">{mainTestimonial.role}</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {mainTestimonial.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {companyTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#141414] border border-white/10 rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-medium">{testimonial.company}</h4>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-white/70 text-sm">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
