import React from "react";
import Header from "@/components/Header";
import FinalCTA from "@/components/FinalCTA";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "💰",
    title: "Advertising & Paid Media",
    description: "Maximize your reach with targeted paid campaigns across digital platforms.",
    bullets: [
      "Google Ads (Search, Display, YouTube)",
      "Social Media Ads (Facebook, Instagram, LinkedIn, Twitter, TikTok)",
      "Influencer Paid Promotions",
      "Whatsapp Marketing",
    ],
  },
  {
    icon: "🔍",
    title: "Search Engine Optimization (SEO)",
    description: "Boost your visibility and rankings with comprehensive SEO strategies.",
    bullets: [
      "On-Page SEO (content optimization, meta tags, keyword targeting)",
      "Technical SEO (site speed, mobile-friendliness, crawlability)",
      "Local SEO (Google My Business, local citations)",
    ],
  },
  {
    icon: "📱",
    title: "Social Media Marketing (SMM)",
    description: "Engage and grow your audience with creative social media campaigns.",
    bullets: [
      "Social Media Strategy & Planning",
      "Content Creation & Curation",
      "Daily Posting & Engagement",
      "Hashtag & Trend Analysis",
      "Social Media Campaigns & Contests",
      "Community Management",
    ],
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    description: "Drive traffic and authority with high-quality content.",
    bullets: [
      "Blog Writing & Management",
      "Article & PR Writing",
      "Video Content Marketing",
    ],
  },
  {
    icon: "🎬",
    title: "Video Production & Marketing",
    description: "Captivate your audience with compelling video content.",
    bullets: [
      "Video Ads Creation",
      "Reels & Shorts Video Content",
    ],
  },
  {
    icon: "📧",
    title: "Email Marketing",
    description: "Nurture leads and retain customers with effective email campaigns.",
    bullets: [
      "Campaign Planning & Strategy",
      "Email Newsletter Creation",
      "Drip Campaigns & Automation",
      "Lead Nurturing Campaigns",
      "Email List Management & Segmentation",
    ],
  },
  {
    icon: "💻",
    title: "Website Design & Development",
    description: "Build a stunning, high-performing website for your brand.",
    bullets: [
      "UI/UX Design",
      "WordPress / Custom Website Development",
      "Landing Page Creation",
      "Website Maintenance & Hosting",
    ],
  },
  {
    icon: "🤝",
    title: "Influencer Marketing",
    description: "Leverage influencer partnerships to amplify your brand.",
    bullets: [
      "Influencer Identification & Shortlisting",
      "Campaign Planning & Execution",
      "Collaboration Negotiations",
    ],
  },
  {
    icon: "🤖",
    title: "Lead Generation & AI Automation",
    description: "Automate and scale your lead generation with smart solutions.",
    bullets: [
      "B2B & B2C Lead Campaigns",
      "LinkedIn Lead Generation",
      "Chatbots & Automated Workflows",
    ],
  },
];

export default function OurServices() {
  return (
    <section>
        <Header />
    <div className="min-h-screen py-16 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-primary tracking-widest mb-2 animate-fade-in">
            Our Services
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in-slow">
            High-impact marketing services
          </h1>
          <p className="text-[#bdbdbd] max-w-2xl mx-auto animate-fade-in-slow">
            Unlock your business potential with our full suite of digital marketing solutions.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="relative group bg-[#141414] border border-white/10 rounded-3xl shadow-xl p-8 flex flex-col transition-transform duration-300 hover:shadow-2xl hover:border-[#e6a15a]/40"
              style={{
                background: "linear-gradient(180deg, rgba(33,33,33,0.95) 0%, rgba(33,33,33,0.7) 100%)",
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#232323] mb-4 text-3xl shadow-md border border-[#e6a15a]/20 group-hover:bg-[#e6a15a]/10 transition-all duration-300">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              {/* Description */}
              <p className="text-[#bdbdbd] mb-4">{service.description}</p>
              {/* Bullets */}
              <ul className="space-y-2">
                {service.bullets.map((item, i) => (
                  <li key={i} className="flex items-start text-[#e6a15a]">
                    <span className="mr-2 mt-1 text-base">•</span>
                    <span className="text-[#dedede]">{item}</span>
                  </li>
                ))}
              </ul>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-60 pointer-events-none transition-all duration-300"
                style={{
                  background: "radial-gradient(ellipse at 80% 90%, rgba(230,161,90,0.25) 0%, rgba(255,255,255,0) 100%)",
                  zIndex: 0,
                }}
              />
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="flex justify-center mt-14">
        <div className="text-center">
          <Link
            to="/contact"
            className="relative w-[10rem] px-4 py-2 rounded-[7px] transition-all duration-200 mb-8 group overflow-hidden flex items-center justify-center gap-2"
            style={{
              border: "1px solid rgb(255, 177, 104)",
              background: "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
            }}
          >
            <span className="text-white font-medium">Get in touch</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
          </Link>
        </div>
        </div>
      </div>
    </div>
    <FinalCTA />
    </section>
  );
}
