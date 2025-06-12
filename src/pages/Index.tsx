
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Mission from '../components/Mission';
import RecentWorks from '../components/RecentWorks';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Benefits />
      <Mission />
      <RecentWorks />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
