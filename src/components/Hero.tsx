
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-white via-gray-50 to-coin-light relative overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left - Text Content */}
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: '0s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient leading-tight mb-6">
              Instantly Identify & Grade Coins.<br className="hidden sm:block" />
              Organize Your Collection.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg">
              Your ultimate mobile companion for numismatists — powered by advanced AI, designed for precision, and trusted worldwide.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
              <Button className="btn-primary flex items-center shadow-lg hover:scale-105 transition-all duration-150">
                Download Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-outline border-2 shadow hover:scale-105 transition-all duration-150">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right - Device mockup with Screenshot */}
          <div className="md:w-1/2 flex justify-center items-center relative mb-12 md:mb-0 animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 shadow-2xl rounded-3xl bg-gradient-to-br from-coin-navy via-blue-100 to-white/80 p-2">
              <div className="w-[280px] sm:w-[320px] md:w-[340px] mx-auto rounded-3xl bg-black/90 overflow-hidden ring-4 ring-coin-gold/40">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                  alt="CoinApp running on phone"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* iPhone style top notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-3 rounded-b-xl bg-gray-300/80 blur-sm z-20"></div>
            </div>
            {/* Decorative Gradient Blobs */}
            <div className="absolute -bottom-10 -left-16 w-52 h-52 bg-coin-gold/30 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-16 -right-24 w-52 h-52 bg-coin-navy/10 rounded-full blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
