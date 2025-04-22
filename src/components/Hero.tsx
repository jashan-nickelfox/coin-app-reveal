import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Camera, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-white via-gray-50 to-coin-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-coin-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-coin-navy/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-coin-gold/70 rounded-full blur-sm animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-4 h-4 bg-coin-navy/50 rounded-full blur-sm animate-float" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-5 h-5 bg-coin-gold/50 rounded-full blur-sm animate-float" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left - Text Content */}
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: '0s' }}>
            <div className="mb-4">
              <span className="inline-block bg-coin-navy/10 text-coin-navy px-4 py-1 rounded-full text-sm font-medium">
                Numismatist's Choice
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient leading-tight mb-6">
              Instantly Identify & Grade Coins.<br className="hidden sm:block" />
              Organize Your Collection.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg">
              Your ultimate mobile companion for numismatists — powered by advanced AI, designed for precision, and trusted worldwide.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
              <Button className="btn-primary flex items-center shadow-lg hover:scale-105 transition-all duration-150 group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline border-2 shadow hover:scale-105 transition-all duration-150">
                Learn More
              </Button>
            </div>

            {/* App stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-2xl font-bold text-coin-navy">10K+</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-bold text-coin-navy">50K+</div>
                <div className="text-sm text-gray-500">Coins Identified</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="text-2xl font-bold text-coin-navy">4.8/5</div>
                <div className="text-sm text-gray-500">App Store Rating</div>
              </div>
            </div>
          </div>

          {/* Right - Device mockups with Screenshots */}
          <div className="md:w-1/2 flex justify-center items-center relative mb-12 md:mb-0">
            {/* Main device */}
            <div className="relative z-30 shadow-2xl rounded-3xl animate-float" style={{ animationDelay: '0.1s' }}>
              <div className="relative mx-auto w-[280px] h-[570px] rounded-[2.5rem] border-[14px] border-gray-900 bg-gray-800 shadow-xl overflow-hidden">
                {/* Phone details */}
                <div className="absolute top-0 w-32 h-6 bg-gray-900 left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>
                <div className="absolute top-2 w-16 h-2 bg-gray-800 left-1/2 -translate-x-1/2 rounded-lg z-30"></div>
                
                {/* Screenshot */}
                <img 
                  src="/ss2.svg" 
                  alt="CoinApp running on phone"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Secondary device (left behind) */}
            <div className="absolute left-0 sm:left-7 top-10 z-10 opacity-85 scale-[0.85] animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="relative mx-auto w-[280px] h-[570px] rounded-[2.5rem] border-[14px] border-gray-900 bg-gray-800 shadow-xl overflow-hidden -rotate-12">
                {/* Screenshot */}
                <img 
                  src="/ss1.svg" 
                  alt="CoinApp feature screen"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Third device (right behind) */}
            <div className="absolute right-0 sm:right-7 top-20 z-10 opacity-85 scale-[0.8] animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="relative mx-auto w-[280px] h-[570px] rounded-[2.5rem] border-[14px] border-gray-900 bg-gray-800 shadow-xl overflow-hidden rotate-12">
                {/* Screenshot */}
                <img 
                  src="/ss.svg" 
                  alt="CoinApp feature screen"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Feature highlights */}
            <div className="absolute -bottom-4 -right-10 z-40 animate-float" style={{ animationDelay: '0.9s' }}>
              <div className="bg-white rounded-2xl shadow-lg p-3 flex items-center">
                <div className="mr-3 bg-coin-gold/20 p-2 rounded-full">
                  <Camera className="h-5 w-5 text-coin-gold" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Instant Scanning</div>
                  <div className="text-xs text-gray-500">Just point & identify</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 left-5 z-40 animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="bg-white rounded-2xl shadow-lg p-3 flex items-center">
                <div className="mr-3 bg-coin-navy/20 p-2 rounded-full">
                  <Star className="h-5 w-5 text-coin-navy" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Accurate Grading</div>
                  <div className="text-xs text-gray-500">Professional standards</div>
                </div>
              </div>
            </div>

            {/* Decorative Gradient Blobs */}
            <div className="absolute -bottom-10 -left-16 w-52 h-52 bg-coin-gold/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-16 -right-24 w-52 h-52 bg-coin-navy/10 rounded-full blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
