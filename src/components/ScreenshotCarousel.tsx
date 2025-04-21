
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const screenshots = [
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
    alt: "App Home",
    caption: "Powerful Dashboard"
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
    alt: "Coin Details",
    caption: "Instant Coin Recognition"
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80",
    alt: "Collection Management",
    caption: "Organize & Manage Collection"
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    alt: "Educational Content",
    caption: "Expert Knowledge Base"
  }
];

const ScreenshotCarousel = () => {
  return (
    <section className="section-padding bg-gradient-to-l from-gray-50/70 via-white to-coin-light" id="screenshots">
      <div className="container mx-auto max-w-4xl px-4 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Explore the App Experience</h2>
          <p className="text-gray-600 text-lg">Swipe through highlights of what CoinApp offers</p>
        </div>
        <div className="relative">
          <Carousel
            opts={{ loop: true, align: "center" }}
            className="w-full max-w-lg mx-auto"
          >
            <CarouselContent>
              {screenshots.map((shot, idx) => (
                <CarouselItem
                  key={shot.alt}
                  className="flex flex-col items-center py-8"
                >
                  <div className="rounded-2xl shadow-xl bg-gradient-to-tr from-white to-gray-100 p-4 relative hover:scale-105 transition-transform duration-300">
                    {/* Mobile device mockup frame effect */}
                    <div className="w-[250px] sm:w-[300px] rounded-[2rem] border-[6px] border-gray-200 bg-black overflow-hidden mx-auto mb-4">
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        className="w-full h-[480px] object-cover"
                        draggable={false}
                      />
                    </div>
                    <span className="block mt-1 text-center text-base sm:text-lg text-coin-navy font-medium">{shot.caption}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigation */}
            <CarouselPrevious aria-label="Previous screenshot" />
            <CarouselNext aria-label="Next screenshot" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
