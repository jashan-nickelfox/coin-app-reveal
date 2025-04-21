
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gradient">
              Identify, Grade, Collect
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              The ultimate companion for numismatists. Instantly identify coins, grade their condition, and manage your collection with precision.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="btn-primary flex items-center">
                Download Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-outline">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <div className="bg-white p-2 rounded-3xl shadow-xl rotate-3 transform hover:rotate-0 transition-transform duration-500 animate-float">
                <img 
                  src="https://placehold.co/600x1200/1a365d/FFF?text=CoinApp" 
                  alt="Coin App on smartphone" 
                  className="rounded-2xl max-w-xs mx-auto"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-100 rounded-full opacity-50 blur-3xl z-0"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl z-0"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
