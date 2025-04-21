
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScreenshotCarousel from '@/components/ScreenshotCarousel';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ScreenshotCarousel />
        <Features />
        <Benefits />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
