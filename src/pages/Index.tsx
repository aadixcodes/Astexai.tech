
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Mission from '../components/Mission';
import RecentWorks from '../components/RecentWorks';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Benefits />
      <Mission />
      <RecentWorks />
      <Services />
      <Pricing />
      <Testimonials />
      {/* <Team /> */}
      <FAQ />
      <Contact />
      <FinalCTA />
    </div>
  );
};

export default Index;
