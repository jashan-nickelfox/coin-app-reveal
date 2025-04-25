import React, { useEffect, useState } from "react";
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
    src: "/ss2.svg",
    alt: "App Dashboard",
    caption: "Powerful Dashboard",
    feature: "Collection Overview",
  },
  {
    src: "/identification.svg",
    alt: "Coin Identification",
    caption: "Instant Recognition",
    feature: "AI Identification",
  },
  {
    src: "/collection.svg",
    alt: "Collection Management",
    caption: "Organize Your Collection",
    feature: "Smart Organization",
  },
  {
    src: "/premium.svg",
    alt: "Mint Error Detection",
    caption: "Get Premium Account",
    feature: "Premium Account",
  },
];

const ScreenshotCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = () => {
      const promises = screenshots.map(({ src }) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      Promise.all(promises).finally(() => setIsLoading(false));
    };
    preloadImages();
  }, []);

  useEffect(() => {
    if (!autoplay || isLoading) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, isLoading]);

  const toggleAutoplay = () => setAutoplay((prev) => !prev);
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  return (
    <section id="screenshots" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
      <div className="container mx-auto max-w-6xl px-4 sm:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-3 dark:text-white">Experience CoinApp</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">Discover the intuitive interface and powerful features that make CoinApp the ultimate tool for numismatists.</p>
        </div>
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 z-10 rounded-xl">
              <div className="w-10 h-10 border-4 border-coin-gold/30 border-t-coin-gold rounded-full animate-spin"></div>
            </div>
          )}
          <Carousel opts={{ loop: true, align: "center", startIndex: activeIndex }} className="w-full">
            <CarouselContent className="transition duration-500 ease-in-out">
              {screenshots.map((shot, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 p-4">
                  <div className={cn("rounded-2xl bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col items-center justify-between p-6", index === activeIndex ? "scale-105" : "scale-95 opacity-80")}>                    
                    <Badge className="mb-4 bg-coin-gold text-white px-3 py-1 rounded-full">{shot.feature}</Badge>
                    <div className="relative w-full max-w-[280px] h-[400px] sm:h-[570px] mx-auto rounded-[2.5rem] border-[14px] border-gray-900 bg-gray-800 shadow-lg overflow-hidden">
                      <div className="absolute top-0 w-32 h-6 bg-gray-900 left-1/2 -translate-x-1/2 rounded-b-xl z-10"></div>
                      <div className="absolute top-2 w-16 h-2 bg-gray-800 left-1/2 -translate-x-1/2 rounded-lg z-20"></div>
                      <img src={shot.src} alt={shot.alt} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-coin-navy dark:text-coin-gold">{shot.caption}</h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex -left-4 shadow hover:bg-coin-navy hover:text-white" onClick={handlePrevious} />
            <CarouselNext className="flex -right-4 shadow hover:bg-coin-navy hover:text-white" onClick={handleNext} />
          </Carousel>
          <button onClick={toggleAutoplay} className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700" aria-label={autoplay ? "Pause carousel" : "Play carousel"}>
            {autoplay ? <Pause className="h-4 w-4 text-coin-navy dark:text-coin-gold" /> : <Play className="h-4 w-4 text-coin-navy dark:text-coin-gold" />}
          </button>
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, idx) => (
              <button key={idx} className={cn("w-3 h-3 rounded-full transition-all duration-300", idx === activeIndex ? "bg-coin-gold w-6" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500") } onClick={() => setActiveIndex(idx)} aria-label={`Go to slide ${idx + 1}`} aria-current={idx === activeIndex ? "true" : "false"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
