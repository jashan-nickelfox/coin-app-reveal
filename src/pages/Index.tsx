
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScreenshotCarousel from '@/components/ScreenshotCarousel';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  // Optimized scroll animation observer with proper thresholds and timing
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only animate if the element is entering the viewport
          if (entry.isIntersecting) {
            // Add a small delay based on the element's position in the DOM for a cascade effect
            const delay = parseInt(entry.target.getAttribute('data-index') || '0') * 100;
            
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
              entry.target.classList.remove('opacity-0');
            }, delay);
            
            // Once animation is complete, stop observing this element
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.15, // Slightly higher threshold for better timing
        rootMargin: '0px 0px -50px 0px' // Start animation a bit earlier
      }
    );

    // Observe all sections and add a data-index attribute
    document.querySelectorAll('section').forEach((section, index) => {
      if (!section.classList.contains('animate-fade-in')) {
        section.classList.add('opacity-0');
        section.setAttribute('data-index', index.toString());
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
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
