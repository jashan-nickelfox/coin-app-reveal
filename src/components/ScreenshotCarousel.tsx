
import React, { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";

const screenshots = [
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
    alt: "App Dashboard",
    caption: "Powerful Dashboard",
    feature: "Collection Overview"
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
    alt: "Coin Identification",
    caption: "Instant Recognition",
    feature: "AI Identification"
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80",
    alt: "Collection Management",
    caption: "Organize Your Collection",
    feature: "Smart Organization"
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    alt: "Mint Error Detection",
    caption: "Find Valuable Errors",
    feature: "Error Detection"
  }
];

const ScreenshotCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle image loading
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = screenshots.map(screenshot => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = screenshot.src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false)); // Proceed even if some images fail to load
    };

    preloadImages();
  }, []);

  // Autoplay functionality with proper cleanup
  useEffect(() => {
    if (!autoplay || isLoading) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, isLoading, screenshots.length]);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }

    if (isRightSwipe) {
      setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
    }

    setTouchStart(0);
    setTouchEnd(0);
  }, [touchStart, touchEnd, screenshots.length]);

  const toggleAutoplay = () => {
    setAutoplay(prev => !prev);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50/70 via-white to-coin-light" id="screenshots">
      <div className="container mx-auto max-w-6xl px-4 sm:px-8 py-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">Experience CoinApp</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the intuitive interface and powerful features that make CoinApp the ultimate tool for numismatists
          </p>
        </div>
        
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-50 rounded-xl">
              <div className="w-10 h-10 border-4 border-coin-gold/30 border-t-coin-gold rounded-full animate-spin"></div>
            </div>
          )}

          <Carousel
            opts={{ 
              loop: true, 
              align: "center",
              startIndex: activeIndex
            }}
            className="w-full"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <CarouselContent className="transition-transform duration-500 ease-in-out">
              {screenshots.map((shot, idx) => (
                <CarouselItem
                  key={shot.alt}
                  className="md:basis-1/2 lg:basis-1/3 p-2 sm:p-4 transition-all duration-500 ease-in-out"
                >
                  <div 
                    className={cn(
                      "h-full rounded-2xl overflow-hidden transition-all duration-500 bg-gradient-to-br from-coin-navy/5 to-white p-4 border border-gray-100 hover:shadow-xl group",
                      idx === activeIndex ? "shadow-lg scale-105 opacity-100" : "shadow opacity-80 scale-95"
                    )}
                  >
                    {/* Feature badge */}
                    <Badge className="absolute top-6 left-6 z-10 bg-coin-gold/90 text-white border-none">
                      {shot.feature}
                    </Badge>
                    
                    {/* Phone mockup with screenshot */}
                    <div className="relative mx-auto w-[280px] h-[570px] rounded-[2.5rem] border-[14px] border-gray-900 bg-gray-800 shadow-xl overflow-hidden transition-transform duration-500 ease-in-out group-hover:-rotate-1 group-hover:scale-[1.02]">
                      {/* Phone details */}
                      <div className="absolute top-0 w-32 h-6 bg-gray-900 left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>
                      <div className="absolute top-2 w-16 h-2 bg-gray-800 left-1/2 -translate-x-1/2 rounded-lg z-30"></div>
                      
                      {/* Screenshot with improved loading */}
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Caption */}
                    <div className="text-center mt-6">
                      <h3 className="text-lg font-semibold text-coin-navy">{shot.caption}</h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden sm:flex -left-5 md:-left-6 lg:-left-8 shadow-md hover:bg-coin-navy hover:text-white transition-colors duration-300" />
            <CarouselNext className="hidden sm:flex -right-5 md:-right-6 lg:-right-8 shadow-md hover:bg-coin-navy hover:text-white transition-colors duration-300" />
          </Carousel>
          
          {/* Autoplay control */}
          <button 
            onClick={toggleAutoplay}
            className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md z-20 hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-coin-gold"
            aria-label={autoplay ? "Pause carousel" : "Play carousel"}
          >
            {autoplay ? <Pause className="h-4 w-4 text-coin-navy" /> : <Play className="h-4 w-4 text-coin-navy" />}
          </button>
          
          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-coin-gold ${
                  idx === activeIndex ? "bg-coin-gold w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === activeIndex ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
