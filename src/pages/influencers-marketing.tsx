import React, { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Header from "../components/Header";
import FinalCTA from "@/components/FinalCTA";

import {
  Instagram,
  Users,
  TrendingUp,
  Target,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const InfluencersMarketing = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [loadedWords, setLoadedWords] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const carouselRef = useRef(null);

  // Random images for hero section background
  const randomImages = [
    "/assets/influencersprofile/profile1.jpg",
    "/assets/influencersprofile/profile2.jpg",
    "/assets/influencersprofile/profile3.jpg",
    "/assets/influencersprofile/profile4.jpg",
    "/assets/influencersprofile/profile5.jpg",
  ];

  const headingWords = [
    "Strategic",
    "Influencer",
    "Marketing",
    "That Drives Growth",
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const timers = headingWords.map((_, index) => {
      return setTimeout(() => {
        setLoadedWords((prev) => [...prev, index]);
      }, 400 * index);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const isWordLoaded = (index) => loadedWords.includes(index);

  const redirectToWhatsApp = () => {
    const message = "Hi, I'm interested in your influencer marketing services!";
    window.open(
      `https://wa.me/919098343508?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const benefits = [
    {
      title: "Custom Campaign Strategy",
      description:
        "Campaigns tailored to your objectives — whether it’s awareness, engagement, lead generation, or sales.",
      icon: Users,
      bgClass: "bg-gradient-to-br from-orange-500/20 to-orange-600/30",
    },
    {
      title: "Performance-Based Execution",
      description:
        "From influencer shortlisting to content approvals and live tracking — we handle it all.",
      icon: TrendingUp,
      bgClass: "bg-gradient-to-br from-orange-500/20 to-orange-600/30",
    },
    {
      title: "Niche Audience Targeting",
      description:
        "Tap into niche audiences with creators perfectly aligned to your industry, voice, and audience interests.",
      icon: Target,
      bgClass: "bg-gradient-to-br from-orange-500/20 to-orange-600/30",
    },
  ];

  const services = [
    {
      title: "Influencer Discovery",
      description:
        "We identify and vet influencers who match your brand's voice and values.",
    },
    {
      title: "Campaign Strategy",
      description: "Custom campaign planning to maximize engagement and ROI.",
    },
    {
      title: "Content Creation",
      description:
        "Professional content development that resonates with your target audience.",
    },
    {
      title: "Performance Tracking",
      description: "Real-time monitoring and optimization of campaign metrics.",
    },
  ];

  const influencers = [
    {
      username: "indoreshahar",
      followers: "258K",
      image: "/assets/influencersprofile/profile1.jpg",
    },
    {
      username: "indoripaltan_official",
      followers: "245K",
      image: "/assets/influencersprofile/profile2.jpg",
    },
    {
      username: "Waah_indore",
      followers: "30K",
      image: "/assets/influencersprofile/profile3.jpg",
    },
    {
      username: "wahindori",
      followers: "233K",
      image: "/assets/influencersprofile/profile4.jpg",
    },
    {
      username: "iloveindore",
      followers: "221K",
      image: "/assets/influencersprofile/profile5.jpg",
    },
    {
      username: "indorigram_",
      followers: "219K",
      image: "/assets/influencersprofile/profile6.jpg",
    },
    {
      username: "indoreshorts",
      followers: "204K",
      image: "/assets/influencersprofile/profile7.jpg",
    },
    {
      username: "indoremerijaan.in",
      followers: "237K",
      image: "/assets/influencersprofile/profile8.jpg",
    },
    {
      username: "incredibleindore",
      followers: "191K",
      image: "/assets/influencersprofile/profile9.jpg",
    },
    {
      username: "eknoindore",
      followers: "187K",
      image: "/assets/influencersprofile/profile10.jpg",
    },
    {
      username: "indoreexplorer_",
      followers: "182K",
      image: "/assets/influencersprofile/profile11.jpg",
    },
    {
      username: "helloindore_",
      followers: "130K",
      image: "/assets/influencersprofile/profile12.jpg",
    },
    {
      username: "bhiyaooo",
      followers: "116K",
      image: "/assets/influencersprofile/profile13.jpg",
    },
    {
      username: "indoreofficials_",
      followers: "103K",
      image: "/assets/influencersprofile/profile14.jpg",
    },
    {
      username: "indorecitypage",
      followers: "103K",
      image: "/assets/influencersprofile/profile15.jpg",
    },
    {
      username: "indore_meri_jaan_in",
      followers: "96.4K",
      image: "/assets/influencersprofile/profile16.jpg",
    },
    {
      username: "ourindore__",
      followers: "94.1K",
      image: "/assets/influencersprofile/profile17.jpg",
    },
    {
      username: "indore_info",
      followers: "80.5K",
      image: "/assets/influencersprofile/profile18.jpg",
    },
    {
      username: "indorereelgramofficial",
      followers: "79K",
      image: "/assets/influencersprofile/profile19.jpg",
    },
    {
      username: "indorilok",
      followers: "73.8K",
      image: "/assets/influencersprofile/profile20.jpg",
    },
    {
      username: "indorivibes_",
      followers: "70.6K",
      image: "/assets/influencersprofile/profile21.jpg",
    },
    {
      username: "nts_indore",
      followers: "62.8K",
      image: "/assets/influencersprofile/profile22.jpg",
    },
    {
      username: "indori_days",
      followers: "60.2K",
      image: "/assets/influencersprofile/profile23.jpg",
    },
    {
      username: "indorijanta_",
      followers: "52.2K",
      image: "/assets/influencersprofile/profile24.jpg",
    },
    {
      username: "indore_city_update",
      followers: "50.7K",
      image: "/assets/influencersprofile/profile25.jpg",
    },
    {
      username: "indore.public",
      followers: "46.6K",
      image: "/assets/influencersprofile/profile26.jpg",
    },
    {
      username: "tbhindore",
      followers: "46.5K",
      image: "/assets/influencersprofile/profile27.jpg",
    },
    {
      username: "indori_thilwe09",
      followers: "42K",
      image: "/assets/influencersprofile/profile28.jpg",
    },
    {
      username: "oye_itz.indore",
      followers: "19.1K",
      image: "/assets/influencersprofile/profile29.jpg",
    },
    {
      username: "mr_cool_indori",
      followers: "21K",
      image: "/assets/influencersprofile/profile30.jpg",
    },
  ];

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth / 2;
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth / 2;
    }
  };

  return (
    <div className="min-h-screen bg-black dot-bg">
      <Header />

      {/* Hero Section */}
      <section className="min-h-[100vh] bg-black dot-bg flex items-center justify-center relative overflow-hidden px-4 py-12">
        {/* Randomly placed images around the heading */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {randomImages.slice(0, 5).map((img, index) => {
            // Predefined random positions and sizes around the heading
            const positions = [
              // Top left - medium size
              { top: "15%", left: "10%", size: "70px", rotate: "-5deg" },
              // Top right - small size
              { top: "20%", right: "15%", size: "50px", rotate: "10deg" },
              // Bottom left - large size
              { bottom: "25%", left: "5%", size: "75px", rotate: "-15deg" },
              // Middle right - medium size
              { top: "50%", right: "10%", size: "65px", rotate: "5deg" },
              // Bottom right - small size
              { bottom: "15%", right: "8%", size: "55px", rotate: "15deg" },
            ];

            return (
              <div
                key={index}
                className="absolute rounded-full overflow-hidden border-2 border-white/20 hover:border-primary transition-all duration-300 hover:scale-110"
                style={{
                  width: positions[index].size,
                  height: positions[index].size,
                  top: positions[index].top,
                  left: positions[index].left,
                  right: positions[index].right,
                  bottom: positions[index].bottom,
                  transform: `rotate(${positions[index].rotate})`,
                  animation: `float 4s ease-in-out infinite ${index * 0.5}s`,
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black via-astex-gray/30 to-black opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>

        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-20">
          {" "}
          {/* Increased z-index to stay above images */}
          <div className="text-center">
            <div
              className={`inline-flex items-center space-x-2 bg-astex-gray/50 border rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                loadedWords.length > 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-xs sm:text-sm">
                Your Brand’s Growth Partner in Influencer Marketing.
              </span>
            </div>

            <div className="relative space-y-4 mb-8 px-2">
              <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-gradient-to-br from-[#FFB168]/20 to-[#E36D00]/10 blur-xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#FFB168]/20 to-[#E36D00]/10 blur-xl"></div>

              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold relative">
                {" "}
                {/* Removed mt-20 since images are scattered */}
                <span
                  className={`text-primary block transition-all duration-500 ${
                    isWordLoaded(0)
                      ? "opacity-100 blur-none"
                      : "opacity-0 blur-md"
                  }`}
                >
                  {headingWords[0]}
                </span>
                <span className="text-white block">
                  <span
                    className={`transition-all duration-500 ${
                      isWordLoaded(1)
                        ? "opacity-100 blur-none"
                        : "opacity-0 blur-md"
                    }`}
                  >
                    {headingWords[1]}
                  </span>
                  <span className="inline-flex items-center mx-2 sm:mx-4">
                    <Instagram
                      className={`w-8 h-8 text-primary transition-all duration-500 ${
                        isWordLoaded(1)
                          ? "opacity-100 blur-none"
                          : "opacity-0 blur-md"
                      }`}
                    />
                  </span>
                  <span
                    className={`transition-all duration-500 ${
                      isWordLoaded(2)
                        ? "opacity-100 blur-none"
                        : "opacity-0 blur-md"
                    }`}
                  >
                    {headingWords[2]}
                  </span>
                </span>
                <span
                  className={`text-primary block transition-all duration-500 ${
                    isWordLoaded(3)
                      ? "opacity-100 blur-none"
                      : "opacity-0 blur-md"
                  }`}
                >
                  {headingWords[3]}
                </span>
              </h1>
            </div>

            <p
              className={`text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 px-2 transition-all duration-500 delay-[1600ms] ${
                loadedWords.length === headingWords.length
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              At Astex, we design and manage high-performance influencer marketing campaigns that position your brand in front of the right audience, spark conversations, and deliver measurable results across social platforms.
            </p>

            <div
              className={`transition-all duration-500 delay-[2000ms] ${
                loadedWords.length === headingWords.length
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <button
                onClick={redirectToWhatsApp}
                className="relative w-[14rem] px-3 py-2 rounded-[7px] transition-all duration-200 mb-8 group overflow-hidden"
                style={{
                  border: "1px solid rgb(255, 177, 104)",
                  background:
                    "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-medium">
                    Launch Your Campaign
                  </span>
                  <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - Enhanced Design */}
      <section className="py-16 bg-black dot-bg" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Grid - More Beautiful Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "28M+", label: "Active Users" },
              { value: "500+", label: "Creators" },
              { value: "100M+", label: "Reach" },
              { value: "40+", label: "Campaigns" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#141414] to-[#1A1A1A] border border-white/10 rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-white/70 text-sm md:text-base">
                  {stat.label}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div
            className={`text-center mb-16 scroll-animate ${
              isVisible ? "scroll-animate-in" : "scroll-animate-out"
            }`}
          >
            <div className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full px-6 py-2 mb-6">
              <span className="text-primary text-sm font-medium">
                Why Partner with Astex
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Grow with <span className="text-primary">Influencer Marketing</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We connect your brand with audiences through authentic influencer collaborations, backed by data, creativity, and strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 scroll-animate ${
                    isVisible ? "scroll-animate-in" : "scroll-animate-out"
                  } hover:border-primary/30 transition-all duration-300 group`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Mobile: Horizontal layout */}
                  <div className="md:hidden flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${benefit.bgClass} flex-shrink-0 flex items-center justify-center`}
                    >
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white pt-1 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Desktop: Vertical layout */}
                  <div className="hidden md:block">
                    <div
                      className={`w-20 h-20 rounded-2xl ${benefit.bgClass} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="text-white/70 leading-relaxed text-sm md:text-base group-hover:text-white/90 transition-colors duration-300">
                    {benefit.description}
                  </p>
                  <div className="mt-6">
                    <div className="w-8 h-0.5 bg-primary group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Boost & Target Audience Section - Redesigned */}
      <section className="py-16 bg-black dot-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#FFB168]/20 to-[#E36D00]/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-[#FFB168]/20 to-[#E36D00]/10 blur-2xl translate-x-1/2 translate-y-1/2"></div>

              <div className="p-8">
                <h2 className="text-4xl font-bold text-white mb-6">
                  <span>Maximize Your Brand’s</span> <span  className="text-primary"> Visibility & Sales{" "}</span>
                  <span>Through</span> <span className="text-primary"> Influencer Marketing</span>
                </h2>
                <p className="text-white/70 mb-8">
                  Our agency helps you connect with the right influencers, create compelling brand stories, and drive real business outcomes through precision-targeted campaigns.
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium">
                        Sales Growth
                      </span>
                      <span className="text-primary font-bold">+65%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-[#FF8C00] rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#141414] border border-white/10 rounded-xl p-4 text-center hover:border-primary/30 transition-all duration-300">
                      <h4 className="text-2xl font-bold text-primary mb-2">
                        85%
                      </h4>
                      <p className="text-white/70 text-sm">Engagement Rate</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#141414] border border-white/10 rounded-xl p-4 text-center hover:border-primary/30 transition-all duration-300">
                      <h4 className="text-2xl font-bold text-primary mb-2">
                        2.5M
                      </h4>
                      <p className="text-white/70 text-sm">Audience Reach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br from-[#FFB168]/20 to-[#E36D00]/10 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/assets/iimage.png"
                  alt="Analytics Dashboard"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/70"></div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Real-time Analytics
                  </h3>
                  <p className="text-white/80 mb-4">
                    Track your campaign performance with our advanced dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Influencers Carousel Section - Replaced Search Section */}
<section className="py-16 bg-black dot-bg overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <div className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full px-6 py-2 mb-6">
        <span className="text-primary text-sm font-medium">Top-Tier Creator Network</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Work with Industry’s <span className="text-primary">Most Trusted Influencers</span>
      </h2>
      <p className="text-white/70 max-w-2xl mx-auto">
        From micro-influencers to celebrity creators — our handpicked network of 11K+ verified influencers helps your brand connect with highly engaged, relevant audiences across every niche.
      </p>
    </div>

    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 ml-2"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth space-x-6 py-4 px-2 no-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Add empty divs for padding on mobile */}
        <div className="flex-shrink-0 md:hidden" style={{ width: "calc(50% - 75px)" }}></div>
        
        {influencers.map((influencer, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative group"
            style={{ width: "150px" }}
          >
            {/* Blur effects for left and right sides */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute -left-4 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -right-4 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative rounded-full overflow-hidden w-32 h-32 mx-auto mb-4 border-2 border-white/20 group-hover:border-primary transition-all duration-300">
              <img
                src={influencer.image}
                alt={influencer.username}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Blur effects for mobile */}
              <div className="absolute inset-0 md:hidden">
                <div className="absolute -left-4 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute -right-4 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10"></div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium truncate">
                {influencer.username}
              </h3>
              <p className="text-primary text-sm">
                {influencer.followers}
              </p>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"></div>
            </div>
          </div>
        ))}
        
        {/* Add empty divs for padding on mobile */}
        <div className="flex-shrink-0 md:hidden" style={{ width: "calc(50% - 75px)" }}></div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 mr-2"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>

    <div className="flex justify-center mt-8">
      <button
        onClick={redirectToWhatsApp}
        className="relative w-[14rem] px-3 py-2 rounded-[7px] transition-all duration-200 mb-8 group overflow-hidden"
        style={{
          border: "1px solid rgb(255, 177, 104)",
          background:
            "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
        }}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-white font-medium">Start Collaborating</span>
          <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
        </div>
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
      </button>
    </div>
  </div>
</section>

      {/* Pricing Section */}
<section className="py-16 bg-black dot-bg relative overflow-hidden">
  <div className="absolute -top-30 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#FFB168]/20 to-[#E36D00]/10 blur-3xl"></div>
  <div className="absolute bottom-20 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#FFB168]/20 to-[#E36D00]/10 blur-3xl"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <div className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full px-6 py-2 mb-6">
        <span className="text-primary text-sm font-medium">
          Flexible Options
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Pricing & <span className="text-primary">Plans</span>
      </h2>
      <p className="text-white/70 max-w-2xl mx-auto">
        Choose the perfect plan for your influencer marketing needs
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Starter Plan */}
      <div className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border flex flex-col items-center border-white/10 rounded-xl p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
          <div className="flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">₹15,000</span>
            <span className="text-white/70 ml-2">one time only</span>
          </div>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Shared repost on 15+ Instagram handles</span>
          </li>
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Accounts with less than 100K followers</span>
          </li>
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Original reach guaranteed</span>
          </li>
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Basic performance analytics</span>
          </li>
        </ul>
        <button
          onClick={redirectToWhatsApp}
          className="relative w-[14rem] px-3 py-2 rounded-[7px] transition-all duration-200 group overflow-hidden"
          style={{
            border: "1px solid rgb(255, 177, 104)",
            background:
              "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
          }}
        >
          Get Started
        </button>
      </div>

      {/* Professional Plan */}
      <div className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-primary/30 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative flex flex-col items-center">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
          Most Popular
        </div>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Professional
          </h3>
          <div className="flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">₹25,000</span>
            <span className="text-white/70 ml-2">one time only</span>
          </div>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Shared repost + stories on 15 Instagram accounts</span>
          </li>
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Accounts with over 100K followers</span>
          </li>
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Original reach guaranteed</span>
          </li>
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Detailed performance analytics</span>
          </li>
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Priority content scheduling</span>
          </li>
        </ul>
        <button
          onClick={redirectToWhatsApp}
          className="relative w-[14rem] px-3 py-2 rounded-[7px] transition-all duration-200 group overflow-hidden"
          style={{
            border: "1px solid rgb(255, 177, 104)",
            background:
              "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
          }}
        >
          Get Started
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 rounded-xl p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 flex flex-col items-center">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Enterprise
          </h3>
          <div className="flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">Custom</span>
          </div>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Repost + stories on premium accounts</span>
          </li>
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>24/7 dedicated support</span>
          </li>
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Access to 30 top influencers</span>
          </li>
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Custom campaign strategy</span>
          </li>
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Advanced analytics dashboard</span>
          </li>
          <li className="flex items-start text-white/70 hover:text-white transition-colors duration-300">
            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
            <span>Monthly performance reports</span>
          </li>
        </ul>
        <button
          onClick={redirectToWhatsApp}
          className="w-full bg-[#1A1A1A] text-white border border-white/10 rounded-lg px-6 py-3 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
        >
          Contact Us
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Final CTA Section */}
      <section className="py-16 bg-black dot-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#FFB168]/20 to-[#E36D00]/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#FFB168]/20 to-[#E36D00]/10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let’s Launch Your <span className="text-primary">Influencer Campaign</span> Today
                </h2>
                <p className="text-white/70 text-lg max-w-2xl">
                  Ready to take your brand story to millions? Partner with Astex and let our influencer marketing specialists build a campaign that drives real, measurable impact.
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={redirectToWhatsApp}
                  className="relative w-[17rem] px-3 py-2 rounded-[7px] transition-all duration-200 mb-8 group overflow-hidden"
                  style={{
                    border: "1px solid rgb(255, 177, 104)",
                    background:
                      "radial-gradient(50% 50% at 50% 100%, rgb(255, 177, 104) 0%, rgb(227, 109, 0) 100%)",
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-white font-medium">Start Your Campaign Now</span>
                    <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <FinalCTA />
    </div>
  );
};

export default InfluencersMarketing;
